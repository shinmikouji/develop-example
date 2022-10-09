import React from 'react';
import s from './index.module.scss';
import { mapAttrModifiers, AttrModifiersProps } from 'libs/component';

export type LeadProps = {
  children?: React.ReactNode;
  modifiers?: AttrModifiersProps;
};

export const Lead: React.FC<LeadProps> = ({ children, modifiers }) => (
  <p className={s['a-lead']} {...mapAttrModifiers(modifiers)}>
    {children}
  </p>
);
