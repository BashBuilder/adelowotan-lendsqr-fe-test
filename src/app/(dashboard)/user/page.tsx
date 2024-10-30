import Stats from "@/component/dashboard/stats";
import React from "react";
import "@/styles/component/dashboard/dashboard.css";
import UserTable from "@/component/dashboard/user-table";
import { fetchTableData } from "@/utils/request";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;
  const tableData = await fetchTableData();

  if (!authToken) {
    redirect("/");
  }

  return (
    <main className="main">
      <h1 className="page-title">Users</h1>
      <Stats />
      <UserTable data={tableData} />
    </main>
  );
};

export default Dashboard;
