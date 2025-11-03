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
- This will enable role-based access control

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

**Progress:** 1/8 substages completed in Stage 3

---

*Documented by: SDA Nueva Vizcaya Church Website Development Team*
*Learning AWS as a newbie - one step at a time! 🙏*
