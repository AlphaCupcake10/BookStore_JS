function generateTable(InputObjArrConstant)//returns table and body of table
{
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tableBody);

    for (let {key} of InputObjArrConstant)
    {
        const th = document.createElement("th");
        th.textContent = key;
        thead.appendChild(th);
    }
    return [table,tableBody];
}

function clearTable(tableBody)
{
    tableBody.innerHTML = "";
}

function appendToTable(inputValues,tableBody)
{
    let tableRow = document.createElement("tr");
    for(value of inputValues)
    {
        let tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        tableData.innerText = value;
        field.value = "";
    }
    tableBody.appendChild(tableRow);
}

function setTable(inputValuesAll,tableBody)
{
    clearTable();
    inputValuesAll.forEach(element => {
        appendToTable(element,tableBody);
    });
}