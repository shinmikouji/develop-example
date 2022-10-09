import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image, ImageProps } from './index';

export default {
  title: 'components/atoms/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://placehold.jp/320x240.png',
  spSrc: 'https://placehold.jp/114x114.png',
  tabSrc: 'https://placehold.jp/640x480.png',
  alt: 'ダミー画像',
};
