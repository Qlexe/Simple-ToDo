import { HeaderHome, TodoList, Footer } from "./index";
import plus from "../assets/Plus.svg";

export default function Home({ tasks, setTasks, setShowPage, setSelectedTaskId }) {
  return (
    <div>
      <HeaderHome />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        setShowPage={setShowPage}
        setSelectedTaskId={setSelectedTaskId}
      />
      <button
        onClick={() => setShowPage("add")}
        className="right-6 bottom-[90px] fixed flex justify-center items-center bg-[#9395d3] shadow rounded-[100%] w-[70px] h-[70px] font-bold text-[30px] text-white cursor-pointer"
      >
        <img src={plus} alt="Add task" />
      </button>
      <Footer setShowPage={setShowPage} />
    </div>
  );
}