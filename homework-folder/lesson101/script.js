function helloNameShow(name) {
    return `Hello ${name}`;
};

console.log(helloNameShow('Sally'))

// =======================================================================>


let arr = [1, 2, 22, 17, 3, 4, 5, 6, 7, 8, 9, 10,11];

function numberMoreTenShow(array){
    for(let i = 0; i <= array.length; i++){
        if(array[i] >= 10){
            console.log(array[i]);
        }
    }
};

numberMoreTenShow(arr);

// =======================================================================>


function calculation( num1, num2, sign){
    if (sign == 'minus'){
        return num1 - num2;
    } else if (sign == 'plus'){
        return num1 + num2;
    } else if (sign == 'multiplication'){
        return num1 * num2;
    } else if (sign == 'divide'){
        return num1 / num2;
    }
};

console.log(calculation(1000,2, 'minus'))


console.log(calculation(133,2, 'plus'))


console.log(calculation(20,2, 'multiplication'))


console.log(calculation(22,2, 'divide'))