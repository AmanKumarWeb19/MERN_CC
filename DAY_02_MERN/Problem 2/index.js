// Implement a simple API call to a public API (e.g., JSONPlaceholder) using async/await and display the results.

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  console.log(json);
};

const displayData = () => {
  fetchData();
};

displayData();
