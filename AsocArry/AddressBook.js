function solve(input) 
{
    let person={}
    for (let line of input) 
    {
        let splitInput=line.split(':');
        let key=splitInput[0];
        let valuerk=splitInput[1];
        
        
            person[key]=valuerk;
           
        

        
    }

    let personstr=Object.entries(person);
   

    personstr.sort((a,b)=>{

        let namea=a[0];
        let nameb=b[0];
        return namea.localeCompare(nameb);
    });

    for (let res of personstr) 
    {
        let key=res[0]
        let value=res[1]
        console.log(key+' -> '+value)
    }
   
    
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)