"use strict"
 
 
class Village {
 
    constructor(name,points,position,troopsCount,troopsSpec) {
 
        this.name = name;
        this.points = points;
        this.position = position;
        this.troopsCount = troopsCount;
        this.troopsSpec = troopsSpec;
    }
 
    displayVillage = function() {
 
        console.log(`Village name : ${this.name}, Village points : ${this.points}, Position : ${this.position}`);
    }
 
    displayTroops = function() {
 
        for(let i = 0;i < this.troopsCount.length;i++) {
 
            console.log(`${this.troopsCount[i]} ${this.troopsSpec[i]}`)
        }
    }

    attack = function (enemy) {
        // Determine winner randomly, 50% chance
        const outcome = Math.random(); // ]0; 1[
        const loser = outcome > 0.5 ? this : enemy;
        
        // Looser loses 100 points
        loser.points -= 100;
        
        console.log(`${loser.name} lost the battle! Has now ${loser.points} points left`);
    };
}
 
 
 
const Village1 = new Village("ConquistaVillage",12000,"334/334",[50,120,80],["axe","sword","light calvary"]);
 
const Village2 = new Village("EnemyVillage",1170,"234/234",[60,10,120],["axe","sword","light calvary"]);
 
 
Village1.displayVillage();
Village1.displayTroops();
Village2.displayVillage();
Village2.displayTroops();

Village1.attack(Village2);