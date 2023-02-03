//generate Input Fields
let [inputDivs,inputFieldsArray] = generateInputFields();
document.querySelector(".inputContainer").append(...inputDivs);
getAndClearInputFieldValues(inputFieldsArray);

//generate Table
const tableContainer = document.querySelector(".tableContainer");
const [table,tableBody] = generateTable(getGetInputFieldsConstant());
tableContainer.appendChild(table);

//Appy Error checker
for(let inputField of inputFieldsArray)
{
    inputField.addEventListener("keyup",keyupErrorChecker);
}
function keyupErrorChecker(event)
{
    checkForErrorsAndMark(event.target.parentNode,true);
}

//Appy Error checker on button press and save
document.querySelector("#saveBtn").addEventListener("click",buttonClicked);
function buttonClicked()
{
    if(checkForErrorsAndMarkAll(inputDivs) == false)
    {
        let inputFieldValues = getAndClearInputFieldValues(inputFieldsArray);
        
        appendToTable(inputFieldValues,tableBody);
    }
}