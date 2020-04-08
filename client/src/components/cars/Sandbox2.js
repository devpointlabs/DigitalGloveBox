// Sorting an array part 1.
// write a funtion that takes an array of integers 
// and returns an array with lowest item first postion
// and the original first index swapped postions with lowest
// ex f([10,3,2,1,6]) => [1,3,2,10,6]


function swapFirstIndexWithLowest(n,i){
  
  // find lowest number 
  //find lowestnumber and it index in array
  // make assumption
  let lowestNumber =nimArray[0]
  let lowestNumberIndex =0
  
  for (let i = 0; i< numArray.length;i++){
    if( numArray[i]< lowestNumber){
      lowestNumber = numArray[i]
      lowestNumberIndex = i
    }
  }

  console.log(lowestNumber)
  console.log(lowestNumberIndex)
  
  let i = arr.indexOf(Math.min(...arr))
  
 function indexOfMin(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          minIndex = i;
          min = arr[i];
      }
  }

  return minIndex;
}
  
  


  //keeep track of index if you want to swap
  //part 2 swap
  //part 3 return
  // 


  // keep track of index if you want to swap
  // swap, remmember to use a temp variable
  // what type do you need to return?
}