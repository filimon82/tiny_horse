let superHeros = [
    ["Batman", "Bruce Wayne"], 
    ["Spiderman", "Peter Parker"], 
    ["The Flash", "Barry Allen"]
    ]
let secretIdentity = superHeros.map(function(revealArray){
    // return revealArray.toString();
    return revealArray.join ("'s real identity is "); //returns as string
    console.log(revealArray);
})
console.log(secretIdentity.join('\n'));



//var superHeroes =[["Batman", "Bruce Wayne"], ["Spiderman", "Peter Parker"],['The Flash', 'Barry Allen']];
 //var secretIdentity = superHeroes.map(function(revealArray){return revealArray.join(" is ");})
 
//console.log(secretIdentity.join('\n'));
