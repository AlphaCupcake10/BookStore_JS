const inputArr = getInputObjArr().map((element)=>getTag(element));

let inputContainer = document.getElementsByClassName("inputContainer")[0];

inputArr.forEach(val => inputContainer.appendChild(val));

const tableContainer = document.getElementsByClassName("tableContainer")[0];
const table = createTable();
tableContainer.appendChild(table);


document.querySelector("#saveBtn").addEventListener("click", addData);