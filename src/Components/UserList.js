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
      <span style={{ fontWeight: "bold" }}>{user.name}</span>, a {user.zodiac}{" "}
      born on the {new Date(user.dateOfBirth).getDate()} of{" "}
      {new Date(user.dateOfBirth).toLocaleString("default", { month: "long" })}.
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
    <div id="users" className="text-white text-center">
      <h2>Most Recent Users</h2>
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
