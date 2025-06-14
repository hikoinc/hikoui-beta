import type { BrandProps } from "./brand.types";

const Brand = (props: Readonly<BrandProps>) => {
  const { fill = "currentColor", width, height, size, className, ...otherProps } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 170"
      fill={fill}
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      {...otherProps}
    >
      <path d="M0 0H34.2636V34.2012H0V0Z" />
      <path d="M95.7364 0H130V34.2012H95.7364V0Z" />
      <path d="M95.7364 135.799H130V170H95.7364V135.799Z" />
      <path d="M0 135.799H34.2636V170H0V135.799Z" />
      <path d="M0 67.3965H130V101.598H0V67.3965Z" />
    </svg>
  );
};

export default Brand;
