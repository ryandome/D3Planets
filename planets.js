var names = ["one", "two", "three"];

var help = [{name:"hero",last:"index"},{name:"other"},{name:"next"}];

d3.select("#A1").append("p").text(names);

//----------------


d3.select("#A2").selectAll("span").data(names).enter().append("p")
    .text(function(names){return names});

//----------------

var planetPromise = d3.json("https://ryandome.github.io/D3Planets/planets.json");
   
planetPromise.then(
function(data)
{ 
    listNames(data);
    drawPlanets(data);
    console.log("works",data);
});

//----------------

var drawPlanets = function(planData)
{
    var plan = d3.select("#B3").append("p");
    
    var items = plan.selectAll("p").data(planData).enter().append("p");
        
    //adds image
    items.append("img").attr("src",function(d){return d.img});
}

//----------------

var listNames = function(dataA)
{
    var listN = d3.select("#B4").append("ol");
    
    var things = listN.selectAll("li").data(dataA).enter().append("li");
    
    //add names
    things.append("span").text(function(d){return d.name});
}
                    