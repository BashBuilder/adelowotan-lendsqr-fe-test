# Lendsqr Dashboard

## Overview

**Lendsqr Dashboard** is a web application designed to manage user data efficiently. Developed by **Adelowotan Anthony Oluwatimileyin**, this dashboard provides a comprehensive interface for viewing and managing user profiles, including personal information, employment details, and social media accounts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- User authentication using cookies.
- Detailed user profile views including:
  - Personal information
  - Employment and educational details
  - Social media accounts
  - Guarantor information
- User actions such as Blacklisting and Activation.
- Responsive design for mobile and desktop compatibility.

## Technologies Used

This application utilizes the following technologies:

- **Frontend:**
  - Next.js for server-side rendering and routing.
  - React for building user interfaces.
  - SCSS for styling.
- **Utilities:**
  - Next.js Image component for optimized images.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/lendsqr-dashboard.git
   cd lendsqr-dashboard

   ```

2. **Run the Application**
   Start the development server using the following command:

   ```bash
     npm run dev

   ```

The application should now be accessible at <http://localhost:3000>.

## Usage

Once the application is running, navigate to the user dashboard by accessing /user. Here, you can:

**View user profiles.**
Access different sections such as General Details, Documents, Bank Details, Loans, and Savings.
Perform actions like blacklisting or activating users.

## Folder Structure

Here's a brief overview of the project folder structure:
lendsqr-dashboard/
├── public/ # Static assets (images, icons, etc.)
├── src/
│ ├── app/ # for defining page routes
│ ├── components/ # Reusable React components
│ ├── data/ # for keeping static data
│ ├── pages/ # Next.js pages
│ ├── styles/ # CSS and styling files
│ └── services/ # Utility functions and API requests
├── .env.local # Environment variables
├── package.json # Project metadata and dependencies
└── README.md

## icense

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to reach out to me at your iamadelowotan@gmailcom for any questions or feedback regarding this project.
