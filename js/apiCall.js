"use strict";

// let btc = {}

// let btcResults = [];
// console.log(btcResults);

const ul = document.getElementById("myTag");

function createNode(element) {
      return document.createElement(element)}; // Create the type of element you pass in the parameters
    function append(parent, el) {
      return parent.appendChild(el); // Append the second parameter(element) to the first one
    }


let getInfo =
fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    let coins = data.resp;
    console.log(coins);
    return coins.map(function (coin) {
      let li = createNode("li"), //  Create the elements we need
        span = createNode("span")
      span.innerHTML = `${bpi.coins}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Append all our elements
      append(li, span);
      append(ul, li);
    })
  })

.then(function (myJson) {
  console.log(myJson);

});

  // .then(function (myJson) {
  //   let coins = myJson.myJson; // Get the results
  //   return coins.map(function (coins) { // Map through the results and for each run the code below

  //   })})

  //     console.log(btcResults);

      module.exports = {getInfo,createNode }