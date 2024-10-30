import Stats from "@/component/dashboard/stats";
import React from "react";
import "@/styles/component/dashboard/dashboard.css";
import UserTable from "@/component/dashboard/user-table";
import { fetchTableData } from "@/utils/request";

const Dashboard = async () => {
  const tableData = await fetchTableData();

  return (
    <main className="main">
      <h1 className="page-title">Users</h1>
      <Stats />
      <UserTable data={tableData} />
    </main>
  );
};

export default Dashboard;
