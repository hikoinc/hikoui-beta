import type { PropsWithChildren } from "react";

import { Content, Footer, Header, Sidebar, Table } from "src/components/layout";

const RootLayout = async ({ children }: PropsWithChildren) => (
  <div className="space-y-8">
    <Header />

    <div className="layout-container flex gap-8">
      <Sidebar />
      <Content>{children}</Content>
      <Table />
    </div>

    <Footer />
  </div>
);

export default RootLayout;
