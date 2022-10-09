import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ArrowTextLink, ArrowTextLinkProps } from './index';

export default {
  title: 'components/atoms/ArrowTextLink',
  component: ArrowTextLink,
} as Meta;

const Template: Story<ArrowTextLinkProps> = (args) => (
  <ArrowTextLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  target: '',
  children: <>一覧を見る</>,
};
