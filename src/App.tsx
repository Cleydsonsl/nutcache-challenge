import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </>
    </div>
  );
}

export default App;
