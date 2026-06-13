interface RagSectionProps {
    cards?: [string, string][]
}

const RagSection : React.FC<RagSectionProps> = ({cards}) => {
    return (
        <section className="border-t border-slate-800 py-28">
            <h2 className="mb-14 text-center text-4xl font-bold">
                Wszystko, czego potrzebujesz do RAG
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {cards && cards.map(([title, desc]) => (
                    <div
                        key={title}
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500"
                    >
                        <h3 className="mb-3 text-xl font-bold">{title}</h3>
                        <p className="text-slate-400">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RagSection