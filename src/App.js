import Header from "./components/Header";
import MainInfoCards from "./components/MainInfoCards";
import OverViewCards from "./components/OverViewCards";

function App() {

  return (
    <div className="dashboard-container">
      <Header />
      <MainInfoCards />
      <OverViewCards />
    </div>
  );
}

export default App;
