import React from "react";

const UpdateTask = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className="wrapper" style={{ marginBottom: "20px" }}>
        <input
          className="input_box"
          value={updateData && updateData.title}
          onChange={(e) => {
            changeHolder(e);
          }}
        />
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap: "10px",}}>
          <button className="green_button" onClick={updateTask}>
            Update
          </button>
          <button className="yellow_button" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
