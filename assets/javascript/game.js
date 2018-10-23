var bulbasaur = {
    name: "Bulbasaur",
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    type: "grass",
    move1: "Tackle",
    move2: "Growl",     // Lowers Attack
    move3: "Razor leaf",
}
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
function initiateFight(p1, p2) {
    console.log("initiateMove function executed");
    console.log(p1);

    // Initialize p1 stats
    var p1hp = p1.hp
    var p1Attack = p1.attack;
    var p1Defense = p1.defense;
    var p1Speed = p1.speed;

    // Initialize p2 stats
    var p2hp = p2.hp;
    var p2Attack = p2.attack;
    var p2Defense = p2.defense;
    var p2Speed = p2.speed;

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

initiateFight(charmander, bulbasaur);
