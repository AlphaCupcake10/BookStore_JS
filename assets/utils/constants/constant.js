const constants = {
    NUMBER : "number",
    TEXT : "text",
    DATE : "date",
    BOOLEAN : "boolean"
}

const getGetInputFieldsConstant = function(){
    return [
        {
            key: "ISBN",
            type : constants.NUMBER,
            id : "ISBNInput"
        },
        {   
            key : "Author Name",
            type : constants.TEXT,
            id : "AuthorNameInput"
        },
        {
            key : "Book Name",
            type : constants.TEXT,
            id : "BookNameInput"
        },
        {
            key : "Price",
            type : constants.NUMBER,
            id : "PriceInput"
        },
        {
            key : "Pages",
            type : constants.NUMBER,
            id : "PagesInput"
        },
        {
            key :  "Discount",
            type : constants.NUMBER,
            id : "DiscountInput"
        },
        {
            key : "Date of Publish",
            type : constants.DATE,
            id : "DateOfPublishInput"
        },
        {
            key : "In Stock",
            type : constants.BOOLEAN,
            id : "InStockInput"
        }
    ];
}