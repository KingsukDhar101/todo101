import React from "react";

const AddTask = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="wrapper" style={{ marginBottom: "20px" }}>
        <input
          className="input_box"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="green_button" onClick={addTask}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
