import NavContainer from "components/NavContainer.tsx";
import "./App.css";
import DiceTray from "./components/DiceTray";

const tabs = [
  {
    name: "tray",
    content: (
      <>
        <h1>dice</h1>
        <DiceTray></DiceTray>
      </>
    ),
  },
  {
    name: "test",
    content: <div>hello world</div>,
  },
];

function App() {
  return <NavContainer tabs={tabs} />;
}

export default App;
