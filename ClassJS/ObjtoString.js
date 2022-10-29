function objtostr(name,lastName,hairColor)
{
    let person={
        name,
        lastName,
        hairColor,
    }
    let result=JSON.stringify(person)
    console.log(result)

}
objtostr('George', 'Jones', 'Brown')