import { Banner } from "./Components/Banner/Banner";
import { Categories } from "./Components/Categories/Categories";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {

  return (
    <>
      {/* HEADER */}
      <Header />

      <main>
        {/* BANNER */}
        <Banner />
        
        {/* CATEGORIES */}
        <Categories />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
