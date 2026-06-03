import { faGithub, faKeybase, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookAtlas, faBrain, faCheckCircle, faCoffee, faDesktop, faDollar, faFileShield, faLock, faNoteSticky, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header>
          <nav className="flex items-center justify-between py-8">
            <div className="text-2xl font-bold">
              SolveDesk <span className="text-cyan-400">AI</span>
            </div>

            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-slate-400 opacity-70"
            >
              Dokumentacja (w opracowaniu)
            </button>
          </nav>

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
                <a
                  href="https://github.com/studiocyfrowe/solvedesk-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-400 px-5 py-3 flex flex-row space-x-3 items-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Pobierz repozytorium</span>
                </a>

                <span className="text-sm text-slate-500 animate-pulse">
                  ↓ Przewiń dalej, aby poznać możliwości SolveDesk AI
                </span>
              </div>

              <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-left shadow-2xl">
                <div className="mb-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <pre className="overflow-x-auto text-sm text-slate-300">
                  {`$ solvedesk conf init my-project

$ solvedesk db init
✔ model downloaded
✔ vector database created

$ solvedesk sync file data.xlsx
✔ documents imported

$ solvedesk run:app
✔ API running on localhost:8000

$ solvedesk data revision
✔ Embeddings quality report generated

$ solvedesk llm init
✔ Ollama connection configured`}
                </pre>
              </div>
            </div>
          </section>
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
          <h2 className="mb-14 text-center text-4xl font-bold">
            Wszystko, czego potrzebujesz do RAG
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Import danych", "CSV, JSON, XLSX oraz API."],
              ["Embeddingi", "Tworzenie reprezentacji wektorowych tekstu."],
              ["Vector Search", "Wyszukiwanie semantyczne dokumentów."],
              [
                "CLI",
                "Konfiguruj projekt, bazę, modele i synchronizację z poziomu terminala."
              ],
              [
                "Lokalne modele",
                "Korzystaj z lokalnych modeli embeddingowych i LLM przez Ollama."
              ],
              [
                "Analiza jakości",
                "Sprawdzaj klastry, cosine similarity, tokeny i PCA."
              ]
            ].map(([title, desc]) => (
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
              {[
                [
                  "CLI",
                  "Zestaw komend do konfiguracji projektu, bazy wektorowej, modeli, importu danych i uruchamiania API."
                ],
                [
                  "Importer danych",
                  "Mechanizm wczytywania danych z plików CSV, JSON, XLSX oraz zewnętrznych źródeł API."
                ],
                [
                  "Model embeddingowy",
                  "Warstwa zamieniająca tekst na wektory, dzięki którym możliwe jest wyszukiwanie semantyczne."
                ],
                [
                  "Baza wektorowa",
                  "Lokalne repozytorium embeddingów i metadanych, wykorzystywane do odnajdywania podobnych dokumentów."
                ],
                [
                  "RAG Engine",
                  "Mechanizm pobierający najtrafniejsze dokumenty i przekazujący je jako kontekst do modelu językowego."
                ],
                [
                  "API",
                  "Warstwa aplikacyjna umożliwiająca integrację SolveDesk AI z własnym frontendem lub innymi systemami."
                ],
                [
                  "LLM Connector",
                  "Połączenie z lokalnym modelem językowym, na przykład przez Ollama."
                ],
                [
                  "Data Revision",
                  "Narzędzia do analizy jakości danych, klastrów, tokenów, embeddingów i wizualizacji PCA."
                ],
                [
                  "Konfiguracja projektu",
                  "Plik środowiskowy i ustawienia określające nazwę projektu, model, kolekcję oraz lokalizację bazy."
                ]
              ].map(([title, desc]) => (
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
              {[
                [
                  "Helpdesk IT",
                  "Automatyczne wyszukiwanie rozwiązań zgłoszeń, instrukcji i procedur serwisowych."
                ],
                [
                  "Obsługa klienta",
                  "Chatbot odpowiadający na pytania klientów na podstawie regulaminów, FAQ i dokumentacji."
                ],
                [
                  "Baza wiedzy pracowników",
                  "Szybki dostęp do procedur, polityk firmowych i dokumentów wewnętrznych."
                ],
                [
                  "Dział HR",
                  "Wyszukiwanie informacji o benefitach, urlopach, onboardingach oraz procesach kadrowych."
                ],
                [
                  "Dokumentacja techniczna",
                  "Odnajdywanie fragmentów instrukcji, specyfikacji i dokumentacji produktowej."
                ],
                [
                  "Compliance i audyty",
                  "Weryfikacja procedur oraz szybkie odnajdywanie wymaganych dokumentów."
                ],
                [
                  "Działy prawne",
                  "Analiza umów, regulaminów i aktów prawnych z wykorzystaniem wyszukiwania semantycznego."
                ],
                [
                  "Zarządzanie wiedzą",
                  "Centralizacja wiedzy pochodzącej z wielu systemów, plików i źródeł danych."
                ],
                [
                  "Integracja WWW",
                  "Połącz AI z własną stroną internetową, panelem klienta lub systemem firmowym. Użytkownicy mogą zadawać pytania bezpośrednio z aplikacji, a model korzysta z lokalnej bazy wiedzy, dokumentacji i danych biznesowych."
                ],
              ].map(([title, desc]) => (
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
      </div>
    </div>
  );
}