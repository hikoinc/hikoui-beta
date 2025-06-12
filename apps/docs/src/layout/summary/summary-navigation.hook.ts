import { useAllDocs } from "src/hooks";

const useSummaryNavigation = () => {
  const { docHeadings } = useAllDocs();

  return { docHeadings };
};

export default useSummaryNavigation;
