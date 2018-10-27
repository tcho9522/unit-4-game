var charmander = {
    name: "Charmander",
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    type: "fire",
    move1: "Scratch",
    move2: "Growl",     // Lowers attack
    move3: "Ember",
}
var squirtle = {
    name: "Squirtle",
    hp: 44,
    attack: 48,
    defense: 65,        // Lowers defense
    speed: 43,
    type: "water",
    move1: "Tackle",
    move2: "Tailwhip",
    move3: "Water gun",
}
var bulbasaur = {
    name: "Bulbasaur",
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    type: "grass",
    move1: "Tackle",
    move2: "Mud shot",     // Lowers speed
    move3: "Razor leaf",
}


var chosenPokemon;
var starter;
$(".pokePics").on("click", function () {
    chosenPokemon = $(this).attr('id');
    if (chosenPokemon === "charmander") {
        starter = new Pokemon("Charmander", 39, 52, 43, 65, "fire", "Scratch", "Growl", "Ember");
        $("#squirtle").fadeTo(500, .2);
        $("#bulbasaur").fadeTo(500, .2);
        $(".portraitBox").html("<img id='portrait' src='assets/images/charmander.png' alt=''>");

    }
    else if (chosenPokemon === "squirtle") {
        starter = new Pokemon("Squirtle", 44, 48, 65, 43, "water", "Tackle", "Tailwhip", "Water gun");
        $("#charmander").fadeTo(500, .2);
        $("#bulbasaur").fadeTo(500, .2);
        $(".portraitBox").html("<img id='portrait' src='assets/images/squirtle.png' alt=''>")
    }
    else if (chosenPokemon === "bulbasaur") {
        starter = new Pokemon("Bulbasaur", 45, 49, 49, 45, "grass", "Tackle", "Mud shot", "Razor leaf");
        $("#charmander").fadeTo(500, .2);
        $("#squirtle").fadeTo(500, .2);
        $(".portraitBox").html("<img id='portrait' src='assets/images/bulbasaur.png' alt=''>")
    }
    $(".dialogue").text("You chose " + starter.name + "!");
    $(".button1").html(starter.move1).click(function() {
        console.log("you used " + starter.move1)
    });
    $(".button2").html(starter.move2);
    $(".button3").html(starter.move3);
    $(".button4").html("---");
    initializeFight(starter.name);
    $(".pokePics").off("click");        // So that you can only choose once
})


function Pokemon(name, hp, attack, defense, speed, type, move1, move2, move3) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.type = type;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
}
function initializeFight(starter){
    if(starter==="Charmander"){
        $(".pokePortrait").html("<img id = 'portrait' src ='assets/images/charmander.png' alt=''>")
        $("#onix").css('filter', 'blur(0px) grayscale(0%)');
        
    }
}

// function initiateFight(p1, p2) {
//     console.log("initiateMove function executed");
//     console.log(p1);

//     // Initialize p1 stats
//     var p1hp = p1.hp
//     var p1Attack = p1.attack;
//     var p1Defense = p1.defense;
//     var p1Speed = p1.speed;

//     // Initialize p2 stats
//     var p2hp = p2.hp;
//     var p2Attack = p2.attack;
//     var p2Defense = p2.defense;
//     var p2Speed = p2.speed;

//     console.log(p1hp + " " + p2hp);
//     while (p1hp > 0 && p2hp > 0) {
//         // Determine who goes first
//         if (p1Speed > p2Speed) {
//             var first = p1;
//             var second = p2;
//             console.log(first.name + "'s speed is " + first.speed + ". " + second.name + "'s speed is " + second.speed);
//             console.log(p1.name + " is faster");
//         }
//         else {
//             var first = p2;
//             var second = p1;
//         }
//         //
//         second.hp = second.hp - (first.attack - second.defense)
//         console.log(first.name + " attacked " + second.name + ". Attack did " + first.attack + ". second");
//         break;
//     }
// }

// initiateFight(charmander, bulbasaur);
