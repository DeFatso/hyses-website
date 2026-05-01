import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;