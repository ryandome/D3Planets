var names = ["one","two","three"];

var pDiv = d3.select("#A1").append("p").text(names);

var pPara = d3.select("A2").selectAll("p").data(names).enter().append("p")
.text(names);

var planetPromise = d3.json("planets.json");
   
planetPromise.then(
function(data)
{ 
    drawPlanets(data);
    console.log("works",data);
}
function(err)
{
    d3.select("h1").text("Error Found");
    console.log("broke",err);
})    

var drawPlanets = function(planData)
{
    var plan = d3.select("#B3").append("img");
    
    
}







/*
var makePlanet = function(name,img,distance,radius,density,moons)
{
    return {name,img,distance,radius,density,moons};
}


var planets = [
makePlanet("Mercury","img/mercury.jpg",
.38,.38,5.43,0),
makePlanet("Venus","img/venus.jpg",
.72,.94,5.24,0),
makePlanet("Earth","img/earth.jpg",
1,1,5.52,1),
makePlanet("Mars","img/mars.jpg",
1.52,.53,3.94,2),
makePlanet("Jupiter","img/jupiter.jpg",
5.2,11.21,1.33,79),
makePlanet("Saturn","img/saturn.jpg",
9.53,9.45,.7,62),
makePlanet("Uranus","img/uranus.jpg",
19.19,4.0,1.3,27),
makePlanet("Neptune","img/neptune.jpg",
30,3.88,1.76,14),
];

console.log(JSON.stringify(planets,null,2))

*/




                      