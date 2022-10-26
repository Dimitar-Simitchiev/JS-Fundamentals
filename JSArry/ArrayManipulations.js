function arryM(arr) 
{
    let num = arr.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++) 
    {
        let element=arr[i].split(' ');
        for (let j = 0; j < element.length; j++) 
        {
            if (element[j]=="Add")
            {
                let numberindex=Number(element[1]);
                num.push(numberindex)
                
            }
            if (element[j]=="Remove") 
            {
                let numberindex=Number(element[1]);
                let index=num.indexOf(numberindex)
                
                 num.splice(index,1).map(Array)
                 
               
            
            }
            if (element[j]=="RemoveAt") 
            {
                
                
                let index=Number(element[1]);
                
                    
                
                num.splice(index,1).map(Array)
               
               
            
            }
            if (element[j]=="Insert") 
            {
                
                
                let number=Number(element[1])
                let index=Number(element[2])
                num.splice(index, 0, number);
                
                          
                
                
               
            
            }
                    
        }
            
    }console.log(num.join(' '))
        
}



    


arryM(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
arryM(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)