import React from "react"

interface CodeSnippetProps {
    code: string
}

const CodeSnippet : React.FC<CodeSnippetProps> = ({ code }) => {
    return (
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-left shadow-2xl">
            <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="overflow-x-auto text-sm text-slate-300">
                {code}
            </pre>
        </div>
    )
}

export default CodeSnippet