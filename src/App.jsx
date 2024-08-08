import Nav from "./MainPage/Nav.jsx";
import Content from "./MainPage/Content.jsx";
import AddsOn from "./MainPage/AddsOn.jsx";
import Footer from "./MainPage/Footer.jsx";
import LazyLoadedDiv from "./MainPage/LazyLoadedDiv.jsx";

function App() {
  return (
    <LazyLoadedDiv>
      <section>
        <section>
          <Nav />
        </section>
        <section>
          <Content />
        </section>
        <section>
          <AddsOn />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </LazyLoadedDiv>
  );
}

export default App;
