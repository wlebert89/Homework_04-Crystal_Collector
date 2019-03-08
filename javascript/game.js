// 4 crystals are displayed as buttons
// each crystal's value will be generated randomly when the page is loaded
// a random targetValue will be generated randomly when the page is loaded
// once the random values are generated, they will remain constant until the round is over
// when the user clicks a crytal, it's value will be added to to the userTotal
// if the userTotal === targetValue, wins++ and all of the values regenerate
// if the userTotal > targetValue, loses++ and all of the values regenerate

$(document).ready(function() {

    var targetValue = 0;

    var userTotal = 0;

    var wins = 0;

    var loses = 0;

    var crystals = [
        {name: "crystal-1", value: 0, src: "https://via.placeholder.com/150"},
        {name: "crystal-2", value: 0, src: "https://via.placeholder.com/150"},
        {name: "crystal-3", value: 0, src: "https://via.placeholder.com/150"},
        {name: "crystal-4", value: 0, src: "https://via.placeholder.com/150"},
    ]

    startUp();

    function startUp(){
        userTotal = 0
        $("#crystals").empty();
        // random number generated for the targetValue
        targetValue = Math.floor(Math.random() * 101) + 19;
        // loops through the length of the crystals array
        for (var i = 0; i < crystals.length; i++){
            // random value generated for each crystal
            crystals[i].value = Math.floor(Math.random() * 11) + 1;
            // creates an image with the class .crystal for each crystal
            var image = $("<img>").addClass("crystal");
            // adds a value attribute (from the randomly generated number) to each crystal
            image.val(crystals[i].value);
            // adds the image source link attribute to each crystal
            image.attr("src", crystals[i].src);
            // adds each crystal to the page
            $("#crystals").append(image);
            console.log("Value of crystal " + (i+1) + " : " + crystals[i].value);
        }
        console.log("Target value: " + targetValue);   
    }

    // gets value from the clicked crystal and adds it to the userTotal
    $(document).on("click",".crystal", function(){
        userTotal += +this.value;
        if (userTotal === targetValue){
            alert("you win");
            wins ++;
            console.log("Wins: " + wins);
            startUp();
        }
        else if (userTotal > targetValue){
            alert("you lose");
            loses ++;
            console.log("Loses: " + loses);
            startUp();
        }
        console.log(userTotal);
    });

});