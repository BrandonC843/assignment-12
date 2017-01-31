// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

var makeNamesObject = function(string1, string2, string3){
   var firstStringArray = string1.split(' ')
   var secondStringArray =  string2.split(' ')
   var thirdStringArray = string3.split(' ')

   var namesObj = {
      [firstStringArray[0]]: firstStringArray[1],
      [secondStringArray[0]]: secondStringArray[1],
      [thirdStringArray[0]]: thirdStringArray[1]

   }
      return namesObj;

}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
