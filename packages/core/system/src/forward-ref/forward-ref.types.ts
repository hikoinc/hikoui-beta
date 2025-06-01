import type { ComponentProps, ComponentPropsWithoutRef, ComponentType, ElementType, JSX, Ref } from "react";

export type As<Props = Record<string, unknown>> = ElementType<Props>;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};

type OmitCommonProps<Target, OmitAdditionalProps extends PropertyKey = never> = Omit<
  Target,
  "transition" | "as" | "color" | OmitAdditionalProps
>;

export type RightJoinProps<
  SourceProps extends object = object,
  OverrideProps extends object = object,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  SourceComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = object,
  AsComponent extends As = As,
> = RightJoinProps<SourceComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export interface ComponentWithAs<Component extends As, Props extends object = object> {
  <AsComponent extends As = Component>(
    props: MergeWithAs<ComponentProps<Component>, ComponentProps<AsComponent>, Props, AsComponent>,
  ): JSX.Element;

  displayName?: string;
  defaultProps?: Partial<Props>;
  id?: string;
}

export type RefOf<T extends As> = T extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[T]
  : T extends ComponentType<infer Props>
    ? Props extends { ref?: Ref<infer RefType> }
      ? RefType
      : never
    : never;
