"use client";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import type { Components } from 'react-markdown';

export default function MarkdownRenderer({ content }: { content: string }) {
    const components: Components = {
        h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />
        ),
        h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-6" {...props} />
        ),
        h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-5" {...props} />
        ),
        h4: ({ node, ...props }) => (
            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />
        ),
        p: ({ node, ...props }) => (
            <p className="text-gray-700 mb-4 leading-7" {...props} />
        ),
        a: ({ node, ...props }) => (
            <a className="text-blue-600 underline hover:text-blue-800" {...props} />
        ),
        ul: ({ node, ...props }) => (
            <ul className="list-disc ml-6 mb-4 text-gray-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-6 mb-4 text-gray-700" {...props} />
        ),
        li: ({ node, ...props }) => (
            <li className="mb-2" {...props} />
        ),
        code: ({ node, inline, ...props }: any) =>
            inline ? (
                <code className="text-pink-600 bg-gray-100 px-1 rounded" {...props} />
            ) : (
                <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto" {...props} />
            ),
        pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-4" {...props} />
        ),
        img: ({ node, ...props }) => (
            <img className="rounded-lg shadow-lg max-w-full h-auto my-6" {...props} />
        ),
        strong: ({ node, ...props }) => (
            <strong className="font-bold text-gray-900" {...props} />
        ),
        em: ({ node, ...props }) => (
            <em className="italic" {...props} />
        ),
    };

    return (
        <article className="mx-auto p-6 max-w-4xl">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={components}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}