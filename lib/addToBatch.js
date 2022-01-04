let addToBatch = (array, num) => {
    if(array.length < 5){
        array.push(num)
        return array
    }else{
        return array + 'this array is full'
    }
}

 console.log(addToBatch([1,1,2,2,3], 4)); 


// addToBatch([1, 2, 3], 4); 
// [ 1, 2, 3, 4 ]

// addToBatch([], 8); 
// [ 8 ]

// addToBatch([1, 2, 3, 4, 5, 6], 7); 
// [ 1, 2, 3, 4, 5, 6 ] 