const Add = (a , b) => {
    return a + b;
};

const Sub  = (a , b) => {
    return a - b;
};

const Mul = (a , b) => {
    return a  * b;
};

const Div = (a , b) => {
    return a / b ;
};

//For String passing without function
TempString =  "This is just message passing";

module.exports  = { Add , Mul , Div , Sub , TempString}