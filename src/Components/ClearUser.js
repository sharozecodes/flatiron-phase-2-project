import React from "react";

function ClearUser({ id }) {
  const handleDelete = () => {
    fetch(`http://localhost:4000/zodiacs/${id}`, {
      method: "DELETE",
    });
  };
  <button onClick={handleDelete}>Delete</button>;
}

export default ClearUser;
