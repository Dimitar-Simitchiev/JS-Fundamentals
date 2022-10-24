function revurce(n,arr)
{
    let temparr=[];
    for (let i = 0; i <n; i++)
    {
        temparr[i]=arr[i]
        
    }
    let a="";
   
   
    let rev=temparr.reverse()
    for (let index = 0; index < rev.length; index++) {
        
        a+=rev[index]+" "
    }
    console.log(a)
  
   


    
}
revurce(3, [10, 20, 30, 40, 50])
revurce(4, [-1, 20, 99, 5])
revurce(2, [66, 43, 75, 89, 47])