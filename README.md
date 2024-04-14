# QR Code Generator

This is a simple QR code generator built using Node.js. With this tool, you can easily generate QR codes for various purposes, such as linking to a website, sharing contact information, or providing Wi-Fi access credentials.

##  Note

Please note that this project is not suitable for hosting on GitHub Pages directly as GitHub Pages supports only static hosting using HTML files. This repository requires nodeJS hosting as it is entirely built using nodeJS server. Consider deploying the project to a platform that supports your requirements, such as a traditional web hosting service or a cloud platform like Heroku, AWS, or Google Cloud Platform. If you have any questions or need assistance with deployment, feel free to reach out.

## Features

Generate QR codes for:
  - URLs
  - Text
  - Contact information (vCard format)
  - Wi-Fi access (WPA/WEP)
- Save generated QR codes as PNG images

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/divyesh-ashok.io/qrcodeproject

2. Navigate to qrcodeproject

   ```bash
   cd qrcodeproject 

3. Install the dependencies

   ```bash
   npm i
   
3. Run it in Node

    ```bash
   node index.js

## Depednencies    

This project relies on the following npm packages:

1. qrcode: For generating QR codes.
2. inquirer: For user interaction via command line prompts.
3. fs: For file system operations.
