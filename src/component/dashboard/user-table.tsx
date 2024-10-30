"use client";
import { tableHeader } from "@/data/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TableFormModal from "./table-form-modal";
import { TableFilterSchemaType } from "@/utils/tablefilter";
import Pagination from "../ui/pagination";

import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface TablePropsType {
  data: TableDataType[];
}

const UserTable = ({ data }: TablePropsType) => {
  const pageLength = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState({ start: 0, end: 10 });
  const [isFiltering, setIsFiltering] = useState(false);
  const [displayData, setDisplayData] = useState<TableDataType[]>([]);

  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage((prev) => prev + page);
  };

  useEffect(() => {
    if (currentPage === 0) {
      setCurrentPage(1);
    }
    if (currentPage > displayData.length / pageLength) {
      setCurrentPage(displayData.length / pageLength);
    }

    setCurrentList({
      start: (currentPage - 1) * pageLength,
      end: currentPage * pageLength,
    });
    // eslint-disable-next-line
  }, [currentPage]);

  const handleFilter = (filterData: TableFilterSchemaType) => {
    setIsFiltering(true);
    const cleanedFilter: Partial<TableFilterSchemaType> = Object.keys(
      filterData
    )
      .filter(
        (key) =>
          filterData[key as keyof TableFilterSchemaType] !== "" &&
          filterData[key as keyof TableFilterSchemaType] !== null &&
          filterData[key as keyof TableFilterSchemaType] !== undefined
      )
      .reduce((acc, key) => {
        acc[key as keyof TableFilterSchemaType] =
          filterData[key as keyof TableFilterSchemaType];
        return acc;
      }, {} as Partial<TableFilterSchemaType>);

    const filteredData = data.filter((item: TableDataType) => {
      return Object.keys(cleanedFilter).every(
        (key) =>
          item[key as keyof TableDataType] ===
          cleanedFilter[key as keyof TableFilterSchemaType]
      );
    });
    setCurrentPage(1);
    setDisplayData(filteredData);
  };

  const handleStopFilter = () => {
    setIsFiltering(false);
    setCurrentPage(1);
    setDisplayData(data);
  };

  useEffect(() => {
    if (!isFiltering) {
      setDisplayData(data);
    }
    // eslint-disable-next-line
  }, [isFiltering]);

  const onSelect = (number: number) => setCurrentPage(number);

  const notify = (message: string) => {
    toast.success("This is a demo test. " + message);
  };

  return (
    <div className="table-section">
      {isFiltering && (
        <button className="filter-btn" onClick={handleStopFilter}>
          Reset Filter
        </button>
      )}

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {tableHeader.map((header) => (
                <th key={header} scope="col">
                  {header && (
                    <Popup
                      trigger={
                        <button className="table-header">
                          <span> {header} </span>
                          <Image
                            src="/assets/svg/icons/filter.svg"
                            alt="sort-icon"
                            width={12}
                            height={12}
                          />
                        </button>
                      }
                      position="bottom left"
                      arrow={false}
                    >
                      {/* @ts-expect-error "ts expects a react component instead of a function which is wrong" */}
                      {(close) => (
                        <div className="table-modal-container">
                          <TableFormModal
                            handleFilter={handleFilter}
                            close={() => close()}
                          />
                        </div>
                      )}
                    </Popup>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {displayData
              .slice(currentList.start, currentList.end)
              .map((data, index) => (
                <tr key={index}>
                  <td className="wrap-text">{data.organization}</td>
                  <td className="wrap-text">{data.username}</td>
                  <td className="wrap-text">{data.email}</td>
                  <td className="wrap-text">{data.phoneNumber}</td>
                  <td className="wrap-text">{data.dateJoined}</td>
                  <td>
                    <span data-status={data.status} className="table-status">
                      {data.status}
                    </span>
                  </td>
                  <td>
                    <Popup
                      trigger={
                        <button>
                          <Image
                            src="/assets/svg/icons/ic-more-vert-18px.svg"
                            alt="sort-icon"
                            width={18}
                            height={18}
                          />
                        </button>
                      }
                      position="bottom right"
                      arrow={false}
                    >
                      {/* @ts-expect-error "ts expects a react component instead of a function which is wrong" */}
                      {(close) => (
                        <div className="table-options-modal">
                          <button
                            onClick={() => {
                              router.push("/user/" + data.id);
                              close();
                            }}
                          >
                            <Image
                              src="/assets/svg/icons/eyes.svg"
                              alt="sort-icon"
                              width={18}
                              height={18}
                            />
                            <span>View Details</span>
                          </button>
                          <button
                            onClick={() => {
                              notify(
                                `User ${data.username} has been blacklisted.`
                              );
                              close();
                            }}
                          >
                            <Image
                              src="/assets/svg/icons/np_delete-friend_3248001_000000 1.png"
                              alt="sort-icon"
                              width={18}
                              height={18}
                            />
                            <span>Blacklist User</span>
                          </button>
                          <button
                            onClick={() => {
                              notify(
                                `User ${data.username} has been activated.`
                              );
                              close();
                            }}
                          >
                            <Image
                              src="/assets/svg/icons/np_user_2995993_000000 1.png"
                              alt="sort-icon"
                              width={18}
                              height={18}
                            />
                            <span>Activate User</span>
                          </button>
                        </div>
                      )}
                    </Popup>
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
          <div className="number-input-container">
            <input
              type="number"
              value={currentPage === 0 ? 1 : currentPage}
              min={1}
              max={displayData.length / pageLength}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
            />

            <div className="btn-container">
              <button
                onClick={() => handlePageChange(-1)}
                disabled={currentPage === 1}
                className="btn-icon"
              >
                <Image
                  src="/assets/svg/icons/chevron left.svg"
                  alt="sort-icon"
                  width={10}
                  height={10}
                />
              </button>
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === displayData.length / pageLength}
                className="btn-icon"
              >
                <Image
                  src="/assets/svg/icons/chevron right.svg"
                  alt="sort-icon"
                  width={10}
                  height={10}
                />
              </button>
            </div>
          </div>
          <p>Out of {Math.floor(displayData.length / pageLength)}</p>
        </div>
        <div className="right-pagination">
          <button
            onClick={() => handlePageChange(-1)}
            disabled={currentPage === 1}
            className="btn-icon"
          >
            <Image
              src="/assets/svg/icons/chevron left.svg"
              alt="sort-icon"
              width={10}
              height={10}
            />
          </button>
          <Pagination
            total={Math.floor(displayData.length / pageLength)}
            current={currentPage}
            onSelect={onSelect}
          />
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === displayData.length / pageLength}
            className="btn-icon"
          >
            <Image
              src="/assets/svg/icons/chevron right.svg"
              alt="sort-icon"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
