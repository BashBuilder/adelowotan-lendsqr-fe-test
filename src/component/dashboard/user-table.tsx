import { tableData, tableHeader } from "@/data/constants";
import Image from "next/image";
import React from "react";
// import TableFormModal from "./table-form-modal";
// import Popover from "../ui/popover";

const buttonList = [1, 2, 3, 4, 5];

const UserTable = () => {
  return (
    <div className="table-section">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {tableHeader.map((header) => (
                <th key={header} scope="col">
                  {header && (
                    <div className="table-header">
                      <span> {header} </span>
                      <span>
                        <Image
                          src="/assets/svg/icons/filter.svg"
                          alt="sort-icon"
                          width={12}
                          height={12}
                        />
                      </span>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.organization}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.dateJoined}</td>
                <td>{data.status}</td>
                <td>
                  <button>
                    <Image
                      src="/assets/svg/icons/ic-more-vert-18px.svg"
                      alt="sort-icon"
                      width={18}
                      height={18}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* table footer */}
      <div className="table-pagination">
        <div className="left-pagination">
          <p>Showing</p>
          <select name="" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <p>Out of 100</p>
        </div>
        <div className="right-pagination">
          <button>
            <Image
              src="/assets/svg/icons/ic-chevron-left-18px.svg"
              alt="sort-icon"
              width={18}
              height={18}
            />
          </button>
          {buttonList.map((button) => (
            <button key={button} className={button === 1 ? "" : ""}>
              {button}
            </button>
          ))}
          <button>
            <Image
              src="/assets/svg/icons/ic-chevron-left-18px.svg"
              alt="sort-icon"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
