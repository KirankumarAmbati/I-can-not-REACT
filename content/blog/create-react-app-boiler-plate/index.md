---
title: Boilerplate Setup
date: "2019-06-06"
author: hamiltonskraba
---

# Create-React-App Boilerplate Setup

Like any worthwhile endeavor, learning how to code in React will require practice. And that means that you will have to both work on and create many projects. This will explain the easiest way to get start creating and working with your own projects.

## Node and NPM

React has a number of dependencies to work its magic, and these are all managed through a package manager called Node.js. If you have been a developer for some time, then it is possible that you already have these packages installed on your computer. You can check for these with the commands in your terminal:

```javascript 
node -v
npm -v
```

If these commands do not return a valid version, then your next step is to visit the [official NodeJS download page](https://nodejs.org/en/download/) and install the appropriate version for your system. The most recent release will cover both Node and NPM. Have some patience, as it might take some time to complete the installation. 

# Create-React-App

The quickest way to get start working with React is to utilize a package managed by Facebook called [create-react-app](https://github.com/facebook/create-react-app). React relies on on two key libraries: Babel and Webpack. 

Babel takes javascript code of any version and generates a more backwards compatible version that is capable of running on almost any browser. Without Babel, some people would just see a blank screen instead of all your hard work.

Webpack helps to compile other javascript modules. It converts different dependencies into static resources so that a browser can consume less resources.

You can install and configure all of these dependencies seperately to maintain more control over your project, but we use create-react-app to take care of this tedious process when you want to focus on developing an application.

## If your Node Version is 5.2 or below:

You will need install the package globally. Simply run the command:

```javascript 
npm install -g create-react-app
```

This will allow you to run the package from anywhere on your system. Again, this could take a little while to complete depending on your system's specs. 

Once the installation has completed, you are now ready to create your first React application! 

Back in your terminal, type the command below, substituting <ApplicationName> for whatever you would like your project to be called.

```javascript
create-react-app <ApplicationName>
```
Your machine will start the process of building the folder tree and notify you when it has finished. Once again, this can take a few minutes depending upon the speed of your system.

## If your Node Version is 5.2 or above:

You can use a different command and avoid having to install the package gloabally. It achieves the same proess as above, except that you save a step. In your terminal, type:

```javascript
npx create-react-app <ApplicationName>
```

Your machine will start the process of building the folder tree and notify you when it has finished. Once again, this can take a few minutes depending upon the speed of your system.

# Project Structure

Once your project has finished its installation, you will find a new folder in your working directory called <ApplicationName>. If you open that directory, you will find a number of automatically generated files.
  
## SRC 
This will hold most of the actual code that you write. Often, content is seperated into components and stylesheets. You can choose to start modifying these files, or you can delete them all and replace them with your own files. 

## Public
This holds statis resources for your project, such as the root .html file for your entire project.

## Node Modules 
There are a lot of files here. This is all of the dependencies that make your application be able to run.

## package.json & package-lock.json
This is structured list of all of your application's dependencies primarily used for effective communication with browsers.

## .gitignore
This file is used for soucre control and updating your project in a repository.

## README.md 
This file contains some instructions on how to work with your application, which will be covered in the next section.

# Running the Application

To start running your React Application, you first need to change directories into your newly created project. This is done with the ```cd``` command:

```javascript 
cd <ApplicationName>
````

If you already moved into the directory to explore the folder structure in the last step, then you might see an error that this folder doesn't exist. Nothing is broken! You simply have to be in the main folder of you project. 

Once you are in the proper directory, type:

```javascript
npm start
```
You will see the terminal change, and the automatically generated code will start to run locally in your browser at address ```localhost:3000```
There will be a spinning atom with the helpful suggestion to edit src/App.js. You can start to edit this file in real time, and the changes will be rendered whenever the file is saved.

To stop your project, type:
```ctrl + c```
