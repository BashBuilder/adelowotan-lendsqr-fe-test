import Stats from "@/component/dashboard/stats";
import React from "react";
import "@/styles/component/dashboard/dashboard.css";
import UserTable from "@/component/dashboard/user-table";

const Dashboard = () => {
  return (
    <main className="main">
      <h1 className="page-title">Users</h1>
      <Stats />
      <UserTable />
    </main>
  );
};

export default Dashboard;
