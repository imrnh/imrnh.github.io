import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "public/blogs");
    const files = fs.readdirSync(dir);
    return files.map(file => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params; // ✅ await the Promise

    const filePath = path.join(process.cwd(), "public/blogs", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { content } = matter(fileContent);
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return (
        <div className="prose mx-auto p-6">
            <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    );
}
