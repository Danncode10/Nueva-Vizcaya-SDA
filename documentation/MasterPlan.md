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

# ✝️ **Part 3 — Feature Breakdown**

This section defines every key feature and user interaction — how each page functions, who can access it, and how it connects to AWS.

---

## 🏠 **1. Home Page**

**Purpose:**
Acts as the central hub — a welcoming space showing the church’s mission, featured stories, announcements, and latest sermon posts.

**Sections:**

* Church logo, motto, and header banner
* Featured Mission Story or Verse of the Week
* Latest Sermon & Lesson Review previews
* Upcoming Calendar Event preview
* Footer: Church address, contact email, and social links

**Access:**
Public

**Data Source:**

* DynamoDB → `Posts` table (for featured content)
* DynamoDB → `Events` table (for next event date)

---

## 🌍 **2. Mission Stories**

**Purpose:**
Share inspiring testimonies, outreach experiences, and personal stories of faith.

**Features:**

* Story list with thumbnails and short descriptions
* Individual story view page with images and text
* Filter or tag by “local”, “international”, or “community”
* Optional download button (if the story has a PDF)

**Access Control:**

| Role   | Permission                          |
| ------ | ----------------------------------- |
| Admin  | CRUD (create, read, update, delete) |
| Pastor | Create & edit own stories           |
| Member | Read-only                           |
| Public | Read-only                           |

**DynamoDB Data Structure:**

| Field       | Type          | Description                   |
| ----------- | ------------- | ----------------------------- |
| `postId`    | String (UUID) | Unique post ID                |
| `category`  | String        | “mission”                     |
| `title`     | String        | Story title                   |
| `author`    | String        | Pastor or Admin name          |
| `content`   | String        | Markdown or HTML content      |
| `imageUrl`  | String        | Optional cover image (S3 URL) |
| `fileUrl`   | String        | Optional PDF (S3 URL)         |
| `createdAt` | Date          | Timestamp                     |

---

## 🎙️ **3. Sermons**

**Purpose:**
Provide sermons for replay, download, or reference — encouraging spiritual reflection.

**Features:**

* Sermon list (title, date, speaker, summary)
* Individual sermon page (full text, YouTube link, downloads)
* Filter by speaker or date
* “Download Resource” button (from S3)

**Access Control:**

| Role          | Permission              |
| ------------- | ----------------------- |
| Admin         | CRUD                    |
| Pastor        | Create/Edit own sermons |
| Member/Public | View & download         |

**DynamoDB Table: Posts**

| Field        | Type   | Description                   |
| ------------ | ------ | ----------------------------- |
| `postId`     | String | Unique sermon ID              |
| `category`   | String | “sermon”                      |
| `title`      | String | Sermon title                  |
| `speaker`    | String | Pastor name                   |
| `content`    | String | Sermon notes or transcript    |
| `youtubeUrl` | String | Optional sermon video         |
| `fileUrl`    | String | Optional sermon material (S3) |
| `createdAt`  | Date   | Timestamp                     |

---

## 📖 **4. Lesson Reviews**

**Purpose:**
Offer weekly lesson summaries for Sabbath School classes, allowing users to download study guides and view structured outlines.

**Features:**

* Week-by-week lesson listing
* Detailed lesson review with outline and scripture references
* Downloadable PDF of the summary
* Tags (e.g., “Quarter 1”, “Week 5”, “Faithfulness”)

**Access Control:**

| Role          | Permission    |
| ------------- | ------------- |
| Admin         | CRUD          |
| Pastor        | Create/Edit   |
| Member/Public | Read/Download |

**DynamoDB Fields (Posts table, category = “lesson”)**

| Field       | Type   | Description                 |
| ----------- | ------ | --------------------------- |
| `postId`    | String | Lesson ID                   |
| `category`  | String | “lesson”                    |
| `title`     | String | Lesson title                |
| `summary`   | String | Concise summary             |
| `outline`   | String | Markdown/structured outline |
| `pdfUrl`    | String | Downloadable resource (S3)  |
| `week`      | Number | Week number                 |
| `quarter`   | Number | Quarter of the year         |
| `createdAt` | Date   | Timestamp                   |

---

## 🕓 **5. Calendar / Events**

**Purpose:**
Display all upcoming church events like Sports Fest, Youth Sabbath, Women’s Ministry, and Outreach schedules.

**Features:**

