interface DocsLayoutProps {
  children: React.ReactNode;
}

const DocsLayout = (props: DocsLayoutProps) => {
  const { children } = props;

  return <div className="flex flex-col gap-8">{children}</div>;
};

export default DocsLayout;
