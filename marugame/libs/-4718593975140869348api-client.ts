import { createClient } from 'microcms-js-sdk';
import { Custom404 } from './microcms/404';
import { Privacy } from './microcms/privacy';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_CMS_SERVICE_ID || '',
  apiKey: process.env.NEXT_PUBLIC_CMS_STG_API_KEY || '',
});

export const navigation = async () => {
  return await client.get({
    endpoint: 'marugame-data-navigations',
  });
};

export const services = async () => {
  const response =
    (await client.get({
      endpoint: 'marugame-list-services',
    })) || {};
  return response.contents || null;
};

export const menuHome = async () => {
  return await client.get({
    endpoint: 'marugame-pages-menus-home',
  });
};

export const menuRawItems = async (category: string) => {
  const response =
    (await client.get({
      endpoint: `marugame-list-menus-${category}`,
      queries: {
        limit: 100,
      },
    })) || {};
  return response.contents || null;
};

export const menuLabels = async () => {
  const keys = ['temperatures', 'attributes', 'sizes', 'filters'];
  const arr2obj = async (res: any) => {
    return await Object.assign(
      {},
      ...(res || []).map((item: any) => {
        return {
          [item.id]: item.label,
        };
      }),
    );
  };
  const labels = Object.assign(
    {},
    ...(await Promise.all(
      keys.map(async (key) => {
        const response =
          (await client.get({
            endpoint: `marugame-data-menu-${key}`,
          })) || {};
        return {
          [key]: await arr2obj(response.contents || null),
        };
      }),
    )),
  );
  return labels;
};

export const menuCategories = async (currentCategoryKey?: string) => {
  const response =
    (await client.get({
      endpoint: 'marugame-pages-menus-categories',
    })) || {};
  const { notes } = await menuHome();
  const categories = await Promise.all(
    (response.contents || []).map(async (item: any) => {
      const { isTakeoutOnly } = await menuItems(item.id);
      item.notes = notes.concat(item.notes).map((note: any) => note.note);
      item.takeout_only = isTakeoutOnly;
      return item;
    }),
  );
  const currentCategory = currentCategoryKey
    ? categories.find((category: any) => category.id === currentCategoryKey)
    : null;
  return {
    categories,
    currentCategory,
  };
};

export const menuDetailButtons = async () => {
  const response =
    (await client.get({
      endpoint: 'marugame-data-menu-buttons',
    })) || {};
  return Object.assign(
    {},
    ...(response.contents || []).map((item: any) => {
      return {
        [item.id]: item,
      };
    }),
  );
};

export const menuDetailFeatures = async (currentCategoryKey?: string) => {
  const keyList = ['howto', 'concept'];
  const categoryList = ['udon', 'tempura'];
  return await Object.assign(
    {},
    ...(await Promise.all(
      keyList.map(async (key: string) => {
        if (!categoryList.includes(currentCategoryKey || '')) {
          return {
            [key]: null,
          };
        }
        const response =
          (await client.get({
            endpoint: `marugame-list-${currentCategoryKey}-${key}`,
          })) || {};
        return {
          [key]: response.contents || null,
        };
      }),
    )),
  );
};

export const menuNavigation = async (currentCategoryKey?: string) => {
  const { categories } = await menuCategories();
  const navigation = categories.map((category: any) => {
    return {
      title: category.name,
      link: category.link,
      current: category.link.split('/').includes(currentCategoryKey),
      isTakeoutOnly: category.takeout_only,
    };
  });
  return {
    shopMenuNavigation: navigation.filter((item) => !item.isTakeoutOnly),
    takeoutMenuNavigation: navigation,
  };
};

export const menuParseItem = async (
  item: any,
  category: string,
  labels: any,
) => {
  return Object.assign(item, {
    href: `/menu/${category}/${item.id}/`,
    price_notes: item.price_notes?.map((item: any) => item.note) || null,
    notes: item.notes?.map((item: any) => item.note) || null,
    sizeUnits: Object.keys(item.price)
      .map((key: string) => {
        if (
          ['small', 'regular', 'large', 'xlarge'].includes(key) &&
          item.price[key]
        ) {
          return labels.sizes[key];
        } else {
          return null;
        }
      })
      .filter(Boolean),
    prices: Object.keys(item.price)
      .map((key: string) => {
        if (!labels.sizes[key] && key !== 'no_size') return null;
        return {
          unit: key !== 'no_size' ? labels.sizes[key] : '',
          number: item.price[key],
          default: Boolean(
            ['regular', 'pieces', 'bowls', 'no_size'].includes(key) &&
              item.price[key],
          ),
        };
      })
      .filter(Boolean),
    ...Object.assign(
      {},
      ...Object.keys(labels).map((key: string) => {
        return {
          [key]: Object.assign(
            {},
            ...Object.keys(labels[key]).map((_key: string) => {
              return {
                [_key]:
                  item[key] && item[key][_key] ? labels[key][_key] : false,
              };
            }),
          ),
        };
      }),
    ),
  });
};

export const menuItems = async (category: string) => {
  const rawItems = await menuRawItems(category);
  const labels = await menuLabels();
  const items = await Promise.all(
    rawItems.map(async (item: any) => {
      return await menuParseItem(item, category, labels);
    }),
  );

  const menus = items.filter((item: any) => !item.attributes.takeout_only);
  const takeoutMenus = items.filter(
    (item: any) =>
      item.attributes.takeout_available || item.attributes.takeout_only,
  );
  const takeoutOnlyMenus = items.filter(
    (item: any) => item.attributes.takeout_only,
  );
  return {
    menus,
    takeoutMenus,
    takeoutOnlyMenus,
    isTakeoutOnly: menus.length === 0,
  };
};

export const menuAllItems = async () => {
  const { categories } = await menuCategories();
  const items = Object.assign(
    {},
    ...(await Promise.all(
      categories
        .map((category: any) => category.id)
        .map(async (key: string) => {
          return {
            [key]: await menuRawItems(key),
          };
        }),
    )),
  );
  return items;
};

export const menuItem = async (category: string, menu: string) => {
  const items = await menuRawItems(category);
  const labels = await menuLabels();
  const item = await menuParseItem(
    Object.assign({}, ...items.filter((item: any) => item.id === menu)),
    category,
    labels,
  );
  return item;
};

export const menuRelations = async () => {
  const response =
    (await client.get({
      endpoint: 'marugame-list-menu-relations',
    })) || {};
  return response.contents || null;
};

export const privacy = () => client.getObject<Privacy>({ endpoint: 'privacy' });
export const custom404 = () => client.getObject<Custom404>({ endpoint: '404' });
