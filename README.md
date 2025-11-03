# 🕊️ **SDA Nueva Vizcaya Church Website — Overview**

---

## **Project Summary**

The SDA Nueva Vizcaya Church Website is a digital platform aimed at strengthening spiritual connection, promoting unity, and reviving community engagement for the Seventh-day Adventist Church in Nueva Vizcaya, Philippines. It provides online access to sermons, lesson reviews, health guidance, and upcoming events, while also supporting afternoon services, youth involvement, and easy content management.

---

## **Purpose and Core Objectives**

The website's core objectives include:
- **Spiritual Engagement**: Providing access to spiritual content anytime.
- **Community Connection**: Centralizing announcements and events.
- **Empower Ministry Leaders**: Allowing authorized members to post content.
- **Health and Youth Ministry Support**: Offering dedicated sections for health and youth activities.
- **Ease of Management**: Enabling administrators to manage content and users without complex backend work.

---

## **Target Users**

The website caters to various user roles with specific access levels:
- **Admin**: Full control over content, accounts, and materials.
- **Pastors / Authorized Users**: Restricted access to post sermons, lesson reviews, and event updates.
- **Church Members (Bro/Sis)**: Read and comment access.
- **Public Visitors**: Read-only access with commenting capabilities.
- **Doctors / Health Team**: Restricted access to contribute health-related articles.

---

## **Website Sections**

The website will feature key sections:
- **Home**: Hero banner, latest sermon, quick links, featured stories.
- **Mission Stories**: Testimonies and outreach experiences.
- **Sermons**: Downloadable resources and embedded videos.
- **Lesson Reviews**: Weekly study summaries with downloadable PDFs.
- **Afternoon Service**: Revival guide section.
- **Youth**: Programs, devotionals, and activity gallery.
- **Health**: Wellness blogs and lectures.
- **Calendar**: Upcoming church events.
- **Comments**: Email-based public comment system.
- **About & Contact**: Church background and prayer request form.
- **Admin Dashboard**: Account and content management.

---

## **Tech Stack & Architecture**

The project utilizes a modern tech stack with a strong emphasis on AWS services:
- **Frontend**: React (Vite + TypeScript), TailwindCSS + Bootstrap 5, Shadcn/UI + Lucide Icons + Framer Motion for UI/UX, React Router v7 for routing, React Context + Local Storage for state management, React Hook Form + Yup for form handling.
- **Backend/Database**: AWS Cognito for authentication, AWS DynamoDB for data storage (posts, comments, events, users), AWS S3 for file storage.
- **Hosting & Deployment**: AWS S3 + CloudFront for static web hosting and CDN, Route 53 for domain management, ACM for SSL certificates, CloudWatch for monitoring.
- **Version Control**: Git + GitHub.

The architecture involves the React Frontend communicating directly with AWS services via the AWS SDK/Amplify Libraries.

---

## **AWS Integration Overview**

- **Cognito**: User authentication, sign-up/sign-in, and role-based access.
- **DynamoDB**: Stores all dynamic content like posts, comments, events, and user data.
- **S3**: Stores downloadable resources (PDFs, sermon files, images).
- **CloudFront**: CDN for global performance and caching.
- **Route 53**: Domain management and DNS.
- **ACM**: SSL certificate for HTTPS.
- **CloudWatch**: Monitoring and performance logging.

---

## **Implementation Roadmap**

The development will follow an 8-phase roadmap:
1. **Initial Setup & Environment**: Prepare local dev environment, project structure, and base UI.
2. **Frontend Layout & Navigation**: Build UI and routing using React, TailwindCSS, and Bootstrap.
3. **AWS Authentication Setup**: Integrate AWS Cognito for user authentication and role-based access.
4. **Database (DynamoDB) Integration**: Store and retrieve dynamic content from DynamoDB.
5. **File Storage & Resource Management**: Enable file uploads and downloads via AWS S3.
6. **Calendar & Comments**: Add interactive event calendar and comment system.
7. **AWS Hosting & Deployment**: Host and deploy the website using AWS S3, CloudFront, and Route 53.
8. **Testing & Launch**: Finalize and verify site quality before public release.

---

## **AWS Deployment Plan**

The deployment plan details step-by-step instructions for hosting, securing, and monitoring the website on AWS:
- **S3 Bucket for Website Hosting**: Create and configure an S3 bucket for static website hosting.
- **CloudFront Distribution**: Set up CloudFront for CDN and HTTPS redirection.
- **Domain Setup via Route 53**: Register and configure domain records.
- **SSL Certificate (ACM)**: Request and attach an SSL certificate for HTTPS.
- **IAM Permissions & Security**: Define IAM roles with least privilege, enable MFA, and use security best practices.
- **Monitoring with CloudWatch**: Track key metrics and set up alerts.
- **Backup & Recovery**: Implement backup strategies for DynamoDB and S3.
- **Scalability & Cost Optimization**: Utilize AWS services for automatic scaling and cost-efficient solutions.

---

This overview provides a comprehensive understanding of the SDA Nueva Vizcaya Church Website project, from its foundational goals and technical architecture to its phased implementation and deployment strategy.
