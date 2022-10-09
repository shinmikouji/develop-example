import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './index';

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>丸亀製麺のこだわり</>,
};

export const TypePrimary = Template.bind({});
TypePrimary.args = {
  href: '#',
  modifiers: { type: 'primary' },
  children: <>丸亀製麺のこだわり</>,
};

export const TypeSecondary = Template.bind({});
TypeSecondary.args = {
  href: '#',
  modifiers: { type: 'secondary' },
  children: <>丸亀製麺のこだわり</>,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  href: '#',
  modifiers: { size: 'small' },
  children: <>丸亀製麺のこだわり</>,
};

export const ColorDark = Template.bind({});
ColorDark.args = {
  href: '#',
  modifiers: { color: 'dark' },
  children: <>丸亀製麺のこだわり</>,
};

export const withIcon = Template.bind({});
withIcon.args = {
  href: '#',
  name: 'pdf',
  children: <>産地情報</>,
};

export const withPreviousIcon = Template.bind({});
withPreviousIcon.args = {
  href: '#',
  name: 'arrow',
  previousIcon: true,
  children: <>モバイルオーダーで注文する</>,
};

export const External = Template.bind({});
External.args = {
  href: '#',
  name: 'external',
  target: '_blank',
  children: <>モバイルオーダーで注文する</>,
};
