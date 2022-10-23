function echo(params) 
{   let tupeparam=typeof(params);
    if (tupeparam=='string') 
    {
        console.log(tupeparam);
        console.log(params);
    
    }
    if (tupeparam=='number') 
    {
        console.log(tupeparam);
        console.log(params);
    }else if(tupeparam!='number'&&tupeparam!='string')
    {
        console.log(tupeparam);
        console.log("Parameter is not suitable for printing");

    }
}
echo('Hello, JavaScript!');
echo(18);
echo(null);
