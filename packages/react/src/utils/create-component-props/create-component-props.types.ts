import type { ElementType } from "react";

export interface CreateComponentPropsProps {
  variantClasses: string;
  otherProps: Record<string, string | number | boolean | null | undefined>;
  as?: ElementType;
  className?: string;
}
