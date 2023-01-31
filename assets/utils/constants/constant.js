const constants = {
    NUMBER : "number",
    TEXT : "text",
    DATE : "date",
    BOOLEAN : "boolean"
}

const {NUMBER, TEXT, DATE, BOOLEAN} = constants;

const getInputObjArr = function(){
    return [
        {
            key: "ISBN",
            type : NUMBER,
            id : "ISBNInput"
        },
        {   
            key : "Author Name",
            type : TEXT,
            id : "AuthorNameInput"
        },
        {
            key : "Book Name",
            type : TEXT,
            id : "BookNameInput"
        },
        {
            key : "Price",
            type : NUMBER,
            id : "PriceInput"
        },
        {
            key : "Pages",
            type : NUMBER,
            id : "PagesInput"
        },
        {
            key :  "Discount",
            type : NUMBER,
            id : "DiscountInput"
        },
        {
            key : "Date of Publish",
            type : DATE,
            id : "DateOfPublishInput"
        },
        {
            key : "In Stock",
            type : BOOLEAN,
            id : "InStockInput"
        }
    ];
}