import React from "react";
import { BsFillCheckCircleFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ task, index, markDone, setUpdateData, deleteTask }) => {
  return (
    <div key={task.id}>
      <div className="col taskBg">
        <div className={task.status ? "done" : ""}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task?.title?.length >= 20 ? task.title.substr(0, 21)+"..." : task.title}</span>
        </div>

        <div className="iconswrap">
          <span
            title="Completed / Not Completed"
            onClick={(e) => markDone(task.id)}
          >
            <BsFillCheckCircleFill />
          </span>
          {task.status ? null : (
            <span
              title="Edit"
              onClick={() => {
                setUpdateData(task);
              }}
            >
              <BsFillPencilFill />
            </span>
          )}
          <span
            title="Delete"
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            <AiFillDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
