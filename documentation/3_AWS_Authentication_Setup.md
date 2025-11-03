# 🛡️ **Stage 3 — AWS Authentication Setup**

**Substage: Create a Cognito User Pool in the AWS Console**

**Status:** ✅ **COMPLETED**

**Date Completed:** November 3, 2025

---

## 🎯 **Objective**

Integrate AWS Cognito for user login, signup, and role-based access (Admin, Pastor, Doctor, Member) for the SDA Nueva Vizcaya Church Website.

---

## 📋 **What We Accomplished**

### ✅ **Completed Tasks**

1. **Signed in to AWS Console**
   - Navigated to https://console.aws.amazon.com/
   - Used existing AWS account credentials

2. **Navigated to Cognito Service**
   - Searched for "Cognito" in the AWS search bar
   - Selected "Amazon Cognito" from results
   - Region: `ap-southeast-1` (Asia Pacific - Singapore)

3. **Created New User Pool**
   - Clicked "Create user pool"
   - Chose "Cognito user pool" (not external provider)

4. **Configured Application Settings**
   - **Application type:** Single-page application (SPA) - perfect for React
   - **Application name:** "Nueva Vizcaya SDA Church Website"

5. **Configured Sign-in Options**
   - ✅ **Email** (selected)
   - ❌ Phone number (not selected)
   - ❌ Username (not selected)
   - **Result:** Users will sign in with email addresses

6. **Enabled Self-Registration**
   - ✅ **Enable self-registration** (checked)
   - This allows church members to sign up for accounts themselves

7. **Set Required Attributes**
   - **Email** (selected as required)
   - Users must provide email addresses during signup

8. **Created the User Pool**
   - Clicked "Create user directory"
   - Successfully created the Cognito User Pool

9. **Obtained AWS Credentials**
   - **User Pool ID:** `[STORED SECURELY - NOT IN THIS FILE]`
   - **Client ID:** `[STORED SECURELY - NOT IN THIS FILE]`
   - **Region:** `ap-southeast-1`

---

## 🔑 **AWS Configuration Summary**

| Setting | Value |
|---------|-------|
| **User Pool Name** | User pool - xphpi3 |
| **User Pool ID** | `[STORED SECURELY]` |
| **Client ID** | `[STORED SECURELY]` |
| **Region** | `ap-southeast-1` |
| **Application Type** | Single-page application (SPA) |
| **Sign-in Method** | Email |
| **Self-Registration** | Enabled |
| **Required Attributes** | Email |

---

## 📚 **What I Learned (Newbie Perspective)**

### 🤔 **Key Concepts Understood**
- **AWS Cognito User Pool:** A user directory that provides sign-up and sign-in functionality
- **Client ID:** Unique identifier for the application connecting to the User Pool
- **Region:** AWS data center location (ap-southeast-1 = Singapore)
- **SPA Configuration:** Optimized for React single-page applications

### 💡 **Important Decisions Made**
- Chose **email-based login** instead of username/phone - more user-friendly for church members
- Enabled **self-registration** so members can create accounts without admin intervention
- Selected **Single-page application** type to match our React architecture

