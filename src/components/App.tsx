import "../style.css";
import MainFilter from "./Filters/MainFilter";
import MainResults from "./Users/MainResults";

function App() {
  return (
    <div className="userCatalog">
      <MainFilter />
      <MainResults />
    </div>
  );
}

export default App;
