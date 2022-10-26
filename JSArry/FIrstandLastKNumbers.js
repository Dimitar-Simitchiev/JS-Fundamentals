function matix(arry) 
{
   let n =arry.shift();
   let first=arry.slice(0,n);
   let second=arry.slice(arry.length-n);
   
  
   console.log(first.join(' '))
   console.log(second.join(' '))
   
}

matix([2, 
    7, 8, 9]
    
   
    
   )
