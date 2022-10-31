function solve(input) 
{
    let week={}
    for (let line of input) 
    {
        let splitInput=line.split(' ');
        let key=splitInput[0];
        let valuerk=splitInput[1];
        
        if (!week.hasOwnProperty(key)) 
        {
            week[key]=valuerk;
            console.log('Scheduled for ' +key)
        }else{
            console.log('Conflict on ' +key+'!')
        }

        
    }
    for (let result in week) 
    {
    
        console.log(result+' -> '+week[result])
    }
    
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
