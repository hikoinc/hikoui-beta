import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<C extends ElementType, P = Record<string, unknown>> = Omit<
  ComponentPropsWithoutRef<C>,
  PropsToOmit<C, P>
> &
  P &
  AsProp<C>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type PolymorphicPropsWithRef<C extends ElementType, P = Record<string, unknown>> = PolymorphicComponentProps<
  C,
  P
> & {
  ref?: PolymorphicRef<C>;
};
