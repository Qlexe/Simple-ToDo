import "./App.css";
import { Header, Footer, TodoList, AddTaskForm } from "./components";

import plus from "./assets/Plus.svg";

function App() {
  return (
    <div>
      <Header />
      <TodoList></TodoList>
      <div className="right-6 bottom-[90px] fixed flex justify-center items-center bg-[#9395d3] shadow rounded-[100%] w-[70px] h-[70px] font-bold text-[30px] text-white cursor-pointer">
        <img src={plus} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
