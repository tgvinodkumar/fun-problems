// function getPonyAllergies (ponies, ownerEmail) {
//   var result = [];
//   ponies.filter( (pony) => pony.email === ownerEmail).map( (pony) => {
//     pony.allergies.map(allergy => {
//       if ( result.indexOf(allergy) < 0){
//         result.push(allergy);
//       }
//     })
//   })
//   return result.sort();
// }

// function getPonyAllergies (ponies, ownerEmail) {
//   return ponies.filter( (pony) => pony.email === ownerEmail)
//   .map( (pony) => pony.allergies)
//   .concatAll()
//   .reduce( (a,b) => a.includes(b) ? a : a.concat(b), []).sort()
// }

function getPonyAllergies (ponies, ownerEmail) {
  return ponies.filter( (pony) => pony.email === ownerEmail)
    .map( (pony) => pony.allergies)
    .concatAll()
    .filter( (e, i, a) => (a.indexOf(e) === i))
    .sort()

}

Array.prototype.concatAll = function() {
  return this.reduce(function (result, subArray) {
    return result.concat(subArray)
  })
}

console.log(getPonyAllergies([ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ]
,"sandy@hotmail.com"))
