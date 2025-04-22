import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "./taskService";
import "./App.css";
import {
  Home,
  AddTaskForm,
  EditTaskForm,
  CompletedTasks,
} from "./components";

function App() {
  const [showPage, setShowPage] = useState("home");
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);



  return (
    <main className="pt-[84px] pb-[90px]">
      {(() => {
        switch (showPage) {
          case "home":
            return <Home 
              tasks={tasks}
              setTasks={setTasks}
              setShowPage={setShowPage}
              setSelectedTaskId={setSelectedTaskId}
            />;
          case "add":
            return (
              <AddTaskForm
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
