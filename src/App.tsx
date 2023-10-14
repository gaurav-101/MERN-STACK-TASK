import "./App.css";
import Chart from "./Chart";
import { exportCrimeDataToPdf } from "./utils";
import CrimeData from "./CrimeData";

function App() {
  return (
    <div className="App">
      <button className="button" onClick={exportCrimeDataToPdf}>
        <img src="printer.png" alt="" />
        <a> Print</a>
      </button>
      <CrimeData/>
    </div>
  );
}

export default App;
