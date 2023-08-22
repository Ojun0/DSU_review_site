import "./App.css";
import Main from "./Components/Main";
import Pop_up from "./Components/Pop_up";
import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import Modal from "react-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Main></Main>
      <Pop_up isOpen={isModalOpen} closeModal={closeModal}>
        <h2>공지사항</h2>
        <p>여기 공지사항 내용 ㅇ러야러ㅑㄹ ㄹ어ㅑ어야러ㅑㅇ러ㅑㅇㄹ</p>
      </Pop_up>
    </div>
  );
}

export default App;
