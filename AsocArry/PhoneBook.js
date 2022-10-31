function solve(input) 
{
    let person={}
    
    for (let  result of input)
    {
        let  inputsplit=result.split(' ');
        let key= inputsplit[0];
        let valuerk=inputsplit[1]
        person[key]=valuerk;
      
        
    }
    for (const res in person) 
    {
      console.log(res+' -> '+person[res])
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)