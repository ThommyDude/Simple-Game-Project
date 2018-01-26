//Resource Variables:
var meat = 0;
var wood = 0;
var rock = 0;
var iron = 0;
var gold = 0;

//People Variables:
var hunters = 0;
var cutters = 0;
var miners = 0;

//Buttons:
function huntMeat(num)
{
    meat = meat + num;
    document.getElementById("meatHolder").innerHTML = meat;
}

function chopWood(num)
{
    wood = wood + num;
    document.getElementById("woodHolder").innerHTML = wood;
}

function mineRock(num)
{
    rock = rock + num;
    document.getElementById("rockHolder").innerHTML = rock;
}

function mineIron(num)
{
    iron = iron + num;
    document.getElementById("ironHolder").innerHTML = iron;
}

//AutoClickers:
function hireHunter()
{
    var hunterCost = Math.floor(10 * Math.pow(1.1, hunters));

    if(meat >= hunterCost)
    {
        hunters = hunters + 1;
        meat = meat - hunterCost;
        document.getElementById("hunterHolder").innerHTML = hunters;
        document.getElementById("meatHolder").innerHTML = meat;
    }
    var newHireCost = Math.floor(10 * Math.pow(1.1, hunters));
    document.getElementById("hunterCost").innerHTML = newHireCost;
}

function hireCutter()
{
    var cutterCost = Math.floor(25 * Math.pow(1.1, cutters));

    if(meat >= cutterCost)
    {
        cutters = cutters + 1;
        meat = meat - cutterCost;
        document.getElementById("cutterHolder").innerHTML = cutters;
        document.getElementById("meatHolder").innerHTML = meat;
    }
    var newHireCost = Math.floor(25 * Math.pow(1.1, cutters));
    document.getElementById("cutterCost").innerHTML = newHireCost;
}

function hireMiner()
{
    var minerCost = Math.floor(40 * Math.pow(1.1, miners));

    if(meat >= minerCost)
    {
        miners = miners + 1;
        meat = meat - minerCost;
        document.getElementById("minerHolder").innerHTML = miners;
        document.getElementById("meatHolder").innerHTML = meat;
    }
    var newHireCost = Math.floor(40 * Math.pow(1.1, miners));
    document.getElementById("minerCost").innerHTML = newHireCost;
}

//Game Loop:
window.setInterval(function()
{
    huntMeat(hunters);
    chopWood(cutters);
    mineRock(miners);
}, 1000);

//Save Game:
function save()
{
    var save =
    {
        "resources":
        {
            "meat": meat,
            "wood": wood,
            "rock": rock,
            "iron": iron,
            "gold": gold
        },
        "collectors":
        {
            "hunters": hunters,
            "cutters": cutters,
            "miners": miners
        }
    };

    localStorage.setItem("save1", window.btoa(JSON.stringify(save)));
}

function load()
{
    var savegame = JSON.parse(window.atob(localStorage.getItem("save1")));
    
    meat = savegame.resources.meat;
    wood = savegame.resources.wood;
    rock = savegame.resources.rock;
    iron = savegame.resources.iron;
    gold = savegame.resources.gold;
    hunters = savegame.collectors.hunters;
    cutters = savegame.collectors.cutters;
    miners = savegame.collectors.miners;
}