### ⚠️ **Things to Remember for Future**
- AWS credentials (User Pool ID, Client ID) are needed for React/Amplify integration
- These values are **not secret** for client-side apps (they're public configuration)
- **Security Note:** Actual credentials are stored in a secure location (password manager/notepad) and will be configured in Amplify settings when we integrate with React
- User groups will be created separately in the next substage
- The hosted UI setup shown in AWS console is **not needed** - we'll use Amplify instead

---

## 🔄 **Next Steps**

### **Immediate Next Substage**
- **Define user groups** (`admin`, `pastor`, `doctor`, `member`) in AWS Console
  - **Status:** ✅ **COMPLETED**
  - **Date Completed:** November 3, 2025
  - **Details:**
    1.  **Navigated to Cognito Console**:
        -   Went to https://console.aws.amazon.com/cognito/home
        -   Used existing AWS account credentials
    2.  **Selected User Pool**:
        -   Clicked on "User pools" in the left sidebar.
        -   Selected the User Pool created earlier (e.g., `xphpi3`).
    3.  **Went to the Groups Section**:
        -   In the left sidebar, under the "User management" section, clicked on "Groups".
    4.  **Created 'admin' Group**:
        -   Clicked "Create group".
        -   **Group name**: `admin`
        -   **Description**: "Administrators with full access to manage the website."
        -   **Precedence**: `0`
        -   Left "IAM role" and "Add users to this group" blank.
        -   Clicked "Create group".
    5.  **Created 'pastor' Group**:
        -   Clicked "Create group".
        -   **Group name**: `pastor`
        -   **Description**: "Pastors with elevated access for content management."
        -   **Precedence**: `1`
        -   Left "IAM role" and "Add users to this group" blank.
        -   Clicked "Create group".
    6.  **Created 'doctor' Group**:
        -   Clicked "Create group".
        -   **Group name**: `doctor`
        -   **Description**: "Doctors with access to health-related content."
        -   **Precedence**: `2`
        -   Left "IAM role" and "Add users to this group" blank.
        -   Clicked "Create group".
    7.  **Created 'member' Group**:
        -   Clicked "Create group".
        -   **Group name**: `member`
        -   **Description**: "Regular church members with standard access."
        -   **Precedence**: `3`
        -   Left "IAM role" and "Add users to this group" blank.
        -   Clicked "Create group".
    8.  **Verified Groups**:
        -   Confirmed all four groups (admin, pastor, doctor, member) were listed in the Groups section.
- This will enable role-based access control

---

## 📧 **Substage: Enable email-based login**

**Status:** ✅ **COMPLETED**

**Date Completed:** November 3, 2025

### 🎯 **What We Accomplished (Newbie Notes)**

I thought email login was already set up when we created the User Pool, but it turns out there was more configuration needed! Here's what we did step by step:

#### ✅ **Step 1: Verified Basic Email Configuration**
- Went back to AWS Console → Cognito → Our User Pool
- Checked "Sign-in experience" section
- Confirmed **"Email"** was selected as sign-in method
- Verified **"Self-service sign-up"** was enabled
- Confirmed **"Email"** was required attribute

#### ✅ **Step 2: Found and Configured Email Templates**
- Discovered email settings are under **"Branding" → "Message templates"**
- Clicked "Edit" to customize the verification message
- Set up **email verification** for new users (codes sent via email)
- Customized the email template with church-friendly message:
  - **Subject:** "Welcome to SDA Nueva Vizcaya Church - Verify Your Account"
  - **Message:** Welcoming text with verification code `{####}` placeholder

#### ✅ **Step 3: Verified Password Recovery**
- Checked "Authentication" → "Sign-in" section
- Confirmed **"Self-service account recovery"** was **"Enabled"**
- Verified **"Recovery message delivery method"** was **"Email if available, otherwise SMS"**

#### ✅ **Step 4: Tested Email Functionality**
- Created a test user in AWS Console
- Received test email from `no-reply@verificationemail.com`
- Confirmed emails are being sent successfully!

### 🤔 **What I Learned (Newbie Perspective)**

#### 🧠 **Key Concepts Understood**
- **Email verification ≠ Email sign-in**: Just selecting email as sign-in method isn't enough - you need to configure HOW emails are sent
- **Message templates**: AWS lets you customize the emails users receive (verification, password reset, etc.)
- **Cognito vs SES**: Cognito can send emails for free (limited), or you can use Amazon SES for higher limits
- **Verification codes**: The `{####}` placeholder is where the actual verification code appears

#### 💡 **Important Decisions Made**
- Used **Cognito's default email service** (free, good for testing)
- Customized email template to be **church-appropriate** and welcoming
- Kept SMS as backup for password recovery (in case email fails)

#### ⚠️ **Things to Remember for Future**
- Email templates can be customized but must keep the `{####}` code placeholder
- Test emails work by creating test users in AWS Console
- For production, might want to upgrade to **Amazon SES** for better email deliverability
- Email verification happens automatically when users sign up through the website

---

## 🔄 **Next Steps**

### **Immediate Next Substage**
- **Install and configure AWS Amplify in React**
  - This will connect our React frontend to the Cognito User Pool
  - Need to install Amplify packages and configure with User Pool ID/Client ID

### **React Integration (Coming Soon)**
- Install AWS Amplify in the React project
- Configure Amplify with the User Pool ID and Client ID
- Create Auth context for user state management
- Build Login.tsx and Signup.tsx pages
- Implement ProtectedRoute component

### **React Integration (Coming Soon)**
- Install AWS Amplify in the React project
- Configure Amplify with the User Pool ID and Client ID
- Create Auth context for user state management
- Build Login.tsx and Signup.tsx pages
- Implement ProtectedRoute component

### **Future AWS Setup**
- Configure password policies (if needed)
- Set up email verification
- Add multi-factor authentication (optional)

---

## 📝 **Notes & Reminders**

- **Security:** Store AWS credentials securely but remember they're client-side visible
- **Testing:** Test the authentication flow after React integration
- **Scaling:** Cognito automatically handles user growth
- **Cost:** Free tier covers up to 50,000 monthly active users

---

## 🎉 **Success Metrics**

✅ AWS Cognito User Pool successfully created
✅ Email-based authentication configured
✅ Self-registration enabled
✅ AWS credentials obtained for React integration
✅ Foundation laid for role-based access control

**Progress:** 2/8 substages completed in Stage 3

---

*Documented by: SDA Nueva Vizcaya Church Website Development Team*
*Learning AWS as a newbie - one step at a time! 🙏*
