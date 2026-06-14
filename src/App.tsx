import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookAtlas, faBrain, faCheckCircle, faCoffee, faDesktop, faDollar, faFileShield, faNoteSticky, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usage } from "./data/usage";
import { destiny } from "./data/destiny";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import { useState } from "react";

export default function App() {
  const [showCookies, setShowCookies] = useState(true)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header>
          <Navbar />
          <HeaderSection />
        </header>

        <section className="border-t border-slate-800 py-28">
          <h2 className="mb-6 text-center text-4xl font-bold">
            Dlaczego SolveDesk AI?
          </h2>

          <p className="mx-auto mb-16 max-w-4xl text-center text-slate-400">
            Nie każdy problem wymaga budowania rozwiązania od podstaw.
            WordPress świetnie sprawdza się jako CMS, a Laravel pozwala szybko
            tworzyć aplikacje webowe. Jednak budowa systemów RAG,
            wyszukiwania semantycznego i baz wiedzy AI wymaga zupełnie innych
            narzędzi.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FontAwesomeIcon icon={faNoteSticky} />
              </div>

              <h3 className="mb-2 text-2xl font-bold">WordPress</h3>

              <p className="mb-4 font-medium text-cyan-400">
                Darmowy system CMS
              </p>

              <p className="text-slate-400">
                Idealny do tworzenia stron internetowych, blogów i portali
                informacyjnych. Nie został jednak zaprojektowany do pracy z
                embeddingami, bazami wektorowymi oraz RAG.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <FontAwesomeIcon icon={faToolbox} />
              </div>

              <h3 className="mb-2 text-2xl font-bold">Laravel</h3>

              <p className="mb-4 font-medium text-cyan-400">
                Szybkie tworzenie aplikacji webowych
              </p>

              <p className="text-slate-400">
                Popularny framework PHP umożliwiający szybkie budowanie API,
                paneli administracyjnych i systemów biznesowych. Nie dostarcza
                jednak gotowych mechanizmów dla lokalnych baz wiedzy AI.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500 bg-cyan-400 p-8 shadow-lg shadow-cyan-500/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/10 text-slate-950">
                <FontAwesomeIcon icon={faBrain} />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-slate-950">SolveDesk AI</h3>

              <p className="mb-4 font-medium text-slate-950">
                Framework dla inteligentnych baz wiedzy
              </p>

              <p className="text-slate-950">
                Gotowe narzędzia do importu danych, generowania embeddingów,
                baz wektorowych, wyszukiwania semantycznego, RAG, analizy
                jakości danych oraz integracji z lokalnymi modelami LLM.
              </p>
            </div>
          </div>
        </section>



        <section className="border-t border-slate-800 py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-center text-4xl font-bold">
              Z czego składa się SolveDesk AI?
            </h2>

            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-slate-400">
              SolveDesk AI łączy kilka warstw potrzebnych do budowy lokalnej,
              inteligentnej bazy wiedzy — od importu danych, przez embeddingi,
              aż po wyszukiwanie semantyczne i integrację z modelem LLM.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {usage.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500"
                >
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {title}
                  </h3>

                  <p className="text-slate-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="rounded-[32px] bg-cyan-400 px-8 py-16 text-center text-slate-950">
            <h2 className="mb-4 text-4xl font-bold">
              Framework dla własnej wiedzy firmowej
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-lg">
              Twórz lokalne systemy AI oparte na dokumentach, zgłoszeniach,
              instrukcjach, FAQ i danych administracyjnych.
            </p>

            <button className="rounded-xl bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
              Sprawdź projekt
            </button>
          </div>
        </section>

        <section className="border-t border-slate-800 py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-center text-4xl font-bold">
              Zastosowania biznesowe RAG
            </h2>

            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-slate-400">
              Retrieval-Augmented Generation pozwala budować systemy AI oparte na
              własnych danych organizacji. Zamiast polegać wyłącznie na wiedzy modelu,
              odpowiedzi generowane są na podstawie dokumentów, procedur i informacji
              znajdujących się w firmowej bazie wiedzy.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {destiny.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <FontAwesomeIcon icon={faDesktop} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="text-slate-400">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
              <h3 className="mb-8 text-2xl font-bold">
                Dlaczego firmy wdrażają RAG?
              </h3>

              <div className="grid gap-6 md:grid-cols-4">
                <div>
                  <div className="mb-2 text-3xl font-bold text-cyan-400">
                    <FontAwesomeIcon icon={faBookAtlas} />
                  </div>
                  <p className="text-slate-300">
                    Szybszy dostęp do wiedzy
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-3xl font-bold text-cyan-400">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className="text-slate-300">
                    Trafniejsze odpowiedzi
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-3xl font-bold text-cyan-400">
                    <FontAwesomeIcon icon={faFileShield} />
                  </div>
                  <p className="text-slate-300">
                    Dane pozostają lokalnie
                  </p>
                </div>

                <div>
                  <div className="mb-2 text-3xl font-bold text-cyan-400">
                    <FontAwesomeIcon icon={faDollar} />
                  </div>
                  <p className="text-slate-300">
                    Niższe koszty wsparcia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
            <div className="mb-4 text-5xl">
              <FontAwesomeIcon icon={faCoffee} />
            </div>

            <h2 className="mb-4 text-4xl font-bold">
              Kodowanie bez dobrej kawy <br />to jak RAG bez embeddingów
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
              Jeśli SolveDesk AI okazał się przydatny, możesz wesprzeć dalszy rozwój
              projektu. Każda kawa pomaga tworzyć nowe funkcje, poprawiać dokumentację
              i rozwijać framework.
            </p>

            <a
              href="https://buycoffee.to/studiocyfrowe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Postaw wirtualną kawę
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-8">
          <div className="container mx-auto flex flex-col items-center gap-4 text-center text-sm text-slate-500">
            <p>
              License MIT
              <br />
              © 2026 SolveDesk AI. Local knowledge base framework.
              <br />
              Made by studiocyfrowe / Dominik Hofman
            </p>

            <a
              href="https://www.linkedin.com/in/hofmandesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </footer>
        {showCookies && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm md:items-center">
            <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <h2 className="mb-3 text-2xl font-bold text-white">
                Informacja o cookies
              </h2>

              <p className="mb-6 text-slate-400">
                Ta strona może wykorzystywać pliki cookies w celu poprawnego działania,
                analizy ruchu oraz ulepszania doświadczenia użytkownika. Korzystając ze
                strony, możesz zaakceptować ich użycie.
              </p>

              <button
                onClick={() => setShowCookies(false)}
                className="w-full rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Akceptuję
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}