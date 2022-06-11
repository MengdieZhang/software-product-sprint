// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
// source:https://github.com/google/software-product-sprint/blob/main/walkthroughs/week-1-web-development/examples/stanley/src/main/webapp/script.js
function randomizeImage() {
  // The images directory contains 5 images, so generate a random index between
  // 1 and 5.
  const imageIndex = Math.floor(Math.random() * 5) + 1;
  const imgUrl = 'images/'+imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;

  // Add it to the page.
  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
}


/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();
  
    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
  }

/** Fetches stats from the server and adds them to the page. */
async function getServerStats() {
    const responseFromServer = await fetch('/server-stats');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();

    // Now we can reference the fields in stats!
    console.log(stats.x);
    console.log(stats.y);
    console.log(stats.z);
  
    const statsListElement = document.getElementById('server-stats-container');
    statsListElement.innerHTML = '';
  
    statsListElement.appendChild(
        createListElement('Start time: ' + stats.startTime));
    statsListElement.appendChild(
        createListElement('Current time: ' + stats.currentTime));
    statsListElement.appendChild(
        createListElement('Max memory: ' + stats.maxMemory));
    statsListElement.appendChild(
        createListElement('Used memory: ' + stats.usedMemory));
  }
  
  /** Creates an <li> element containing text. */
  function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
  }

  /** Fetches quotation from the server and adds them to the page. */
async function getRandomQuo() {
    const responseFromServer = await fetch('/quotation');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const str = await responseFromServer.json();

    const randomQuo = str[Math.floor(Math.random()*str.length)];
    console.log(randomQuo);

    const quoContainer = document.getElementById('quotation-container');
    quoContainer.innerText = randomQuo;

  }
  