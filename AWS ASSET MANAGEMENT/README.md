# 🗃️ Asset Management System – Serverless Cloud Migration Project

This project demonstrates the migration and re-architecture of a traditional on-premise Asset Management System into a fully serverless cloud-native solution using AWS. The application enables users to perform CRUD operations on assets via a web interface, with backend logic and data storage handled entirely on AWS.

---

## 📄 Project Documentation

📘 [Download Full Documentation (PDF)](Asset_Management_System_Documentation.pdf)

Includes:
- Architecture overview (before/after)
- Step-by-step migration approach
- AWS service setup
- Screenshots and deployment explanation

---

## ✅ Features

- Frontend hosted on Amazon S3 (static website)
- Backend powered by API Gateway + AWS Lambda (Python)
- DynamoDB used for scalable, serverless database storage
- MySQL to DynamoDB data migration using Python (Boto3)
- CORS configured for secure cross-origin requests
- IAM roles for secure Lambda execution
- CloudWatch logging for monitoring Lambda functions

---

## 🧰 Technologies Used

| Component       | Technology                   |
|----------------|-------------------------------|
| Frontend        | HTML, JavaScript              |
| Backend         | AWS Lambda (Python)           |
| API Gateway     | HTTP API                      |
| Hosting         | Amazon S3                     |
| Database        | DynamoDB                      |
| Migration Tool  | Python + Boto3                |
| Permissions     | IAM                           |
| Monitoring      | CloudWatch                    |

---

## 📂 Project Structure

