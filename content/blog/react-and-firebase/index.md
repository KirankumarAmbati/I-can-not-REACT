---
title: Hosting a React App with Firebase
date: "2019-10-01"
author: connorlindsey
---

This tutorial will walk through using Firebase to host a React application. Firebase is a comprehensive development platform created by Google. It offers services like hosting, databases, cloud functions, and authentication. It's easy to use and gives a generous free tier. 

## Prerequisites
- A simple React app
- Node.js and NPM installed
- Basic command line experience

## Part 1: Create a React App
Run the following command to create a react app
```javascript
npx create-react-app <your-app-name>
```

Change into the directory and run your application
```javascript
cd <your-app-name>
npm start
```

You can now open your application on **localhost:3000**

## Part 2: Setting up Firebase
Go to [the Firebase website](https://firebase.google.com/) and login with your Google account. Once you're logged in, click on **Go to Console** and create a new project. 

Give it a name and link to a Google Analytics account. Before you know it, you'll have a new project!



Click add an app by clicking on the Code icon. Give your app a name and click _Also set up **Firebase Hosting** for this app_. Don't worry about adding the scripts, we'll do that via NPM. 

Install the Firebase CLI by running `npm install -g firebase-tools`. 

Log in to Firebase from the command line by running `$ firebase login`. 

Initialize your project by running `$ firebase init`. Choose **Hosting** from the list (Use the arrow keys and <space> to select options). Select **Use an existing project** and choose the project you just created. 

When asked what you want to use as your public directory, type in build.

You should now have a firebase.json file that has the following content
```javascript
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

## Part 3: Deploy your application
From the command line, run the following commands to build your app and deploy to firebase. 

```
$ npm build
$ firebase deploy
```

You'll now be able to view your application at the provided url. Whenever you make updates to your site, make sure to run npm build and firebase deploy. This will automatically update your site. 

Good job getting your app uploaded onto Firebase. You can keep using more of Firebase's tools to add authentication, databases, and more to your application. 