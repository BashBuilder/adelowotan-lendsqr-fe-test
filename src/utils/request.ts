import { endpoint } from "@/data/endpoints";

export const fetchTableData = async () => {
  try {
    const response = await fetch(endpoint.table);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
