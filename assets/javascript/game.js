
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
    var pickedHeroCharacter;
    var pickedDefCharacter;
    var chosenCharacter = $("#chosenCharacter");
    var defenderCharacter = $("#defenderCharacter");
    var isClicked = false;
    var pickChar = true;

    //Declaring character objects
    var characters = {
    
        1: {
            name: "Mace Windu",
            health: 100,
            attackPower: 30,
            image:"assets/images/maceWindu.jpg",
        },
        2: {
            name: "Storm Troopers",
            health: 100,
            attackPower: 30,
            image:"assets/images/stormTroops.jpg",
        },
        3: {
            name: "Obi Wan Kanobi",
            health: 100,
            attackPower: 30,
            image:"assets/images/obiWan.jpg",
        },
        4: {
            name: "Darth Vader",
            health: 100,
            attackPower: 30,
            image:"assets/images/darthVader.jpg",
        },
        5:  {
            name: "Luke Skywalker",
            health: 100,
            attackPower: 30,
            image:"assets/images/lukeSkywalker.jpg" ,
        },
        6:  {
            name: "Kylo Ren",
            health: 100,
            attackPower: 30,
            image:"assets/images/kyloRen.jpg",
        },
        7:  {
            name: "Yoda",
            health: 100,
            attackPower: 30,
            image:"assets/images/yoda.jpg",
        },
        8:  {
            name: "Darth Sidious",
            health: 100,
            attackPower: 30,
            image:"assets/images/darthSidious.jpg",
        },
        9:  {
            name: "Rey",
            health: 100,
            attackPower: 30,
            image:"assets/images/rey.jpg",
        },
        10: {
            name: "Asajj Ventress",
            health: 100,
            attackPower: 30,
            image:"assets/images/asajjVentress.jpg",
        },
        11: {
            name: "Asoka Tano",
            health: 100,
            attackPower: 30,
            image:"assets/images/Ahsoka.jpg",
        },
        12: {
            name: "Darth Maul",
            health: 100,
            attackPower: 30,
            image: "assets/images/darthMaul.jpg"
        }
    }

    //assigning object variables and attributes
        //assigning names
        $("#char1").append(characters[1].name);
        $("#char2").append(characters[2].name);
        $("#char3").append(characters[3].name);
        $("#char4").append(characters[4].name);
        $("#char5").append(characters[5].name);
        $("#char6").append(characters[6].name);
        $("#char7").append(characters[7].name);
        $("#char8").append(characters[8].name);
        $("#char9").append(characters[9].name);
        $("#char10").append(characters[10].name);
        $("#char11").append(characters[11].name);
        $("#char12").append(characters[12].name);

        //assigning health values
        $("#health1").append(characters[1].health);
        $("#health2").append(characters[2].health);
        $("#health3").append(characters[3].health);
        $("#health4").append(characters[4].health);
        $("#health5").append(characters[5].health);
        $("#health6").append(characters[6].health);
        $("#health7").append(characters[7].health);
        $("#health8").append(characters[8].health);
        $("#health9").append(characters[9].health);
        $("#health10").append(characters[10].health);
        $("#health11").append(characters[11].health);
        $("#health12").append(characters[12].health);

        //assigning attack power charPower1
        $("#charPower1").append(characters[1].attackPower);
        $("#charPower2").append(characters[2].attackPower);
        $("#charPower3").append(characters[3].attackPower);
        $("#charPower4").append(characters[4].attackPower);
        $("#charPower5").append(characters[5].attackPower);
        $("#charPower6").append(characters[6].attackPower);
        $("#charPower7").append(characters[7].attackPower);
        $("#charPower8").append(characters[8].attackPower);
        $("#charPower9").append(characters[9].attackPower);
        $("#charPower10").append(characters[10].attackPower);
        $("#charPower11").append(characters[11].attackPower);
        $("#charPower12").append(characters[12].attackPower);





    // calling functions 
    pickCharacter();
    
