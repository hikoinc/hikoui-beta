import React from "react";

export type Element<Props = any> = React.ElementType<Props>;

type OmitProps<Target, Keys extends keyof any = never> = Omit<Target, "transition" | "as" | "color" | Keys>;

export type Merge<Base extends object = object, Override extends object = object> = OmitProps<Base, keyof Override> &
  Override;

type WithAs<
  BaseProps extends object,
  AsProps extends object,
  Props extends object = object,
  AsType extends Element = Element,
> = (Merge<BaseProps, Props> | Merge<AsProps, Props>) & {
  as?: AsType;
};

export interface ForwardRef<
  Component extends Element,
  Props extends object = object,
  OmitKeys extends keyof any = never,
> {
  <AsType extends Element = Component>(
    props: WithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsType>, OmitKeys>,
      Props,
      AsType
    >,
  ): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props>;
  displayName?: string;
}

export type PropsOf<T extends Element> = React.ComponentPropsWithoutRef<T> & {
  as?: Element;
};
