function solve(str,strindex,strcount)
{
    let lastindex=strcount+strindex
    let newstr=str.substring(strindex,lastindex)
    console.log(newstr)
}
solve('SkipWord', 4, 7)