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

---
