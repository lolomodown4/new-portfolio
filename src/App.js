import Navbar from "./components/Navbar";
import LandingPageInfo from "./components/LandinPage.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import ContactForm from "./components/ContactForm.js";

/* useContext */
import { useGlobalContext } from "./hooks/AppContext";

function App() {
  const { darkMode } = useGlobalContext();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={classNames(darkMode ? "dark" : "", "scroll-smooth")}>
      <main className=" bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-black  ">
        <Navbar />
        <LandingPageInfo />
        <About />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
