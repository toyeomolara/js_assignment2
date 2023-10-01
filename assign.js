Array1 = [15, 30, 45, 60];
Array2 = [5, 6, 3, 10];
let a = Array1.length;
let b = Array2.length;


  function divideArray(){

     if (a == b){
        let result = [];
        for (var i = 0; i < Array1.length; i++) {
          result.push(Array1[i] / Array2[i]);
        
        }
     }
   console.log(result)
    
  }
  


divideArray() 










 