* Calendar grid or list view
* Add/edit/delete events (Admin only)
* Show event details: date, description, location, and ministry category
* Auto-expire past events

**Access Control:**

| Role          | Permission |
| ------------- | ---------- |
| Admin         | CRUD       |
| Member/Public | Read-only  |

**DynamoDB Table: Events**

| Field         | Type   | Description                       |
| ------------- | ------ | --------------------------------- |
| `eventId`     | String | Unique ID                         |
| `title`       | String | Event name                        |
| `description` | String | Event details                     |
| `date`        | String | ISO date string                   |
| `location`    | String | Venue                             |
| `category`    | String | “Youth”, “Health”, “Womens”, etc. |
| `createdAt`   | Date   | Timestamp                         |

---

## 💬 **6. Comments System**

**Purpose:**
Allow church members or guests to engage and share thoughts on posts.

**Features:**

* Simple comment box (name + email + message)
* Auto-approval for authenticated users
* Manual moderation for guest comments
* Anti-spam check (basic regex validation)

**Access Control:**

| Role          | Permission                   |
| ------------- | ---------------------------- |
| Admin         | Delete/Moderate              |
| Pastor/Member | Post comments                |
| Public        | Post comment with email only |

**DynamoDB Table: Comments**

| Field       | Type    | Description       |
| ----------- | ------- | ----------------- |
| `commentId` | String  | Unique comment ID |
| `postId`    | String  | Related post      |
| `name`      | String  | Commenter name    |
| `email`     | String  | Optional          |
| `message`   | String  | Comment text      |
| `createdAt` | Date    | Timestamp         |
| `approved`  | Boolean | For moderation    |

---

## 🧑‍🤝‍🧑 **7. Youth Section**

**Purpose:**
Highlight youth activities, Bible studies, and SDA youth organization updates.

**Features:**

* Dedicated “Youth Page” with category filter
* Posts (photos, event recaps, upcoming plans)
* Option to embed YouTube highlights

**Access Control:**

| Role                  | Permission              |
| --------------------- | ----------------------- |
| Admin                 | CRUD                    |
| Pastor                | Create/Edit             |
| Youth Leader (future) | Limited post permission |
| Member/Public         | Read-only               |

**Data Source:**
Same `Posts` table (`category = "youth"`)

---

## 🩺 **8. Health Section**

**Purpose:**
Promote health and wellness, sharing tips and medical insights from church doctors.

**Features:**

* Blog-style post layout
* Doctor profile and article list
* Downloadable health leaflets or PDFs
* Optional “Ask the Doctor” contact form (future feature)

**Access Control:**

| Role          | Permission  |
| ------------- | ----------- |
| Admin         | CRUD        |
| Doctor        | Create/Edit |
| Member/Public | Read-only   |

**DynamoDB Data (Posts table, `category = "health"`)**

| Field       | Type   | Description              |
| ----------- | ------ | ------------------------ |
| `postId`    | String | Unique health article ID |
| `author`    | String | Doctor name              |
| `content`   | String | Health-related post      |
| `fileUrl`   | String | Optional download        |
| `createdAt` | Date   | Timestamp                |

---

## 👤 **9. Roles and Permissions Summary**

| Role                 | Description           | Access Summary                                     |
| -------------------- | --------------------- | -------------------------------------------------- |
| **Admin**            | Website manager       | Full access: manage users, posts, events, comments |
| **Pastor**           | Spiritual contributor | Post sermons, lessons, mission stories             |
| **Doctor**           | Health contributor    | Post in health section                             |
| **Member (Bro/Sis)** | Church member         | Read-only + comment access                         |
| **Public**           | Guest visitor         | Read-only + comment via email                      |

---

## 🗃️ **10. DynamoDB Table Summary**

| Table        | Key Fields                    | Purpose                                      |
| ------------ | ----------------------------- | -------------------------------------------- |
| **Users**    | `userId`, `role`, `email`     | Authentication reference (Cognito sync)      |
| **Posts**    | `postId`, `category`, `title` | Mission, Sermon, Lesson, Youth, Health posts |
| **Comments** | `commentId`, `postId`         | Post discussion system                       |
| **Events**   | `eventId`, `date`, `category` | Church calendar data                         |
| **Files**    | `fileId`, `postId`            | File management metadata                     |

---

✅ **Summary:**
This structure ensures your SDA Church website remains organized, scalable, and spiritually engaging — allowing dynamic updates without backend complexity. Each page connects directly to AWS services while keeping clear user permissions.
