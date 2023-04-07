// Write a function that accepts an array of strings and console.logs each element using a for loop.
function num(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
}
}
let i=[32,23,43,12,21,31];
    num(i)

// Write a function that accepts an array of numbers and uses the forEach()
//  method to console.log each number multiplied by 2.

function nums(arr1){
    arr1.forEach(arr1=>{
      newArr=arr1*2;
      console.log(newArr)  
    });
    }
    let arr1=[2,3,5,7,8]
    nums(arr1)
    

// Write a function that takes in an array of numbers and consoles the 
// first four items multiplied by 8 and the last two added by 5. Console the array with the new values
// let number=[12,13,14,15,16,11]
function number(arr2){
    for(let i=0; i<arr2.length; i++){
    if(i<4) {
        arr2[i]*=8
    }
    else if(i<=arr2.length-2){
        arr2[i] +=5;
    } 
    }
    console.log(arr2)
    
}
let arr2=[12,13,14,15,16,11]
number(arr2)


// Write a function that takes in the following array and use a while loop to 
// iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function array(arrNum){
    let i=0;
    while(i<arrNum.length){
        console.log("Option",arrNum[i]);
        if(i === 4){
            break;
      }
      i++
    }
  } 
  let arrNum=[1,2,3,4,5,6,7,8,9]
  array(arrNum)
// Write a function that takes in a an array of strings and use a continue 
// statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function strings(fruits){
for(let m=0; m<fruits.length; m++){
   if(m === 2){
        continue;
        }
       console.log(fruits[m]);
    }
    }
let fruits=['apple','plum','banana','strawberries','kiwi']
strings(fruits)


