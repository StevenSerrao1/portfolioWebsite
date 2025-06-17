import "./App.css";
import HeaderComponent from "./Components/Header/Header";

import LayoutDynamic from "./Components/LayoutDynamic/LayoutDynamic"

function App() {
  return (
      <div className="container-fluid">
          <HeaderComponent />
          <LayoutDynamic />
      </div>
  );
}

export default App;
