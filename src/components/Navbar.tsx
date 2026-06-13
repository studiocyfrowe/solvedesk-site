import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-8">
            <div className="flex items-center gap-4">
                <div className="text-2xl font-bold">
                    SolveDesk <span className="text-cyan-400">AI</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                    </span>

                    <span className="text-sm font-medium text-green-400">
                        v0.4.1 Beta
                    </span>
                </div>
                {/* <button
                    disabled
                    className="cursor-not-allowed rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-slate-400 opacity-70"
                >
                    Dokumentacja (w opracowaniu)
                </button> */}
                <a
                    href="https://github.com/studiocyfrowe/solvedesk-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-cyan-400 px-5 py-3 flex flex-row space-x-3 items-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Sprawdź repozytorium</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar