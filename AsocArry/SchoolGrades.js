function solve(intput)
{
    let store={};

    for (let line of intput) 
    {
        let splitInput=line.split(' ');
        let key=splitInput.shift();
        let valuek=0;
        let count=0;
        for (let index = 0; index <splitInput.length; index++)
        {
            count =splitInput.length
            valuek+= Number(splitInput[index])
        }
        if(!store.hasOwnProperty(key))
        {
            valuek/=count;
            store[key]=valuek;

        }
        else
        {
             
            valuek/=count;
            store[key]+=valuek;
            let newc=Number(store[key])
            store[key]=newc/2

            
           

        }
       

    }
    let sorted=Array.from(store);
   

    sorted.sort((a,b)=>a[0].localeCompare(b[0]));
   

    for (let res of sorted) 
    {
        let key=res[0]
        let value=res[1]
        console.log(key+': '+value.toFixed(2))
    }



    
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])

solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven ',
'Tammy 2 5 6 3'])