function solve(intput)
{
    let store={};

    for (let line of intput) 
    {
        let splitInput=line.split(' ');
        let key=splitInput[0];
        let valuek=Number(splitInput[1]);
        if (store.hasOwnProperty(key))
        {
            store[key]+=valuek;
            
        }else
        {
            store[key]=valuek;
        }

    }
    for (let result in store) 
    {
    
        console.log(result+' -> '+store[result])
    }



    
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])

solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])