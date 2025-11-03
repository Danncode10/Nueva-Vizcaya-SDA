# 🕊️ **SDA Nueva Vizcaya Church Website — Master Plan**

---

## **Part 1 — Project Overview & Setup**

---

### 🧭 **1. Project Summary**

The **SDA Nueva Vizcaya Church Website** is a digital hub designed to serve members, pastors, and visitors of the **Seventh-day Adventist Church in Nueva Vizcaya, Philippines**.
Its mission is to **strengthen spiritual connection**, **promote unity**, and **revive community engagement**, especially through online access to sermons, lesson reviews, health guidance, and upcoming events.

The website also supports the revival of **Afternoon Services**, youth involvement, and easy content management for authorized church members.

---

### 🙌 **2. Purpose and Core Objectives**

| Objective                             | Description                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Spiritual Engagement**              | Provide members and visitors access to sermons, mission stories, and lesson reviews anytime.                      |
| **Community Connection**              | Centralize announcements, programs, and upcoming events (via Calendar).                                           |
| **Empower Ministry Leaders**          | Allow pastors and authorized members to post content with admin-approved access.                                  |
| **Health and Youth Ministry Support** | Offer a dedicated space for health articles, wellness programs, and youth activities.                             |
| **Ease of Management**                | Give admin full control to create user accounts, manage posts, and upload materials without complex backend work. |

---

### 👥 **3. Target Users**

| Role                           | Description                                                                           | Access Level        |
| ------------------------------ | ------------------------------------------------------------------------------------- | ------------------- |
| **Admin**                      | Main website manager. Creates accounts, uploads materials, edits or deletes any post. | Full Access         |
| **Pastors / Authorized Users** | Can post sermons, lesson reviews, and event updates.                                  | Restricted Access   |
| **Church Members (Bro/Sis)**   | Can view all content and comment publicly (via email form).                           | Read & Comment      |
| **Public Visitors**            | View and comment on posts only.                                                       | Read-Only + Comment |
| **Doctors / Health Team**      | Contribute health-related articles and announcements.                                 | Restricted Access   |

---

### 🌐 **4. Website Sections**

| Section               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **Home**              | Hero banner, latest sermon, quick links, featured stories.   |
| **Mission Stories**   | Testimonies and outreach experiences.                        |
| **Sermons**           | Downloadable sermon resources, embedded YouTube videos.      |
| **Lesson Reviews**    | Weekly study summaries with downloadable PDFs.               |
| **Afternoon Service** | Revival guide section with worship content.                  |
| **Youth**             | Youth programs, devotionals, and activity gallery.           |
| **Health**            | Wellness blogs and health lectures.                          |
| **Calendar**          | Upcoming church events, sports fests, and ministry meetings. |
| **Comments**          | Email-based public comment system (with admin moderation).   |
| **About & Contact**   | Church background, leadership, and prayer request form.      |
| **Admin Dashboard**   | Account management, content control, event scheduling.       |

---

### ⚙️ **5. Step-by-Step: Project Setup**

#### **(A) Clone the React Starter Project**

Run the following commands in your terminal:

```bash
# 1️⃣ Clone your existing React Starter repo
git clone https://github.com/Danncode10/React_starter.git "React folder"

# 2️⃣ Enter the folder
cd "React folder"

# 3️⃣ Remove existing git history
rm -rf .git
```

This “React folder” will be the **frontend base** for your church website.

---

#### **(B) Create Project Root Structure**

In your main workspace or parent directory:

```bash
# Go back to the root
cd ..

# Create project folder
mkdir SDA_Nueva_Vizcaya_Church_Website
cd SDA_Nueva_Vizcaya_Church_Website

# Move the React folder inside
mv "../React folder" ./React_frontend

# Create documentation directory
mkdir documentation
```

---

### 📁 **6. Folder Structure**

Your master project structure should look like this:

```
SDA_Nueva_Vizcaya_Church_Website/
│
├── React_frontend/                 # Frontend app (from React starter)
│   ├── src/
│   │   ├── components/             # Shared UI components
│   │   ├── pages/                  # Page-level components
│   │   ├── layouts/                # Navbar, Footer, and Layouts
│   │   ├── contexts/               # Context providers (Auth, Theme)
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── services/               # AWS API services (Cognito, S3, Dynamo)
│   │   ├── utils/                  # Utility functions
│   │   ├── assets/                 # Static images, icons, etc.
│   │   └── main.tsx                # App entry point
│   ├── index.html
│   └── vite.config.ts
│
├── documentation/                  # Architecture and planning docs
│   ├── architecture.md             # AWS + React architecture overview
│   ├── features.md                 # Feature descriptions and data design
│   └── deployment.md               # Deployment and maintenance guide
│
├── .gitignore                      # Ignore node_modules, build, etc.
└── README.md                       # App Master Plan summary
```

