import React from "react";

const UpdateTask = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateData && updateData.title}
            onChange={(e) => {
              changeHolder(e);
            }}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-10" onClick={updateTask}>
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
