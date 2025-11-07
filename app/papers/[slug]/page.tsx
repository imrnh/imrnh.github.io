import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "public/papers");
    const files = fs.readdirSync(dir);
    return files.map(file => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    const filePath = path.join(process.cwd(), "public/papers", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // ✅ Get BOTH data and content from the file
    const { data, content } = matter(fileContent);

    // // Process only the markdown content
    // const processed = await remark().use(html).process(content);
    // const contentHtml = processed.toString();

    // console.log(contentHtml);

    return <MarkdownRenderer content={content} />;

    // return <MarkdownRenderer html={contentHtml} />;
}