function demoar(arr) 
{
    
    arr.splice(2, 0, 1);
    console.log(arr.join(' '));
}
demoar([1,2,3,4,5]);