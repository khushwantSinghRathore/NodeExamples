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

//For Multiple  Function 
module.exports.Add =  Add;
module.exports.Div = Div;
module.exports.Sub = Sub;
module.exports.Mul = Mul;