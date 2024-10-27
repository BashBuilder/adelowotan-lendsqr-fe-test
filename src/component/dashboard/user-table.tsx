import Image from "next/image";
import React from "react";

const UserTable = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <button>
                <span>Organization</span>
                <span>
                  <Image
                    src="/assets/svg/icons/filter.svg"
                    alt="sort-icon"
                    width={12}
                    height={12}
                  />
                </span>
              </button>
            </th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            <th scope="col">Date joined</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Apple MacBook Pro 17</th>
            <td>Silver</td>
            <td>Laptop</td>
            <td>$2999</td>
          </tr>
          <tr>
            <th scope="row">Microsoft Surface Pro</th>
            <td>White</td>
            <td>Laptop PC</td>
            <td>$1999</td>
          </tr>
          <tr>
            <th scope="row">Magic Mouse 2</th>
            <td>Black</td>
            <td>Accessories</td>
            <td>$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