---

### ☁️ **7. AWS Integration Overview (Planned for Setup Later)**

| AWS Service                     | Purpose                                 |
| ------------------------------- | --------------------------------------- |
| **Cognito**                     | Authentication & Role-based access      |
| **S3**                          | File storage + website hosting          |
| **CloudFront**                  | CDN distribution for global performance |
| **DynamoDB**                    | Posts, comments, events, and user data  |
| **Route 53**                    | Domain management & DNS                 |
| **ACM**                         | SSL certificate for HTTPS               |
| **CloudWatch**                  | Monitoring and performance logging      |
| **EC2 (t3.micro)** *(optional)* | Light API server for advanced logic     |

---

### 🧾 **8. Notes Before Development**

* ✅ Ensure `README.md` contains your App Master Plan summary.
* ✅ `.gitignore` includes:

  ```
  node_modules
  dist
  .env
  .DS_Store
  .aws/
  ```
* ✅ Create a new GitHub repository once setup is complete.
* ✅ Plan to initialize AWS configuration files inside `React_frontend/src/services/aws/`.


# 🕊️ **Part 2 — Tech Stack & Architecture**

---

## ⚙️ **1. Complete Tech Stack**

| Category                      | Technology                                   | Purpose / Notes                                                            |
| ----------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **Frontend Framework**        | **React (Vite + TypeScript)**                | Fast, modern, scalable frontend development                                |
| **Styling**                   | **TailwindCSS + Bootstrap 5**                | Tailwind for flexibility and modern design; Bootstrap for responsive grids |
| **UI/UX Tools**               | **Shadcn/UI + Lucide Icons + Framer Motion** | Beautiful, minimal, smooth animations                                      |
| **Routing**                   | **React Router v7**                          | Client-side navigation                                                     |
| **State Management**          | **React Context + Local Storage**            | Lightweight global state for user roles, theme, etc.                       |
| **Form Handling**             | **React Hook Form + Yup Validation**         | Clean and reliable input forms (login, posts, comments)                    |
| **Authentication**            | **AWS Cognito**                              | User sign-up/sign-in, password recovery, and role-based access control     |
| **Database**                  | **AWS DynamoDB**                             | Stores user data, posts, events, and comments                              |
| **File Storage**              | **AWS S3**                                   | Stores downloadable resources (PDFs, sermon files, lesson materials)       |
| **Hosting & CDN**             | **S3 + CloudFront**                          | Static web hosting with global caching for fast performance                |
| **Domain & SSL**              | **Route 53 + ACM**                           | Domain registration and HTTPS certificate                                  |
| **Monitoring**                | **AWS CloudWatch**                           | Performance metrics and logs                                               |
| **Optional Backend (Future)** | **AWS Lambda or EC2 (t3.micro)**             | For custom APIs, if needed (e.g., scheduled tasks, content moderation)     |
| **Version Control**           | **Git + GitHub**                             | Source code management                                                     |
| **Deployment**                | **AWS Amplify or manual S3 sync**            | Continuous deployment or manual build sync                                 |
| **Documentation**             | **Markdown (.md)**                           | For architecture, features, and deployment notes                           |

---

## 🏗️ **2. High-Level System Architecture**

Below is the logical structure of how the components interact:

```
                ┌───────────────────────────┐
                │   React Frontend (Vite)   │
                │  Tailwind + Bootstrap UI  │
                └────────────┬──────────────┘
                             │
              Auth & Data via AWS SDK (Amplify/Cognito/Dynamo)
                             │
         ┌───────────────────┼────────────────────┐
         │                   │                    │
 ┌───────▼───────┐   ┌───────▼────────┐    ┌──────▼───────┐
 │ AWS Cognito   │   │ AWS DynamoDB   │    │ AWS S3       │
 │ Authentication│   │ Posts, Events, │    │ File Storage │
 │ Roles & Tokens│   │ Comments, etc.│    │ PDFs, Images │
 └───────────────┘   └───────────────┘    └──────────────┘
                             │
                             ▼
                   ┌────────────────────┐
                   │ CloudFront + S3    │
                   │ (Hosting & CDN)    │
                   └────────────────────┘
                             │
                             ▼
                   🌐  Route 53 + ACM (Domain + HTTPS)
```

---

## 🔐 **3. AWS Component Roles**

