import "./App.scss";

import { Header, Footer } from "./layout/";
import { Dashboard } from "./components/";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
