//initialize function 


function initialize () {
   
    player = Arnold("playerShip");
    a0 = Alien("alien1");
    a1 = Alien("alien2");
    a2 = Alien("alien3");
    a3 = Alien("alien4");
    a4 = Alien("alien5");
    a5 = Alien("alien6");
    // console.log(a1);
    // console.log(player);

    alienArray = [a0, a1, a2, a3, a4, a5];
    let currentAlien = alienArray[0];
    // console.log(alienArray[1]) 
    // alienArray.push[a0];
    // alienArray.push[a1];
    // alienArray.push[a2];
    // alienArray.push[a3];
    // alienArray.push[a4];
    // alienArray.push[a5];


    //disable start button once game starts
    
    // document.getElementById("startGame").disabled = true;
    refresh();
}

// let currentAlien = alienArray = [a0, a1, a2, a3, a4, a5];
let currentAlien = alienArray[0];
// console.log(currentAlien)


//function to refresh player values

function refresh () {
    document.getElementById("playerStats").innerHTML = player.hull;
    document.getElementById("alien0hull").innerHTML= a0.hull;
    document.getElementById('alien1hull').innerHTML= a1.hull;
    document.getElementById('alien2hull').innerHTML= a2.hull;
    document.getElementById('alien3hull').innerHTML= a3.hull;
    document.getElementById('alien4hull').innerHTML= a4.hull;
    document.getElementById('alien5hull').innerHTML= a5.hull;
}


// Arnolds Ship 
function Arnold (name) {
    arnold = {}
    arnold.name = name;
    arnold.hull = 20;
    arnold.firepower = 5;
    arnold.accuracy = .7; 
    return arnold;
}

let arnoldShip = new Arnold ("arnoldsShip")


//function to calculate random values for aliens
function getRandomMinMax (min, max) {
// min = Math.ceil(min);
// max = Math.ceil(max);
return Math.floor(Math.random() * (max - min + 1) + min);  
}

//create constructor for alien objects 
function Alien (name) {
    alien = {};
    alien.name = name;

//-- hull is between 3 and 6 - random
let minHull = 3;
let maxHull = 6;
alien.hull = getRandomMinMax (minHull, maxHull);
   

//-- firepower between 2 and 4

let maxFirepower = 2;
let minFirepower = 6;
alien.firepower = getRandomMinMax (minFirepower, maxFirepower);
  

//between .6 and 8
let minAccuracy = .6;
let maxAccuracy = .8;
alien.accuracy = getRandomMinMax(minAccuracy, maxAccuracy) * .8;

return alien;
}



///Player attack function 

let playerAttack = () => {
    //if alien and yourself are alive, then you can attack
    if (currentAlien.hull > 0 && player.hull > 0) {
        //declare a chance of attacking 
        let chance = Math.floor(Math.random())

        if (chance < player.accuracy) {
         currentAlien.hull -= player.firepower
        }
        
    }
    console.log(currentAlien.hull);
} 

playerAttack(); 













// attack function 
const attackFunc = () => {
    //grab the attack button 
    let attackButton = document.getElementById('attack');
    console.log(hi)

    playerAttack();
    //attack the enemy decrease enemy health by firepower
} 


