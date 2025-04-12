function helloNameShow(name) {
    console.log(`Hello ${name}`)
};

helloNameShow('Sally');

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

    let result;


function calculation( num1, num2, sign){
    if (sign == 'minus'){
        result = num1 - num2;
    } else if (sign == 'plus'){
        result = num1 + num2;
    } else if (sign == 'multiplication'){
        result = num1 * num2;
    } else if (sign == 'divide'){
        result = num1 / num2;
    }
};

calculation(1,2, 'minus')
console.log(result)


calculation(1,2, 'plus')
console.log(result)

calculation(2,2, 'multiplication')
console.log(result)

calculation(2,2, 'divide')
console.log(result)