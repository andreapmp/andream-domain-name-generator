/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my", "your"];
  let adjective = ["great", "big", "spectacular", "amazing"];
  let noun = ["jogger", "raccoon", "bandit", "magician"];
  let url = [".com", ".net", ".io", ".edu"];

  console.log("Regular for loop:");
  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let urlIndex = 0; urlIndex < url.length; ++urlIndex) {
          console.log(
            `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${url[urlIndex]}`
          );
        }
      }
    }
  }

  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let urlIndex = 0; urlIndex < url.length; ++urlIndex) {
          let para = document.createElement("p");
          para.innerHTML = `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${url[urlIndex]}`;
          document.getElementById("domain-gen").appendChild(para);
        }
      }
    }
  }
};