| AWS Service                  | Function                       | Notes                                                                                                                        |
| ---------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Cognito**                  | Authentication + Authorization | Admin creates accounts for pastors and members. Tokens manage role-based access.                                             |
| **DynamoDB**                 | NoSQL Database                 | Tables for posts, comments, users, and calendar events. Designed for fast reads/writes.                                      |
| **S3**                       | File & Asset Storage           | Stores sermon files, images, and lesson PDFs. Configured with read-only access for public, and write access for admin users. |
| **CloudFront**               | CDN & HTTPS Distribution       | Ensures the website loads quickly globally with cached copies.                                                               |
| **Route 53**                 | Domain Management              | Example: `sdavizcaya.org.ph` (custom domain connected to CloudFront).                                                        |
| **ACM**                      | SSL Certificates               | Enables HTTPS security for all connections.                                                                                  |
| **CloudWatch**               | Logging & Monitoring           | Tracks traffic, errors, and performance metrics.                                                                             |
| **(Optional) EC2 or Lambda** | Custom Logic Server            | Future support for email notifications, scheduled cleanup, or analytics.                                                     |

---

## 🧩 **4. Integration Map: React + AWS**

**React Frontend** communicates directly with AWS via the **AWS SDK / Amplify Libraries**.

| Feature                                     | AWS Service                         | React Integration                                               |
| ------------------------------------------- | ----------------------------------- | --------------------------------------------------------------- |
| **User Login / Signup**                     | Cognito                             | `Auth.signIn()`, `Auth.signUp()`, `Auth.signOut()`              |
| **Role Management (Admin, Pastor, Member)** | Cognito Groups                      | Assigned manually in Cognito dashboard or via Admin Panel       |
| **Post Management (Create/Edit/Delete)**    | DynamoDB                            | API calls using `AWS.DynamoDB.DocumentClient`                   |
| **Upload Files (PDFs, Images, Videos)**     | S3                                  | `Storage.put()` and `Storage.get()` from Amplify                |
| **Display Calendar Events**                 | DynamoDB                            | `scan()` or `query()` for upcoming event entries                |
| **Public Comments**                         | DynamoDB + Cognito (optional email) | Lightweight form -> DynamoDB record                             |
| **Website Hosting**                         | S3 + CloudFront                     | React `build/` folder uploaded to S3, distributed by CloudFront |
| **Monitoring**                              | CloudWatch                          | Tracks all AWS activities, logs errors automatically            |

---

## 📂 **5. DynamoDB Data Design (Overview)**

| Table        | Partition Key | Sort Key   | Description                                            |
| ------------ | ------------- | ---------- | ------------------------------------------------------ |
| **Users**    | `userId`      | —          | Stores account info, role, and display name            |
| **Posts**    | `postId`      | `category` | Sermons, Mission Stories, Lesson Reviews, Health posts |
| **Comments** | `commentId`   | `postId`   | User comments tied to a specific post                  |
| **Events**   | `eventId`     | `date`     | Calendar event schedules                               |
| **Files**    | `fileId`      | `postId`   | File metadata for downloadable sermons and lessons     |

---

## 🪶 **6. Authentication Roles**

| Role                     | Permissions                                                    |
| ------------------------ | -------------------------------------------------------------- |
| **Admin**                | Create/update/delete any post, approve comments, manage users. |
| **Pastor**               | Create and edit sermon or lesson review posts.                 |
| **Member (Bro/Sis)**     | Read-only access + can comment (email or light auth).          |
| **Doctor / Health Team** | Post health-related blogs and articles.                        |
| **Public User**          | View content and leave comment with email validation.          |

---

## 🎨 **7. Design Theme**

| Element             | Style                                                         |
| ------------------- | ------------------------------------------------------------- |
| **Primary Color**   | Deep Blue (`#0A3D62`) — represents faith                      |
| **Secondary Color** | Golden Yellow (`#FFC312`) — symbolizes hope                   |
| **Accent Color**    | Light Cream (`#F5F5DC`) — warmth and peace                    |
| **Font**            | “Inter” or “Nunito Sans” (modern and soft)                    |
| **Mood**            | Calm, spiritual, balanced — focus on readability and serenity |

---

## 🧱 **8. Scalability & Maintenance**

* **Scalable storage** — S3 and DynamoDB automatically scale for future growth.
* **Low-cost design** — t3.micro or full static hosting ensures minimal AWS bill.
* **Easy maintenance** — Admin access via web UI; AWS services managed visually.
* **Future expansion** — Donation system, media streaming, or prayer requests API.

---
