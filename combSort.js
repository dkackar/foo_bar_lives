var combSort = function(arr){

  // Your code here.

  //In bubble sort the distance between 2 elements being compared
  //from each other is 1, but in combo sort it can be more than 1.
 
  // The initial gap will be arr size / shrink
  var gap =  arr.length;  

 // as recommended shrink size
  shrink = 1.3; 
  
  var swapped = true;
  
  while (gap != 1 || swapped == true) {
    // gap is the 
    gap = Math.floor(gap / shrink);
  
    if (gap < 1) {
       //minimum gap is 1
      gap = 1;
    };
   
    var i = 0;
    swapped = false;
        
    //a single "comb" over the input list
    while((i + gap)  < arr.length) {
      
      if (arr[i] > arr[i+gap]) {
        
        //below swaps the variable
        var temp = arr[i];
        arr[i] = arr[i+gap];
        arr[i+gap] = temp; 

        swapped = true; 
      }
      i++;
    };
  };
  return arr;
};
