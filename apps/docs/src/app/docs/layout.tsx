import type { PropsWithChildren } from "react";

import { Content, Footer, Header, Main, Sidebar, Summary } from "src/layout";

const RootLayout = async ({ children }: PropsWithChildren) => (
  <div className="space-y-8">
    <Header />

    <Main>
      <Sidebar />
      <Content>{children}</Content>
      <Summary />
    </Main>

    <Footer />
  </div>
);

export default RootLayout;
