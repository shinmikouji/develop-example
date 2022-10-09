import React from 'react';
import s from './index.module.scss';
import { AttrModifiersProps, mapAttrModifiers } from 'libs/component';

export type TextProps = {
  children?: React.ReactNode;
  modifiers?: AttrModifiersProps;
};

export const Text: React.FC<TextProps> = ({ children, modifiers }) => (
  <p className={s['a-text']} {...mapAttrModifiers(modifiers)}>
    {children}
  </p>
);
