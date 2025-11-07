import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "../components/Card";

export default function PapersList() {
    const papersDir = path.join(process.cwd(), "public/papers");
    const files = fs.readdirSync(papersDir);

    const posts = files.map((file) => {
        const filePath = path.join(papersDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent); // optional frontmatter
        const slug = file.replace(/\.md$/, "");

        return {
            title: data?.title || slug.replace(/-/g, " "),
            description: data?.description || "",
            imageUrl: data?.image || "https://placehold.co/600x400?text=Blog",
            href: `/papers/${slug}`,
        };
    });

    return (
        <section className="py-16">
            <center>
                <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'var(--font-mw)' }}>
                    Research Papers
                </h2>
            </center>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Card key={post.href} {...post} />
                ))}
            </div>
        </section>
    );
}