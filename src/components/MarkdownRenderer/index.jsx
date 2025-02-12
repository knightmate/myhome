import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // ✅ Allows HTML inside Markdown

const MarkdownRenderer = ({ filePath, className = "markdown-container" }) => {
    const [markdown, setMarkdown] = useState("");

    // ✅ Async function to fetch markdown content
    const fetchMarkdown = async () => {
        try {
            const response = await fetch(filePath);
            const text = await response.text();

            console.log("📄 Loaded Markdown File:", filePath);
            setMarkdown(text);
        } catch (error) {
            console.error("❌ Error loading markdown:", error);
        }
    };

    useEffect(() => {
        fetchMarkdown();
    }, [filePath]);

    return (
        <div className={className}>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]} // ✅ Enables raw HTML inside Markdown
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
