import { ValidationMap } from "prop-types";
import type {
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  HTMLProps,
  ReactElement,
  ReactNode,
  RefObject,
} from "react";

export type AssignableRef<ValueType> =
  | {
      bivarianceHack(instance: ValueType | null): void;
    }["bivarianceHack"]
  | RefObject<ValueType | null>
  | null;

export type As<BaseProps = any> = ElementType<BaseProps>;

export type PropsWithAs<ComponentType extends As, ComponentProps> = ComponentProps &
  Omit<ComponentPropsWithRef<ComponentType>, "as" | keyof ComponentProps> & {
    as?: ComponentType;
  };

export type PropsFromAs<ComponentType extends As, ComponentProps> = (PropsWithAs<ComponentType, ComponentProps> & {
  as: ComponentType;
}) &
  PropsWithAs<ComponentType, ComponentProps>;

export type ComponentWithForwardedRef<ComponentType extends ElementType, ComponentProps> = ForwardRefExoticComponent<
  ComponentProps & HTMLProps<ElementType<ComponentType>> & ComponentPropsWithRef<ComponentType>
>;

export interface ComponentWithAs<ComponentType extends As, ComponentProps> {
  <AsType extends As>(props: PropsWithAs<AsType, ComponentProps>): ReactElement | null;
  (props: PropsWithAs<ComponentType, ComponentProps>): ReactElement | null;
  displayName?: string;
  propTypes?: ValidationMap<ReactNode>;
  contextTypes?: ValidationMap<ReactNode>;
  defaultProps?: Partial<PropsWithAs<ComponentType, ComponentProps>>;
}
