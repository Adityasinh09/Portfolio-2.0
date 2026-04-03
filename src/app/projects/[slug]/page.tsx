import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { ReportView } from "./view";
import { MDXContent } from "./mdx-content";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen relative pb-16">
      <Header project={project} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-invert lg:prose-xl max-w-3xl border-t border-zinc-800">
        <MDXContent code={project.body.code} />
      </article>
    </div>
  );

}
