function grades(number) 
{
    let newnum=number.toFixed(2);
    if (number<3) 
    {
        console.log('Fail (2)')
    }else if (number<3.5&&number>=3) 
    {
        console.log('Poor ('+newnum+')')
    }
    else if (number>=3.5&&number<4.5) 
    {
        console.log('Good ('+newnum+')')
    }
    else if (number>=4.5&&number<5.5) 
    {
        console.log('Very good ('+newnum+')')
        
    }
    else if (number>=5.5) 
    {
        console.log('Excellent ('+newnum+')')
    }

    
}
grades(3.33)
grades(4.50)
grades(2.99)