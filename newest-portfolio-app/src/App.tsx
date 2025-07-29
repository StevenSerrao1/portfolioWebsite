import "./App.css";
import HeaderComponent from "./Components/Header/Header";
import LayoutDynamic from "./Components/LayoutDynamic/LayoutDynamic"
import Footer from "./Components/Sections/Footer/Footer"

function App() {
  return (
      <div className="container-fluid">
          <HeaderComponent />
          <LayoutDynamic />
          <Footer />
      </div>
  );
}

export default App;
