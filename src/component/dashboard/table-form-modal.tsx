import React from "react";
import "@/styles/component/dashboard/dashboard.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tableFilterSchema, TableFilterSchemaType } from "@/utils/tablefilter";
import { formatDateToMMDDYYYY } from "@/utils/formatDate";

interface TableFilterProps {
  handleFilter: (data: TableFilterSchemaType) => void;
  close: () => void;
}

const TableFormModal = ({ handleFilter, close }: TableFilterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TableFilterSchemaType>({
    resolver: zodResolver(tableFilterSchema),
  });

  const onSubmit: SubmitHandler<TableFilterSchemaType> = async (data) => {
    if (data.dateJoined) {
      data.dateJoined = formatDateToMMDDYYYY(data.dateJoined);
    }
    close();
    handleFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="table-modal-form">
      <label>
        <span>Organization</span>
        <select {...register("organization")}>
          <option value="">Select ...</option>
          <option value="Lendsqr">Lendsqr</option>
          <option value="Irorun">Irorun</option>
        </select>
      </label>
      <label>
        <span>Username</span>
        <input type="text" {...register("username")} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        <span>Date</span>
        <input type="date" {...register("dateJoined")} />
      </label>
      <label>
        <span>Phone Number</span>
        <input type="tel" {...register("phonenumber")} />
      </label>
      <label>
        <span>status</span>
        <select {...register("status")}>
          <option value=""></option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
          <option value="blacklisted">blacklisted</option>
          <option value="pending">pending</option>
        </select>
      </label>
      <div>
        <button type="button" className="reset-btn" onClick={() => reset()}>
          Reset
        </button>
        <button className="filter-btn" disabled={isSubmitting}>
          Filter
        </button>
      </div>
    </form>
  );
};

export default TableFormModal;
