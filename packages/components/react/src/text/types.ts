/**
 * Part of this code is taken from @chakra-ui/system ❤️
 */

import * as React from "react";
import { Selection as AriaSharedSelection } from "@react-types/shared";

export type As<Props = unknown> = React.ElementType<Props>;
export type DOMElements = keyof React.JSX.IntrinsicElements;
export type CapitalizedDOMElements = Capitalize<Extract<DOMElements, string>>;

export interface DOMElement extends Element, HTMLOrSVGElement {}

type DataAttributes = Record<string, unknown>;

export type DOMAttributes<T = DOMElement> = React.AriaAttributes &
  React.DOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  "transition" | "as" | "color" | OmitAdditionalProps
>;

export type RightJoinProps<
  SourceProps extends object = object,
  OverrideProps extends object = object,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object | unknown,
  AsProps extends object | unknown,
  AdditionalProps extends object = object,
  AsComponent extends As = As,
> = (
  | RightJoinProps<ComponentProps extends object ? ComponentProps : Record<string, unknown>, AdditionalProps>
  | RightJoinProps<AsProps extends object ? AsProps : Record<string, unknown>, AdditionalProps>
) & {
  as?: AsComponent;
};

export interface InternalForwardRefRenderFunction<
  Component extends As,
  Props extends object = object,
  OmitKeys extends keyof React.ComponentPropsWithoutRef<Component> = never,
> {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >,
  ): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props> | undefined;
  displayName?: string | undefined;
}

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;

export type HTMLHeroUIProps<
  T extends As = "div",
  OmitKeys extends keyof React.ComponentPropsWithoutRef<T> = never,
> = Omit<PropsOf<T>, "ref" | "color" | "slot" | "size" | "defaultChecked" | "defaultValue" | OmitKeys> & {
  as?: As;
};

export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type SharedSelection = AriaSharedSelection & {
  anchorKey?: string;
  currentKey?: string;
};
