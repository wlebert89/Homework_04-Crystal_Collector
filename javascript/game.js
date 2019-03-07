// 4 crystals are displayed as buttons
// each crystal's value will be generated randomly when the page is loaded
// a random targetValue will be generated randomly when the page is loaded
// once the random values are generated, they will remain constant until the round is over
// when the user clicks a crytal, it's value will be added to to the userTotal
// if the userTotal === targetValue, wins++ and all of the values regenerate
// if the userTotal > targetValue, loses++ and all of the values regenerate

window.onload = (function(){

    var targetValue;

    var crystalValue;

    var userTotal;

    var wins = 0;

    var loses = 0;

    var crystals = [
        {name: "crystal-1", value: 0, img: "img-1"},
        {name: "crystal-2", value: 0, img: "img-2"},
        {name: "crystal-3", value: 0, img: "img-3"},
        {name: "crystal-4", value: 0, img: "img-4"},
    ]

    function startUp(){
        // random number generated for the targetValue
        targetValue = Math.floor(Math.random() * 101) + 19;
        // loops through the length of the crystals array
        for (var i = 0; i < crystals.length; i++){
            // random value generated for each crystal
            crystals[i].value = Math.floor(Math.random() * 11) + 1;
            // creates an image with the class .crystal for each crystal
            var image = $("<img class=crystal>");
            // adds a value (from the randomly generated number) to each crystal
            image.attr("value", crystals[i].value);
            // adds each crystal to the page
            $("#crystals").append(image);
            console.log(crystals[i].value);
        }
        
    }

    startUp();

    // gets value from the clicked crystal and adds it to the userTotal
    $(".crystal").on("click", function(){
        userTotal += this.value;
    })

});