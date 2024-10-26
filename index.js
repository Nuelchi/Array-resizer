
//FUNCTION TO SPLIT AN ARRAY INTO DISTINCT SIZES
function resizeArray(array, newSize){
    newArray =[];
    for(i = 0; i < array.length; i += newSize){
        splitting = array.slice(i, i + newSize)
        newArray.push(splitting)
    }
    return newArray;
}

//INITIALIZING PARAMETERS AND CALLING THE FUNCTION 
array = [1, 2, 3, 4 ,5,];
newSize = 2;
myArray = resizeArray(array, newSize);


//DISPLAYING NEW ARRAY OF CHUNK SIZE
console.log(myArray);