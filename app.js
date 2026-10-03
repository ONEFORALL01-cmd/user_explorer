console.log("Hello, World!");
console.log("1"+"1");
console.log(1+1);

const API = "https://jsonplaceholder.typicode.com/users";
async function fetchData() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(json, data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }}
fetchData();