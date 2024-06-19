import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contato";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gap: "2rem",
        backgroundColor : "black",
      }}
    >
      <Header />
      <Hero />
      <Contact/>
      <About />
    </div>
  );
}

export default App;
