import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from './index';

export default {
  title: 'components/atoms/Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#c3c3c3' }],
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  children: <>お知らせ</>,
  component: <h2 />,
  modifiers: { type: '1', color: 'primary' },
};

export const ColorLight = Template.bind({});
ColorLight.args = {
  children: <>お知らせ</>,
  component: <h2 />,
  modifiers: { type: '1', color: 'light' },
};
ColorLight.parameters = {
  backgrounds: { default: 'dark' },
};

export const Type1 = Template.bind({});
Type1.args = {
  children: <>うどん</>,
  component: <h1 />,
  modifiers: { type: '1', direction: 'vertical' },
};

export const Type1SizeSmall = Template.bind({});
Type1SizeSmall.args = {
  children: (
    <>
      うどん弁当・
      <br />
      お持ち帰り
    </>
  ),
  component: <h1 />,
  modifiers: { type: '1', direction: 'vertical', size: 'small' },
};

export const Type2Vertical = Template.bind({});
Type2Vertical.args = {
  children: <>おすすめ・限定メニュー</>,
  component: <h2 />,
  modifiers: { type: '2', direction: 'vertical' },
};

export const Type2 = Template.bind({});
Type2.args = {
  children: <>産地情報は下記からご確認ください。</>,
  component: <h2 />,
  modifiers: { type: '2' },
};

export const Type3Vertical = Template.bind({});
Type3Vertical.args = {
  children: (
    <>
      今日の麺職人
      <br />
      毎日お店で打っています
    </>
  ),
  component: <h3 />,
  modifiers: { type: '3', direction: 'vertical' },
};

export const Type3 = Template.bind({});
Type3.args = {
  children: <>うどんの注文方法</>,
  component: <h3 />,
  modifiers: { type: '3' },
};

export const Type4Vertical = Template.bind({});
Type4Vertical.args = {
  children: <>お得アプリ</>,
  component: <h4 />,
  modifiers: { type: '4', direction: 'vertical' },
};

export const Type4 = Template.bind({});
Type4.args = {
  children: <>丸亀うどん学級</>,
  component: <h4 />,
  modifiers: { type: '4' },
};

export const HasIcon = Template.bind({});
HasIcon.args = {
  children: <>アレルギー情報について</>,
  component: <h3 />,
  modifiers: { type: '3', color: 'primary' },
  name: 'dot-large',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  children: <>できたてにこだわり、新登場</>,
  component: <h2 />,
  modifiers: { type: '2', align: 'center' },
};
