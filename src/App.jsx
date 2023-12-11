import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Modal from "./constants/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="app">
      <Main setModal={setModal}/>
      {modal && <Modal selModal={setModal} />}
    </div>
  );
}

export default App;
