function days(n) 
{
    let daysofweek=[1,2,3,4,5,6,7];
     
        if (daysofweek[0]==n) 
        {
            console.log('Monday')
        }
        if (daysofweek[1]==n) 
        {
            console.log('Tuesday')
        }
        if (daysofweek[2]==n) 
        {
            console.log('Wednesday')
        }
        if (daysofweek[4]==n) 
        {
            console.log('Friday')
        }
        if (daysofweek[5]==n) 
        {
            console.log('Saturday')
        }
        if (daysofweek[6]==n) 
        {
            console.log('Sunday')
        }
        if (daysofweek[3]==n) 
        {
            console.log('Thursday')
        }
        if (n>7||n<1) 
        {
            console.log('Invalid day!')
        }
        
    
}
days(4)
