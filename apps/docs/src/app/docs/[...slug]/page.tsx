import _ from "lodash";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

const DocPage = async (props: DocPageProps) => {
  const { params } = props;

  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  const docsContent = _.find(allDocs, (doc) => doc._raw.flattenedPath.replace(/^docs\//, "") === slugPath);

  if (!docsContent) return notFound();

  const Content = getMDXComponent(docsContent.body.code);

  return <Content />;
};

export const generateMetadata = async (props: DocPageProps) => {
  const { params } = props;

  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join("/");
  const docsMetadata = _.find(allDocs, (doc) => doc._raw.flattenedPath.replace(/^docs\//, "") === slugPath);

  return {
    title: docsMetadata ? `${docsMetadata.title} - Hiko` : "Document - Hiko",
    description: docsMetadata?.description ?? "",
  };
};

export default DocPage;
