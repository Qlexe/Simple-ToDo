import { useState, useEffect } from "react";
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
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Buy groceries",
            detail: "Milk, bread, vegetables, fruits",
            isCompleted: false,
          },
          {
            id: 2,
            title: "Call mom",
            detail: "Ask how she's doing and arrange a meeting",
            isCompleted: false,
          },
          {
            id: 3,
            title: "Pay utilities",
            detail: "Electricity, gas, water, internet",
            isCompleted: false,
          },
          {
            id: 4,
            title: "Do cleaning",
            detail: "Vacuum, dust, mop the floor",
            isCompleted: false,
          },
          {
            id: 5,
            title: "Prepare report",
            detail: "Collect data, analyze results, create presentation",
            isCompleted: false,
          },
          {
            id: 6,
            title: "Make doctor appointment",
            detail: "Call the clinic and schedule an appointment",
            isCompleted: false,
          },
          {
            id: 7,
            title: "Workout",
            detail: "30 min cardio, strength exercises, stretching",
            isCompleted: false,
          },
          {
            id: 8,
            title: "Study new topic",
            detail: "Read material, take notes, complete practical tasks",
            isCompleted: false,
          },
          {
            id: 9,
            title: "Meet friends",
            detail: "Cafe at 7:00 PM, don't forget Anna's gift",
            isCompleted: false,
          },
          {
            id: 10,
            title: "Car maintenance",
            detail: "Oil change, brake check, diagnostics",
            isCompleted: false,
          },
          {
            id: 11,
            title: "Update resume",
            detail: "Add new skills and work experience, update contact info",
            isCompleted: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
