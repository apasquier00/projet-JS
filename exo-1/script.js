// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
var celsius = kelvins - 273;
//cette ligne permet de calculer la température en fahrenheits
var fahrenheits = celsius * (9/5) + 32;
//permet d'arrondire les fahrenheits en entier
fahrenheits = Math.floor(fahrenheits);
console.log("Kelvins = " + kelvins);
console.log("Celsius = " + celsius);
console.log("Fahrenheits = " + fahrenheits);