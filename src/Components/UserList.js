import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const userFetcher = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    userFetcher();
  }, []);

  const userElements = users.slice(-5).map((user) => (
    <p key={user.id}>
      {user.name} , {user.zodiac}
    </p>
  ));

  const handleDelete = () => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => {
        const userIds = data.map((user) => user.id);

        userIds.forEach((id) => {
          fetch(`http://localhost:4000/users/${id}`, {
            method: "DELETE",
          });
        });
      });
    setUsers([]);
  };

  return (
    <div className="text-white">
      <h2>USER LIST</h2>
      <>{userElements}</>
      <Button
        className="button-class"
        variant="dark"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <Button
        className="button-class"
        variant="dark"
        onClick={() => handleDelete()}
      >
        Clear
      </Button>
    </div>
  );
};

export default UserList;
