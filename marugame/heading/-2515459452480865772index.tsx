import React, { cloneElement, useMemo } from 'react';
import s from './index.module.scss';
import {
  mapAttrModifiers,
  AttrModifiersProps,
  TypeModifiersProps,
} from 'libs/component';
import { Icon, IconProps } from 'components/atoms/icon';

export type HeadingProps = Pick<IconProps, 'name'> & {
  children?: React.ReactNode;
  modifiers?: AttrModifiersProps & TypeModifiersProps<'1' | '2' | '3' | '4'>;
  component: React.ReactElement;
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  modifiers,
  component,
  name,
}) => {
  return useMemo(() => {
    return cloneElement(
      component,
      {
        ...component.props,
        className: s['a-heading'],
        ...mapAttrModifiers(modifiers),
      },
      <>
        {name && (
          <div className={s['a-heading__icon-wrapper']} data-name={name}>
            <Icon name={name}></Icon>
          </div>
        )}
        {children}
      </>,
    );
  }, [children, component, modifiers, name]);
};
