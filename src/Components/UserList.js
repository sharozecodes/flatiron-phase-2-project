import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  //const { zodiacSign } = useParams();
  const [users, setUsers] = useState([]);

  const userFetcher = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    userFetcher();
  }, []);

  const userElements = users.map((user) => (
    <React.Fragment key={user.id}>
      <p>{user.name}</p>
      <p>{user.dateOfBirth}</p>
    </React.Fragment>
  ));

  console.log(users);

  return (
    <div>
      <h2>USER LIST</h2>
      <p>{userElements}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default UserList;
