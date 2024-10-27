import React from "react";
import "@/styles/component/dashboard/dashboard.css";

const TableFormModal = () => {
  return (
    <form className="table-modal-form">
      <label>
        <span>Organization</span>
        <select name="" id="">
          <option value="Ade">Ade</option>
        </select>
      </label>

      <label>
        <span>Username</span>
        <input type="text" id="" />
      </label>

      <label>
        <span>Email</span>
        <input type="email" />
      </label>

      <label>
        <span>Date</span>
        <input type="date" />
      </label>

      <label>
        <span>Phone Number</span>
        <input type="tel" />
      </label>

      <label>
        <span>status</span>
        <select name="" id="">
          <option value="Ade">Ade</option>
        </select>
      </label>

      <div>
        <button type="button">Reset</button>
        <button>Filter</button>
      </div>
    </form>
  );
};

export default TableFormModal;