function pickCharacter(){
    var pickedHeroCharacter;
    var pickedDefCharacter; 
    var HeroName;
    var HeroHealth;
    var Heroattack;
    var HeroImage;
    var defName;
    var defHealth;
    var defattack;
    var defImage;
    var isClicked = true;
    var isClicked2 = true;
    

        $('.heroCharacter').click(function(){
           
                if(isClicked){
                    $( this ).detach();
                    $(this).css("width", "77%");
                    //$(this).css("height", "auto");
                    $(this).css("border", "solid goldenrod 5px");
                    $(this).css("float", "right");
                    pickedHeroCharacter = $(this).attr('id');
                    HeroName = characters[pickedHeroCharacter].name;
                    HeroHealth = characters[pickedHeroCharacter].health;
                    Heroattack = characters[pickedHeroCharacter].attackPower;
                    var src = characters[pickedHeroCharacter].image
                    HeroImage = $("#chosenImg").attr('src', src); 
                    console.log(src);
                    
                    
                    //appending the chosen charater to the DOM
                    $("#chosenImg").append(HeroImage);
                    $("#charChosen").append("Character: "+HeroName);
                    $("#healthChosen").append("Health: "+HeroHealth);
                    $("#charPowerChosen").append("Attack Power: "+Heroattack);
                    console.log("chosen hero is: "+HeroName);
                    isClicked = false;
                    
                }
                //return [pickedHeroCharacter, HeroName, HeroHealth, Heroattack];
        });
        console.log("this your characters power value before hitcounter function:  "+Heroattack);
        $('.villanCharacter').click(function(){
            
               
                if(isClicked2){
                        $( this ).detach(); 
                        $(this).css("width", "77%");
                        $(this).css("border", "solid goldenrod 5px");
                        $(this).css("float", "left");
                        pickedDefCharacter = $(this).attr('id');
                        defName = characters[pickedDefCharacter].name;
                        defHealth = characters[pickedDefCharacter].health;
                        defattack = characters[pickedDefCharacter].attackPower;
                        defattack = characters[pickedDefCharacter].attackPower;

                        console.log("chosen Defender is: "+defName);
                        defenderCharacter.append(this);

                        isClicked2 = false;
                }
                //return [pickedDefCharacter, defName, defHealth, defattack];
            });
            
        hitCounter();

        function hitCounter(){
            $( "#attackButton" ).click(function(){
                console.log("this is the opponents current health value "+ defHealth);
                defHealth = defHealth - Heroattack;
                console.log("this your characters power value "+Heroattack);
                console.log("this is the opponents health value "+defHealth);

                //I have to send the new information to the DOM, but how do I attach it there:
                //      1. How do I attach the health 

            });


}



}
   
    






});




//////////////WORKING CODE FOR CHOSING CHARACTERS////////////////
/*function pickCharacter(){
    
    if (pickChar === true){
        $('.character').click(function(){
        $( this ).detach();
        
        if(isClicked){
            $(this).css("width", "80%");
            $(this).css("border", "solid goldenrod 5px");
            $(this).css("float", "left");
            var pickedDefCharacter = $(this).attr('id');
            var defName = characters[pickedDefCharacter].name;
            var defHealth = characters[pickedDefCharacter].health;
            var defattack = characters[pickedDefCharacter].attackPower;
            console.log("chosen Defender is: "+defName);
            $(".health").append(defHealth);
            defenderCharacter.append(this);
        } 
        
        else{
            $(this).css("width", "80%");
            $(this).css("border", "solid goldenrod 5px");
            $(this).css("float", "right");
            var pickedHeroCharacter = $(this).attr('id');
            var HeroName = characters[pickedHeroCharacter].name;
            var HeroHealth = characters[pickedHeroCharacter].health;
            var Heroattack = characters[pickedHeroCharacter].attackPower;
            console.log("chosen hero is: "+HeroName);
            $(".health").append(HeroHealth);

            chosenCharacter.append(this);
            isClicked = true;
            }
        });
    }
}*/