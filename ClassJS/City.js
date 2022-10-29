function City(citys)
{
    let props=Object.keys(citys);
  for (let prop of props) 
  {
    console.log(prop +' -> '+citys[prop])
  }

}
City({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
City({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)