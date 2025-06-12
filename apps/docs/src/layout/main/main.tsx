import type { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => <div className="layout-container flex gap-8">{children}</div>;

export default Main;
