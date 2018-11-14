
//allow player to pick a character 

// allow player to pick an enemy

//-- Move chosen player to the chosen player area of the screen  

// allow player to attack chosen enemy 
// - move chosen enemy to the defender area of the screen 
// -when player attacks enemy, the enemy's health goes


// after player attacks, enemy is allowed to attack player

$(document).ready(function() {

    //prompts for game instructions 
    alert("Welcome to the starwars RPG game");
    alert("click on a character to begin playing");
    
    //converting DOM elements 
    var maceWindu = $("#character1");
    var chosenCharacter = $("#chosenCharacter");
    var defenderCharacter = $("#defenderCharacter");
    var isClicked = false;

    /*maceWindu.click(function() {
        $( this ).detach();
        
        chosenCharacter.append(maceWindu);
        console.log(chosenCharacter);
    });*/
    
    $('.character').click(function(){
        $( this ).detach();
        
        if(isClicked){
            $(this).css("width", "100%");
            $(this).css("border", "solid black");
            $(this).css("align-content", "center");
            defenderCharacter.append(this);
            
        } 
        
        else{
            $(this).css("width", "100%");
            $(this).css("border", "solid black");
            $(this).css("align-content", "center");
            chosenCharacter.append(this);
            isClicked = true;
        }
    });
   
    






});