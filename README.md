# User Registration API with MongoDB, Image Upload & Email Verification

This is a Node.js RESTful API that allows users to register by providing their name, email, password, and profile picture. Upon successful registration, the user receives an email with a verification link.

---

## Features

- User Registration
- Password Hashing (bcrypt)
- Profile Picture Upload (Multer)
- Email Confirmation with Verification Link
- 🛡MongoDB Database Integration (Mongoose)

---

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (for image upload)
- Nodemailer (for sending emails)
- bcrypt (for hashing passwords)

---
## 🔧 How to Run This API

```bash
# Step 1: Clone this project
git clone https://github.com/YOUR_USERNAME/user-registration-api.git
cd user-registration-api
```
# Step 2: Install all required packages
```bash
npm install
```
# Step 3: Create a .env file in the root directory and  add the following
```bash
 PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```
# step 4: Start the server
```bash
node Server.js
```
##  How to Test Registration (Using Postman)
# POST http://localhost:5000/register
Use form-data as the body.


# A verification email will be sent to the user’s email.
