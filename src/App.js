import Navbar from "./components/navbar/Navbar";
import TextForm from "./components/textFrom/TextForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar title="Text-utils-App" about="About this App" />
      <div className="container my-4">
        <TextForm heading="Enter Text Below To Analyze" />
      </div>
    </div>
  );
}

export default App;
