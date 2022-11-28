import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { v4 as uid } from "uuid";

import UpdateTask from "./components/UpdateTask";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";

function App() {
  // tasks state
  const [todo, setTodo] = useState([
    // {
    //   id: uid(),
    //   title: "task 1",
    //   status: false,
    //   createdAt: new Date().toLocaleTimeString(),
    // },
    // {
    //   id: uid(),
    //   title: "task 2",
    //   status: false,
    //   createdAt: new Date().toLocaleTimeString(),
    // },
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // add task
  const addTask = () => {
    if (newTask) {
      let task = {
        id: uid(),
        title: newTask,
        status: false,
        createdAt: new Date().toLocaleTimeString(),
      };
      setTodo([...todo, task]);
      setNewTask("");
    }
  };

  // delete task
  const deleteTask = (id) => {
    setTodo(todo.filter((task) => task.id != id));
  };

  // mark task as done or completed
  const markDone = (id) => {
    setTodo(
      todo.map((task) =>
        task.id == id ? { ...task, status: !task.status } : task
      )
    );
  };

  // cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // change task for update
  const changeHolder = (e) => {
    setUpdateData({ ...updateData, title: e.target.value });
  };

  // update task
  const updateTask = () => {
    let filterRecords = todo.filter((task) => task.id !== updateData.id);
    setTodo([...filterRecords, updateData]);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <div className="container-wrapper">
        <h2>To Do list App</h2>
        <br />

        {!!updateData ? (
          <UpdateTask
            updateData={updateData}
            changeHolder={changeHolder}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {/* Display Todos */}

        {todo && todo.length ? "" : "No Tasks..."}

        {todo &&
          todo
            .map((task, index) => (
              <Todo
                task={task}
                index={index}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
