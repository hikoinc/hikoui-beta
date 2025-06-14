import { cx } from "class-variance-authority";

const ColorTokens = () => {
  const colors = [
    {
      name: "white",
      value: "bg-white",
    },
    {
      name: "black",
      value: "bg-black",
    },
  ];

  const paletteClasses = cx("border-divider size-24 rounded-2xl border");

  return (
    <div className="flex flex-col gap-4">
      <h2>Back and White</h2>

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div key={color.name} className={cx(paletteClasses, color.value)} />
        ))}
      </div>
    </div>
  );
};

export default ColorTokens;
