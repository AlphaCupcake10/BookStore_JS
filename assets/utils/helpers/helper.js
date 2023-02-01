let inputFields = [];//stores input fields
let tableBody = null;

//funtion to create html tag from input object
function getTag(obj)
{
    const {key,type,id} = obj;

    //default case
    let input = null;
    
    if(type == NUMBER || type == TEXT || type == DATE)
    {
        input = document.createElement("input");
        input.id = id;
        input.type = type;
        input.name = key;
    }
    else if(type == BOOLEAN)
    {
        input = document.createElement("select");
        input.id = id;
        input.name = key;

        const options = ["No","Yes"];
        for(const option of options)
        {
            let optionTag = document.createElement("option");
            optionTag.value = option;
            optionTag.text = option;
            input.append(optionTag);
        }
    }   
    else
    {
        input.name = key;
        input.type = TEXT;
        input = document.createElement("input");
    }

    input.value = "";


    const inputTagContainer  = document.createElement("div");
    const inputlabel = document.createElement("label");
    inputlabel.setAttribute("for",id);
    inputlabel.innerText = key;
    inputTagContainer.append(inputlabel);
    inputTagContainer.append(input);
    
    inputFields.push(input);

    return inputTagContainer;
}

//creates table
function createTable()
{
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    tableBody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tableBody);

    for (let {key} of getInputObjArr())
    {
        const th = document.createElement("th");
        th.textContent = key;
        thead.appendChild(th);
    }
    return table;
}

//addData
function addData()
{
    for(field of inputFields)
    {
        if(field.value == "")
        {
            alert("Fill All Details");
            return;
        }
    }
    let tableRow = document.createElement("tr");
    for(field of inputFields)
    {
        let tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        tableData.innerText = field.value;
        field.value = "";
    }
    tableBody.appendChild(tableRow);
}