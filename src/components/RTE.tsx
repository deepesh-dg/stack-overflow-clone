"use client";

import dynamic from "next/dynamic";

// for more information, see https://mdxeditor.dev/editor/docs/getting-started

// This is the only place InitializedMDXEditor is imported directly.
const RTE = dynamic(
    () =>
        import("@uiw/react-md-editor").then(mod => {
            return mod.default;
        }),
    { ssr: false }
);

export const MarkdownPreview = dynamic(
    () =>
        import("@uiw/react-md-editor").then(mod => {
            return mod.default.Markdown;
        }),
    { ssr: false }
);

export default RTE;
