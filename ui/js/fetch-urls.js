/*
You are given an array of 100 Urls, and you have to fetch their content and save
it in localStorage. There is a constraint that only 3 requests can be active at any
point in time. As soon as one, two or three requests gets over; you have to make
more requests such that the active request count goes back to 3.
*/

const arr = ['https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'];
const MAX_REQUESTS = 3;
const queue = [...arr];
const initialRequestArray = queue.splice(queue.length - MAX_REQUESTS);

async function fetchBuilder(url, index) {
  const response = await fetch(url);
  const data = await response.json();
  /* do something */
  console.log(response, data);
  if (queue.length) {
    const next = queue.pop();
    fetchBuilder(next, index);
  }
}

for (let i = 0; i < initialRequestArray.length; i++) {
  fetchBuilder(initialRequestArray[i], i);
}
