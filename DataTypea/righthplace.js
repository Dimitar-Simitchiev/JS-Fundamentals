
function rightplace(str,cha,ecp) 
{
    
    let result=''
    for (let i = 0; i< str.length; i++) 
    {
        if (str[i]=='_') 
        {
            result+=cha
        }else 
        if(str[i]!='_')
        {
            result+=str[i]

        }
        
    }
    if (result==ecp) 
    {
        console.log('Matched')
    }
    if (result!=ecp) 
    {
        console.log('Not Matched')
    }
}
rightplace('Str_ng', 'I', 'Strong');
rightplace('Str_ng', 'i', 'String');