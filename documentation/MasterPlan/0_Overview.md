# 🕊️ **SDA Nueva Vizcaya Church Website — Development Stages**

---

This document outlines the key stages and sub-stages required to complete the SDA Nueva Vizcaya Church Website, derived from the comprehensive Master Plan. Each stage builds upon the previous one, ensuring a structured and efficient development process.

---

## **Stage 1 — Initial Setup & Environment**

Branch Name: 1_Setup

**Objective:** Prepare the local development environment, project structure, and base UI.

**Sub-stages:**
- Clone and prepare the React Starter project.
- Create the documentation folder.
- Verify base files (`README.md`, `.gitignore`).
- Install all project dependencies.
- Run the development server to confirm baseline UI.
- Initialize Git for the new repository.

---

## **Stage 2 — Frontend Layout & Navigation**

**Objective:** Build the main user interface and routing system using React, TailwindCSS, and Bootstrap.

**Sub-stages:**
- Install `react-router-dom`.
- Create `src/pages/` structure for all main sections (Home, Mission Stories, Sermons, etc.).
- Create shared layouts (`MainLayout.tsx`, `AdminLayout.tsx`).
- Add TailwindCSS theme with religious color palette and typography.
- Implement navigation bar with links to all sections.
- Create placeholder content for each page.

---

## **Stage 3 — AWS Authentication Setup**

**Objective:** Integrate AWS Cognito for user login, signup, and role-based access (Admin, Pastor, Doctor, Member).

**Sub-stages:**
- Create a Cognito User Pool in the AWS Console.
- Define user groups (`admin`, `pastor`, `doctor`, `member`).
- Enable email-based login.
- Install and configure AWS Amplify in React.
- Create an Auth context to manage user state and roles.
- Implement `Login.tsx` and `Signup.tsx` pages.
- Add `ProtectedRoute` component for restricted pages.
- Test login/logout flow.

---

## **Stage 4 — Database (DynamoDB) Integration**

**Objective:** Store and retrieve all dynamic content (posts, events, comments) from DynamoDB.

**Sub-stages:**
- Create DynamoDB tables (`Users`, `Posts`, `Comments`, `Events`, `Files`).
- Configure AWS SDK in React.
- Build service functions for interacting with DynamoDB (e.g., `getPostsByCategory`, `addPost`, `getEvents`, `addComment`).
- Test with sample dummy data.
- Create an Admin Dashboard for content management (add/edit/delete posts, manage comments, events).

---

## **Stage 5 — File Storage & Resource Management**

**Objective:** Enable sermon and lesson file uploads and downloads via AWS S3.

**Sub-stages:**
- Create an S3 bucket with public read access for downloads.
- Set up IAM policy for limited upload permissions.
- Integrate S3 in React.
- Build `uploadService.ts` for file uploads and URL retrieval.
- Add upload buttons to relevant content editors (Sermon, Lesson Review, Health Posts).

---

## **Stage 6 — Calendar & Comments System**

**Objective:** Add an interactive church event calendar and a comment system for public engagement.

**Sub-stages:**
- Install a calendar library (e.g., `react-big-calendar`).
- Display events dynamically from DynamoDB.
- Enable event creation (Admin only).
- Implement a comment box below posts (name + email + message).
- Implement auto-approval for authenticated users and manual moderation for guests.
- Store comments in the DynamoDB `Comments` table.

---

## **Stage 7 — AWS Hosting & Deployment**

**Objective:** Host and deploy the React website using AWS S3, CloudFront, and Route 53.

**Sub-stages:**
- Build the frontend for production.
- Upload the build folder to the S3 hosting bucket.
- Set up a CloudFront distribution with S3 as the origin, HTTPS redirection, and caching.
- Connect the custom domain via Route 53.
- Issue an SSL certificate with AWS Certificate Manager (ACM) and attach it to CloudFront.
- Add CloudWatch metrics for monitoring.

---

## **Stage 8 — Testing & Launch**

**Objective:** Finalize and verify site quality before public release.

**Sub-stages:**
- Test all navigation links and authentication flows.
- Verify correct loading of posts, events, and comments.
- Confirm proper file upload and download functionality.
- Test responsive design across various devices.
- Ensure deployment is HTTPS-secured and stable.

---

## **Stage 9 — Optional Future Expansions**

**Objective:** Outline potential enhancements for future development.

**Sub-stages:**
- Implement a Donation System (e.g., via AWS Lambda + Stripe).
- Develop a Newsletter Subscription feature (e.g., using AWS SES).
- Create a Prayer Requests Form (e.g., DynamoDB + Email trigger).
- Integrate an Analytics Dashboard (e.g., AWS Pinpoint / Google Analytics).
- Build a Multimedia Gallery for event photos and videos.
- Explore a Mobile App Extension using React Native.

---
