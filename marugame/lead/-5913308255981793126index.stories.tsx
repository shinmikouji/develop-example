import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Lead, LeadProps } from './index';

export default {
  title: 'components/atoms/Lead',
  component: Lead,
} as Meta;

const Template: Story<LeadProps> = (args) => <Lead {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const DirectionHorizontal = Template.bind({});
DirectionHorizontal.args = {
  modifiers: { direction: 'horizontal' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  modifiers: { size: 'small' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  modifiers: { size: 'large' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const SizeSmallDirectionHorizontal = Template.bind({});
SizeSmallDirectionHorizontal.args = {
  modifiers: { size: 'small', direction: 'horizontal' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const SizeLargeDirectionHorizontal = Template.bind({});
SizeLargeDirectionHorizontal.args = {
  modifiers: { size: 'large', direction: 'horizontal' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};

export const ColorLight = Template.bind({});
ColorLight.args = {
  modifiers: { size: 'small', direction: 'horizontal' },
  children: (
    <>
      お店で食べても、
      <br />
      家や職場で食べても、
      <br />
      どこでもおいしい
      <br />
      「丸亀食感」
    </>
  ),
};
