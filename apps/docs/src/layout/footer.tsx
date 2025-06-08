import type { FC } from "react";

const Footer: FC = () => (
  <footer style={{ background: "lightsalmon", padding: 20 }}>Powered by Nextra {new Date().getFullYear()}</footer>
);

export default Footer;
