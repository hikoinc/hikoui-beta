import type { ChevronRightProps } from "./chevron-right.types";

const ChevronRight = (props: Readonly<ChevronRightProps>) => {
  const { fill = "currentColor", width, height, size, className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      fill={fill}
      {...otherProps}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
};

ChevronRight.displayName = "Hikoui.ChevronRight";

export default ChevronRight;
