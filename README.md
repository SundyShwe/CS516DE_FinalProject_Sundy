# Project Architecture
![Sundy_Project_Arhcitecture](https://github.com/SundyShwe/CS516DE_FinalProject_Sundy/assets/136497076/64506cf7-1c5a-479d-8792-16cc99a423d9)

# Domain Setup and Hosting on S3
 - First, I hosted my porfolio website on a S3 Bucket.
 - Then, I got my domain from Namechep which I later set it up as a hosted Zone in Amazon Route 53.
 - I put Amazon CloudFront infront of S3 to enable access as Https.
 - I then transfer traffice from Route 53 to the CloudFront.

# Front-end : Hightly Customizable Portfolio in React and Context API
 - React as the main frame wrok and Context API to manage my profolio state throughout the app.
 - Anyone who would like to use this app can customize their information in the data section of the app
 - Portforlio website will then generate accordingly to the input data.
 - Steps :
     1.  Clone the repo
     2.  run  `npm install`
     3.  Change your particulars, contact information, skillset, education and experiences in "Data" Folder
   
# Serverless Lambda to send notificatin after my visitor submitted the contact form
 - Anyone who wants to get in touch with me can send me a message from the contact form in my porfolio website.
 - The form data will be posted to AWS Lambda function which then calls SNS Topic to send the notification email to me.
