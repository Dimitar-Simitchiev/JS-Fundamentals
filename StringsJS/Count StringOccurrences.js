function solve(str,word) 
{
    let splitstr=str.split(' ')
    let count=0;
   for (let index = 0; index < splitstr.length; index++)
   {
         if (splitstr[index]==word)
        {
            count++;
            
        }
    
   }
   console.log(count)
    
}
solve('This is a word and it also is a sentence',
'is'
)