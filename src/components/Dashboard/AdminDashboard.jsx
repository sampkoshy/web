import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen  w-screen p-10">
      <Header />
      <CreateTask/>
    </div>
  );
};

export default AdminDashboard;
