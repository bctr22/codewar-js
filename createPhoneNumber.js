function createPhoneNumber(numbers){
    if(numbers.length !== 10){
        return 'numbers have 10 digits';
    }
    
    // Convert array to string and remove commas
    let str = numbers.join('');
    
    // Format the string with parentheses and hyphen
    return `(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`;
}

//test cases
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(createPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));
