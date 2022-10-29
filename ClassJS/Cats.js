function Catclass(arr)
{
    class Cat
    {
        constructor(name,age)
        {
            this.name=name;
            this.age=age;


        }
        Meow()
        {

        console.log(this.name+', age '+this.age+' says Meow')
        

        }

    }
    let cats=[];
    
        
        for (let satstr of arr) 
        {
            let tokens=satstr.split(' ');
            let cat=new Cat(tokens[0],Number(tokens[1]))
            cats.push(cat)
        }
          
            
        
    
    
    for (let cat of cats)
    {
    
     cat.Meow()
    }
    

}
Catclass(['Mellow 2', 'Tom 5'])