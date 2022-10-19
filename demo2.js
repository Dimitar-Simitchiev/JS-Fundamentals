function sum(num)
{
    let count=num;
   let number=1;
   let result=0;
   while (count>0) 
   {
    if(number%2!=0)
    {
        console.log(number);
        result+=number;
        count--;

    }
    number++

   }
    console.log("Sum:"+result);

}
sum(3);
