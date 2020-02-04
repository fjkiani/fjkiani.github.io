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
    // console.log(alienArray[1])
    // let currentAlien = alienArray[0];
    i = 0;
   
    refresh();


}

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
    console.log(`${player.hull} is the starting health for player **** ${alienArray[i].hull} is the starting health for alien *************`)
    
    while (alienArray[i].hull > 0 && player.hull > 0) {
        //declare a chance of attacking 
        let chance = Math.floor(Math.random())

        if (player.accuracy > chance) {
         alienArray[i].hull -= player.firepower
         console.log(`You hit the Alien! ${alienArray[i].hull} is their health`);
        }  
            if (alienArray[i].hull <= 0) {
                i++;
            }

        else {
            console.log("you missed!")
        }

        if (alienArray[i].accuracy > chance) {
            player.hull -= alienArray[i].firepower
            // console.log("Enemy Hit you!!!");
            console.log(`Enemy Hit you!!${player.hull} is your health now! ${alienArray[i].hull} is the aliens health`)
           }
           else {
               console.log("Enemy Missed");
           } 
    
    } 

} 


let attackFunc = () => {
    document.getElementById("attack");
    playerAttack(); 

}



