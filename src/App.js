import "./App.css";
import Data from "./components/Data";


function App() {


  return (
    <div className="App">
      <Data opts = {"data"}/>
      <Data opts = {"loading"}/>
      <Data opts = {"error"}/>   
    </div>
  );
}

export default App;
