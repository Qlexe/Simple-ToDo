import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "./taskService";
import "./App.css";
import {
  HeaderHome,
  Footer,
  TodoList,
  AddTaskForm,
  EditTaskForm,
  CompletedTasks,
} from "./components";

import plus from "./assets/Plus.svg";

function App() {
  const [showPage, setShowPage] = useState("home");
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function Home() {
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

  return (
    <main className="pt-[84px] pb-[90px]">
      {(() => {
        switch (showPage) {
          case "home":
            return <Home />;
          case "add":
            return (
              <AddTaskForm
                tasks={tasks}
                setShowPage={setShowPage}
                setTasks={setTasks}
              />
            );
          case "edit":
            return (
              <EditTaskForm
                taskId={selectedTaskId}
                tasks={tasks}
                setShowPage={setShowPage}
                setTasks={setTasks}
              />
            );
          case "completed":
            return (
              <CompletedTasks
                tasks={tasks.filter((task) => task.isCompleted)}
                setShowPage={setShowPage}
              />
            );
          default:
            return <Home />;
        }
      })()}
    </main>
  );
}

export default App;
