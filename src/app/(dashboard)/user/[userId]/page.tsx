import Image from "next/image";
import React from "react";
import "@/styles/component/user-details/userdetails.css";
import { fetchTableData, fetchUserData } from "@/utils/request";
import Link from "next/link";
import Blacklist from "./blacklist";
import Activate from "./activate";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// @ts-expect-error "params types "
const UserDetails = async ({ params }) => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth-token")?.value;

  if (!authToken) {
    redirect("/");
  }

  const userId = Number(params.userId); // Remove 'await' here since params.userId is already a string
  const alltableData: TableDataType[] = await fetchTableData();
  const allUserData: UserDetailsType[] = await fetchUserData();

  const tableData = alltableData.find((data) => data.id === userId);
  const userData = allUserData.find((data) => data.id === userId);

  if (!tableData || !userData) {
    return (
      <main className="user-details-page">
        <Link className="go-back" href="/user">
          <Image
            src="/assets/svg/icons/arrowback.svg"
            alt="user icon"
            width={20}
            height={20}
          />
          <span>Back to Users</span>
        </Link>

        <div className="header">
          <h3>User not found</h3>
        </div>
      </main>
    );
  }

  return (
    <main className="user-details-page">
      <Link className="go-back" href="/user">
        <Image
          src="/assets/svg/icons/arrowback.svg"
          alt="user icon"
          width={20}
          height={20}
        />
        <span>Back to Users</span>
      </Link>

      <div className="header">
        <h3>User Details</h3>
        <div>
          <Blacklist />
          <Activate />
        </div>
      </div>

      <section className="user-profile">
        <article className="user-profile-detail">
          <span>
            <Image
              src="/assets/svg/icons/np_user_948637_000000 1.svg"
              alt="user icon"
              width={28}
              height={28}
            />
          </span>

          <div className="user-profile-identity">
            <div className="user-name">
              <h3>
                {userData.last_name} {tableData.username}
              </h3>
              <p>{userData.random_id}</p>
            </div>

            <div className="vertical-divider" />

            <div className="user-tier">
              <h3>User Tier</h3>
              <p>1.5 out of 3 stars</p>
            </div>

            <div className="vertical-divider" />

            <div className="user-bank">
              <h3>₦{userData.monthly_income}</h3>
              <p>9912345678 / Providus Bank</p>
            </div>
          </div>
        </article>

        <div className="user-nav">
          <button className="active-btn">General Details</button>
          <button>Document</button>
          <button>Bank Details</button>
          <button>Loans</button>
          <button>Savings</button>
          <button>App and System</button>
        </div>
      </section>

      <section className="user-info">
        <article>
          <h3>Personal Information</h3>
          <div className="user-info-content">
            <div>
              <p>Full Name</p>
              <h4>
                {userData.last_name} {tableData.username}
              </h4>
            </div>
            <div>
              <p>Phone Number</p>
              <h4>{tableData.phoneNumber}</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>{tableData.email}</h4>
            </div>
            <div>
              <p>BVN</p>
              <h4>{userData.bvn}</h4>
            </div>
            <div>
              <p>Gender</p>
              <h4>{userData.gender}</h4>
            </div>
            <div>
              <p>Marital Status</p>
              <h4>{userData.marital_status}</h4>
            </div>
            <div>
              <p>Children</p>
              <h4>4</h4>
            </div>
            <div>
              <p>Type of Residence</p>
              <h4>Parent’s Apartment</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Education and Employment</h3>
          <div className="user-info-content">
            <div>
              <p>Level of Education</p>
              <h4>{userData.level_of_education}</h4>
            </div>
            <div>
              <p>Employment Status</p>
              <h4>{userData.employment_status}</h4>
            </div>
            <div>
              <p>Sector of Employment</p>
              <h4>{userData.sector}</h4>
            </div>
            <div>
              <p>Duration of Employment</p>
              <h4>{userData.employment_duration}</h4>
            </div>
            <div>
              <p>Office Email</p>
              <h4>{tableData.email}</h4>
            </div>
            <div>
              <p>Monthly Income</p>
              <h4>{userData.monthly_income}</h4>
            </div>
            <div>
              <p>Loan Repayment</p>
              <h4>{userData.loan}</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Socials</h3>
          <div className="user-info-content">
            <div>
              <p>Twitter</p>
              <h4>{userData.twitter}</h4>
            </div>
            <div>
              <p>Facebook</p>
              <h4>{userData.facebook}</h4>
            </div>
            <div>
              <p>Instagram</p>
              <h4>{userData.instagram}</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Guarantor</h3>
          <div className="user-info-content">
            <div>
              <p>Full Name</p>
              <h4>{userData.guarantor_name}</h4>
            </div>
            <div>
              <p>Phone Number</p>
              <h4>{userData.guarantor_number}</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>{userData.guarantor_email}</h4>
            </div>
            <div>
              <p>Relationship</p>
              <h4>{userData.guarantor_relation}</h4>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default UserDetails;
