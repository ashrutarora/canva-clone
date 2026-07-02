"use client";

import dynamic from "next/dynamic";

// Fabric.js is a browser-only library — it needs the real `window` and
// `document`, which don't exist during server-side rendering (SSR).
// Even a "use client" component is still rendered once on the server,
// so importing the Editor normally makes fabric crash on the server.
//
// `next/dynamic` with `ssr: false` tells Next.js to load the Editor
// ONLY in the browser, so fabric never runs its Node.js/jsdom branch.
const Editor = dynamic(
    () => import("@/features/editor/components/editor").then((mod) => mod.Editor),
    { ssr: false }
);

const EditorProjectIdPage = () => {
    return (
        <div>
            <Editor />
        </div>
    );
};

export default EditorProjectIdPage;