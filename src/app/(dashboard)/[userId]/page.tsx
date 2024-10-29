import Image from "next/image";
import React from "react";
import "@/styles/component/user-details/userdetails.css";

const UserDetails = () => {
  return (
    <main className="user-details-page">
      <button className="go-back">
        <Image
          src="/assets/svg/icons/arrowback.svg"
          alt="user icon"
          width={20}
          height={20}
        />
        <span>Back to Users</span>
      </button>

      <div className="header">
        <h3>User Details</h3>
        <div>
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
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
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90</p>
            </div>

            <div className="vertical-divider" />

            <div className="user-tier">
              <h3>Users teir</h3>
              <p>1.5 out of 3 start</p>
            </div>

            <div className="vertical-divider" />

            <div className="user-bank">
              <h3>₦200,000.00</h3>
              <p>9912345678/Providus Bank</p>
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
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>Phone Number </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>grace@gmail.com</h4>
            </div>
            <div>
              <p>Bvn</p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Gender</p>
              <h4>Female</h4>
            </div>
            <div>
              <p>Marital status</p>
              <h4>Single</h4>
            </div>
            <div>
              <p>Children</p>
              <h4>None</h4>
            </div>
            <div>
              <p>Type of residence</p>
              <h4>Parent’s Apartment</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Education and Employment</h3>
          <div className="user-info-content">
            <div>
              <p>level of education</p>
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>employment status </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>sector of employment</p>
              <h4>grace@gmail.com</h4>
            </div>
            <div>
              <p>Duration of employment</p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>office email</p>
              <h4>Female</h4>
            </div>
            <div>
              <p>Monthly income</p>
              <h4>Single</h4>
            </div>
            <div>
              <p>loan repayment</p>
              <h4>None</h4>
            </div>
          </div>
        </article>
        <hr className="divider" />

        <article>
          <h3>Socials</h3>
          <div className="user-info-content">
            <div>
              <p>Twitter</p>
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>Facebook </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Instagram</p>
              <h4>grace@gmail.com</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Guarantor</h3>
          <div className="user-info-content">
            <div>
              <p>full Name</p>
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>Phone Number </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>grace@gmail.com</h4>
            </div>
            <div>
              <p>Relationship</p>
              <h4>grace@gmail.com</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Guarantor</h3>
          <div className="user-info-content">
            <div>
              <p>full Name</p>
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>Phone Number </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>grace@gmail.com</h4>
            </div>
            <div>
              <p>Relationship</p>
              <h4>grace@gmail.com</h4>
            </div>
          </div>
        </article>

        <hr className="divider" />

        <article>
          <h3>Guarantor</h3>
          <div className="user-info-content">
            <div>
              <p>full Name</p>
              <h4>Grace Effiom</h4>
            </div>
            <div>
              <p>Phone Number </p>
              <h4>07060780922</h4>
            </div>
            <div>
              <p>Email Address</p>
              <h4>grace@gmail.com</h4>
            </div>
            <div>
              <p>Relationship</p>
              <h4>grace@gmail.com</h4>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default UserDetails;
