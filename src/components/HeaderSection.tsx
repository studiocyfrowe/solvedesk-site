import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CodeSnippet from "./CodeSnippet"

const HeaderSection = () => {
    return (
        <section className="relative overflow-hidden rounded-[32px] border border-slate-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(220,235,205,0.9),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(190,80,220,0.9),transparent_35%),radial-gradient(circle_at_25%_75%,rgba(0,120,135,0.55),transparent_45%),linear-gradient(135deg,#51636a_0%,#263f65_35%,#16214e_65%,#070a1c_100%)]" />

            <div className="absolute inset-0 backdrop-blur-xl bg-slate-950/20" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
                <span className="inline-block rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
                    Framework RAG dla lokalnych baz wiedzy
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                    Zbuduj własną
                    <br />
                    inteligentną bazę wiedzy
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200 md:text-xl">
                    SolveDesk AI pozwala importować własne dane, generować
                    embeddingi, przechowywać je w bazie wektorowej i wyszukiwać
                    odpowiedzi z użyciem architektury
                    Retrieval-Augmented Generation.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4">
                    <CodeSnippet code={`venv\\Scripts\\activate 
(venv) pip install solvedesk-ai`}/>
                    <span className="text-sm text-slate-500 animate-pulse">
                        ↓ Przewiń dalej, aby poznać możliwości SolveDesk AI
                    </span>
                </div>

                <CodeSnippet code={`$ (venv) solvedesk conf init my-project
[SUCCESS] project structure created

$ (venv) solvedesk db init
[SUCCESS] model downloaded
[SUCCESS] vector database created

$ (venv) solvedesk sync file data.xlsx
[SUCCESS] documents imported

$ (venv) solvedesk data revision
[SUCCESS] Embeddings quality report generated

$ (venv) solvedesk llm init
[SUCCESS] Ollama connection configured

$ (venv) solvedesk main run
[SUCCESS] API running on localhost:8000`}/>
            </div>
        </section>
    )
}

export default HeaderSection