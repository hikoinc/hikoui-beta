import { Text as HikoText } from "@hikoui-beta/react";

import textVariants from "./text.variants";
import type { TextProps } from "./text.types";

const Text = (props: Readonly<TextProps>) => {
  const { variant = "body", as, children, className } = props;

  const textProps = textVariants[variant];

  return (
    <HikoText as={as} className={className} {...textProps}>
      {children}
    </HikoText>
  );
};

export default Text;
