import type { ChevronLeftProps } from "./chevron-left.types";

const ChevronLeft = (props: Readonly<ChevronLeftProps>) => {
  const { fill = "currentColor", width, height, size, className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      fill={fill}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      {...otherProps}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
};

ChevronLeft.displayName = "Hikoui.ChevronLeft";

export default ChevronLeft;
