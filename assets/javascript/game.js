var currentOpp = ["onix", "starmie", "raichu", "vileplume", "weezing", "alakazam", "arcanine", "nidoking"];
var oppIndex = 0;
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
    $(".button1").html(starter.moves[0]).click(function () {
        console.log("you used " + starter.moves[0])
    });
    $(".button2").html(starter.moves[1]).click(function () {
        console.log("you used " + starter.moves[1]);
    });
    $(".button3").html(starter.moves[2]).click(function () {
        console.log("you used " + starter.moves[2]);
    });
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
    this.moves = [move1, move2, move3]

}
function initializeFight(starter) {
    var opponent;
    if (starter === "Charmander") {
        $(".pokePortrait").html("<img id = 'portrait' src ='assets/images/charmander.png' alt=''>")
    }
    else if (starter === "Squirtle") {
        $(".pokePortrait").html("<img id = 'portrait' src ='assets/images/squirtle.png' alt=''>")
    }
    else if (starter === "Bulbasaur") {
        $(".pokePortrait").html("<img id = 'portrait' src ='assets/images/bulbasaur.png' alt=''>")
    }
    switch (currentOpp[oppIndex]) {
        case "onix":
            opponent = new Pokemon("Onix", 50, 50, 50, 50, "rock", "Tackle", "Tailwhip", "Rock throw");
            $("#onix").css('filter', 'blur(0px) grayscale(0%)');
            break;
        case "starmie":

            break;
        case "raichu":

            break;
        case "vileplume":

            break;
        case "weezing":

            break;
        case "alakazam":

            break;
        case "arcanine":

            break;
        case "nidoking":

            break;
    }
    promptMove(opponent);

}


function promptMove(opponent) {
    console.log("initiateMove function executed");
    // var opponent = new Pokemon(eijraewoijroaewijraeroeuhrwaeiurhaewuira)
    // Initialize p1 stats
    var p1=starter;
    var p1hp = starter.hp
    var p1Attack = starter.attack;
    var p1Defense = starter.defense;
    var p1Speed = starter.speed;

    // Initialize p2 stats
    var p2 = opponent
    var p2hp = opponent.hp;
    var p2Attack = opponent.attack;
    var p2Defense = opponent.defense;
    var p2Speed = opponent.speed;

    console.log(p1hp + " " + p2hp);
    while (p1hp > 0 && p2hp > 0) {
        // Determine who goes first
        if (p1Speed > p2Speed) {
            var first = p1;
            var second = p2;
            console.log(first.name + "'s speed is " + first.speed + ". " + second.name + "'s speed is " + second.speed);
            console.log(p1.name + " is faster");
        }
        else {
            var first = p2;
            var second = p1;
        }
        //
        second.hp = second.hp - (first.attack - second.defense)
        console.log(first.name + " attacked " + second.name + ". Attack did " + first.attack + ". second");
        break;
    }
}
// ITERATE THE currentOpp array!!!!!