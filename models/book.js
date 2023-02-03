function computeErrorMessage(inputField)
{
    if(inputField.id == "ISBNInput")
    {
        if(inputField.value.length != 13 && inputField.value.length != 10)
        {
            return "Enter an ISBN of length 13 or 10";
        }
    }
    else if(inputField.id == "DiscountInput")
    {
        if(inputField.value < 0 || inputField.value > 100)
        {
            return "Enter a valid discount amount";
        }
    }
    else if(inputField.id == "BookNameInput" || inputField.id == "AuthorNameInput")
    {
        if(inputField.value.trim().length == 0)
        {
            return "Enter a valid name";
        }
    }
    else if(inputField.id == "PagesInput" || inputField.id == "PriceInput")
    {
        if(inputField.value <= 0)
        {
            return "Enter a valid number";
        }
    }
    return "";
}

function rectifyValue(inputField)
{
    if(inputField.id == "BookNameInput" || inputField.id == "AuthorNameInput")
    {
        inputField.value = inputField.value.trim();
    }
}