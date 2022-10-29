function ConvertToObject(str)
{
    let result=JSON.parse(str)
    for (let key of Object.keys(result)) 
    {
        console.log(key+': '+result[key])
    }
}
ConvertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
