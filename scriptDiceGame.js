

function diceRoll(sides){
   let diceResult = Math.floor(Math.random() * sides)+1;
    return diceResult;
};
let surprise;


function numKids(){
    let results;
    let areYouPlaying = prompt("are you ready to roll to see how many kids you are cleaning up after? y/n: ");
    if (areYouPlaying =="y"){
    let sides = 4;
    results = diceRoll(sides);
    console.log("You are cleaning up after " + results+ " kids.");
     }
    else{
        console.log("Thats okay.  Just come back when you want to play.");
    }
    return results;
}


function amountTime(){
    let results;
    let areYouPlaying = prompt("are you ready to roll 6 sided dice to figure out the amount of time (in 15min blocks) the kids were playing? y/n");
     if (areYouPlaying =="y"){
        let sides = 6;
        results = diceRoll(sides);
        console.log("Oh dear...they played for " + (results*15) + " minutes today");
     }
    else{
         console.log("You must be busy!  Come back when you want to play.");
    }
    return results;
    
}


function activities(){
    let results;
   let areYouPlaying = prompt("are you ready to roll 8 sided dice to find out the number of activities they did? y/n  ");
    if (areYouPlaying =="y"){
        let sides = 8;
        results = diceRoll(sides);
        console.log("They played all out with " + results + " different activities.");
}
    else{
        console.log("You must be busy.  Come back when you want to play.");
    }
    return results;
}


function randomEvent(){
    let results;
    let surprise;
    let surpriseScore;
    
    let myRandomThings = ["Dog Peed","Dog Barfed", "Cat Peed", "Cat Pooped", "Fish died", "Soup all over floor", "Plate of food dropped", "Chocolate milk on couch", "PILLOWFORT", "Making slime", "Grandmas over", "we think company is coming", "kids want allowance","super strong coffee", "new vacuum cleaner", "Your Anxious, therefore cleaning all-of-the-things", "furniture spray smells Amazing", "Candles can be motivating", "its just flowing - Marie Kondo Style", "you just Want to clean today"];
        
        
    console.log("Wait...theres more!  Here are the random events that could happen...some will add 30 pnts and some will subtract 30 pnts.  Good Luck:");
    console.log(myRandomThings);
    let areYouPlaying = prompt("are you ready to roll the 20 sided dice to discover your random event?  y/n ");

    if (areYouPlaying =="y"){
        let sides = 20;
         results = diceRoll(sides);
        
        
        surprise = myRandomThings[results];
        console.log ("You rolled to discover your surprise and here it is : " + surprise + " !");
        if(results<10){
            console.log("and its score is plus 30 for the Dirty Team...booo!!");
            console.log ("New Trashed score = " + (amountOfTrashed + 30));
        }
        else{
            console.log("and its score is plus 30 for the Clean Team - yayyyyy!!");
            console.log ("New Clean score = " + (cleanItUp + 30));
        }
    }
 else{
        console.log("No worries.  Come back when you want to play.");
    }
    return surprise;
}


function youSlay(){
    
    let results;
    let areYouPlaying = prompt("Are you ready to roll the 12 sided dice to discover how well you cleaned?  y/n  ");
    if (areYouPlaying =="y"){
        let sides = 12;
        results = diceRoll(sides);
        if(results <= 6){
            console.log("Hmmm...you must be tired!  Your Tidy Up game is weak today!  No offense.")
        }
        else{
            console.log("Good Job!  Someone had her coffee today I guess!")
        }
    }
    else{
        console.log("Hey maybe next time.  Come back when you want to play.");
    } 
    return results;
}


function kidsSlay(){
    let results;
    let areYouPlaying = prompt("are you ready to roll the 10 sided dice to find out how well the kids cleaned?  y/n ");
    if (areYouPlaying =="y"){
        let sides = 10;
        results = diceRoll(sides);
        console.log('The kids cleaned for ' + results + '  minutes today')
    }
    else{
        console.log("No worries.  Come back when you want to play."); 
    }   
    return results;
}

let amountOfTrashed = (numKids()*activities())*amountTime();


let cleanItUp = (youSlay()*(1.5))*kidsSlay();



console.log("The amount of Disaster has a score of: " + amountOfTrashed);



console.log("Your collective \'clean it up\' score is: "+ cleanItUp);

console.log(" Just goes to show...you cannot plan for everything.  For example: " + randomEvent());





