import Content from "./MainPage/Content.jsx";
import LazyLoadedDiv from "./MainPage/LazyLoadedDiv.jsx";

function App() {
  return (
    <LazyLoadedDiv>
      <section className="bg-[#3557DF]">
        <section>
          <Content />
        </section>
      </section>
    </LazyLoadedDiv>
  );
}

export default App;
