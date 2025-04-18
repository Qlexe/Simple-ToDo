export function loadTasks() {
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
}

export function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}