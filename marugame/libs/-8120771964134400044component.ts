import { paramCase } from 'change-case';

export type NavigationItemProps = {
  title: string;
  link: string;
  target?: boolean;
  current?: boolean;
  isTakeoutOnly?: boolean;
};

export type NavigationListProps = {
  head?: NavigationItemProps[];
  sub?: NavigationItemProps[];
};

export type TypeModifiersProps<M extends string> = {
  type?: M | M[];
};
export type AttrModifiersProps =
  | {
      size?: 'small' | 'large';
      color?: 'light' | 'dark' | 'primary' | 'inherit';
      background?: 'dark' | 'texture' | 'caution';
      direction?: 'vertical' | 'horizontal' | 'rtl' | 'ltr';
      align?: 'center';
      'font-family'?: 'sans' | 'base';
    }
  | undefined;

export function mapAttrModifiers(
  dataSet: AttrModifiersProps,
): Record<string, string> {
  if (!dataSet) return {};
  const result: Record<string, string> = Object.assign(
    {},
    ...(Object.keys(dataSet) as (keyof AttrModifiersProps)[]).map((key) => {
      return { [`data-${paramCase(key)}`]: dataSet[key] };
    }),
  );
  return result;
}

export function getRel(href: string, target: string) {
  const arr = [];
  if (target === '_blank') arr.push('noopener');
  if (/^http/.test(href || '')) arr.push('noreferrer');
  return arr.join(' ');
}
