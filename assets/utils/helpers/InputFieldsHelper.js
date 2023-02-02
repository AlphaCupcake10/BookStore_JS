function generateInputFields()
{
    let result1 = [];//stores divs
    let result2 = [];//stores only input fields

    for(const obj of getGetInputFieldsConstant())
    {
        let parentDiv = document.createElement("div");

        let label = document.createElement("label");
        label.htmlFor = obj.id;
        label.innerHTML = obj.key;
        parentDiv.appendChild(label);
        
        if(obj.type == constants.BOOLEAN)
        {
            let inputField = document.createElement("select");
            inputField.id = obj.id;
            
            let option = document.createElement("option");
            option.value = true;
            option.text = "Yes";

            inputField.appendChild(option);

            option = document.createElement("option");
            option.value = false;
            option.text = "No";
            
            inputField.appendChild(option);
            parentDiv.appendChild(inputField);
            result2.push(inputField);
        }
        else
        {
            let inputField = document.createElement("input");
            inputField.id = obj.id;
            inputField.type = obj.type;
            
            parentDiv.appendChild(inputField);
            result2.push(inputField);
        }

        result1.push(parentDiv);
    }
    return [result1,result2];
}

function getAndClearInputFieldValues(inputFieldsArray)
{
    let result = [];
    for(field of inputFieldsArray)
    {
        result.push(field.value);
        field.value = "";
    }
    return result;
}

function setErrorMessage(parentDiv,message)
{
    parentDiv.setAttribute("error-message",message);
    if(message.length == 0)
        parentDiv.classList.remove("error");
    else
        parentDiv.classList.add("error");
}

function checkForErrors(parentDiv,allowEmpty)//returns true if an error and marks as red
{
    let inputField = parentDiv.children[1];
    
    if(inputField.value == "" || inputField.value == undefined)
    {
        if(allowEmpty)
        {
            setErrorMessage(parentDiv,"");
            return false;
        }
        else
        {
            setErrorMessage(parentDiv,"Please enter this field");
            return true;
        }
    }
    if(inputField.id == "ISBNInput")
    {
        if(inputField.value.length != 13 && inputField.value.length != 10)
        {
            setErrorMessage(parentDiv,"Enter an ISBN of length 13 or 10");
            return true;
        }
    }
    else if(inputField.id == "DiscountInput")
    {
        if(inputField.value < 0 || inputField.value > 100)
        {
            setErrorMessage(parentDiv,"Enter a valid discount amount");
            return true;
        }
    }
    else if(inputField.id == "BookNameInput" || inputField.id == "AuthorNameInput")
    {
        if(inputField.value.trim().length == 0)
        {
            setErrorMessage(parentDiv,"Enter a valid name");
            return true;
        }
    }
    else if(inputField.id == "PagesInput" || inputField.id == "PriceInput")
    {
        if(inputField.value <= 0)
        {
            setErrorMessage(parentDiv,"Enter a valid number");
            return true;
        }
    }
    setErrorMessage(parentDiv,"");
    return false;
}

function checkForErrorsAll(inputDivs)//return true if found
{
    let result = false;

    for(let parentDiv of inputDivs)
    {
        if(checkForErrors(parentDiv,false))
        {
            result = true;
        }
    }

    return result;
}

function random(type,length)
{
    var letters = '0123456789';
    let result = '';
    if(type == constants.NUMBER)
    {
        for (var i = 0; i < length; i++) {
            result += letters[Math.floor(Math.random() * letters.length)];
        }
    }
    if(type == constants.TEXT)
    {
        letters = '0123456789abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < length; i++) {
            result += letters[Math.floor(Math.random() * letters.length)];
        }
    }
    return result;
}
function fillRandom(inputFieldsArray)
{
    for(inputField of inputFieldsArray)
    {
        inputField.value = random(inputField.type,10);
        if(inputField.id == 'DiscountInput')
        {
            inputField.value = Math.floor(Math.random() * 100);
        }
        console.log(inputField.value);
    }
}