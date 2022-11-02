function solve(str,word)
{
 while (str.includes(word)) {
    str=str.replace(word,'*'.repeat(word.length))
 }
 console.log(str)
}
solve('A small sentence with some words', 'small')