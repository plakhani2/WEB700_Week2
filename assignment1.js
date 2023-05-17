/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: PRAKASH LAKHANI 
*  Student ID: plakhani2 | 117302224 
*  Date: 05/17/2023
*
********************************************************************************/ 




//console.log("Hello World!")

const serverVerbs = ["GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Prakash Lakhani",
  "Prakash Lakhani: plakhani2@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"];

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs.includes(httpVerb) && serverPaths[i] === path) {
        return `200: ${serverResponses[i]}`;
      }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }


// Manual Testing START
console.log("*************************************************************");
console.log("********************  MANUAL TESTING  ***********************");
console.log(httpRequest("GET", "/")); // shows "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // shows "200: This Assignment was prepared by Prakash Lakhani"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"
console.log("*************************************************************");


console.log("-------------------------------------------------------------");
// Manual Testing END


//AUtomation Testing

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  function automateTests() {
    let testCaseCounter = 1;
    const testVerbs = ["GET", "POST"];
    const testPaths = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/panel",
      "/logout",
      "/randomPath1",
      "/randomPath2"];
        
    function randomRequest() {
      const randVerb = testVerbs[getRandomInt(testVerbs.length)];
      const randPath = testPaths[getRandomInt(testPaths.length)];
      const result = httpRequest(randVerb, randPath);
      console.log(`Test Case #${testCaseCounter} >>> ` + result);
      testCaseCounter += 1;
    }
  
    setInterval(randomRequest, 1000);
  }
  
  console.log("********************  AUTOMATION TESTING  ***********************");
  automateTests();