$(document).ready(function() {

    var targetValue = 0;

    var userTotal = 0;

    var wins = 0;

    var losses = 0;

    var crystals = [
        {name: "crystal-1", value: 0, src: "https://via.placeholder.com/300"},
        {name: "crystal-2", value: 0, src: "https://via.placeholder.com/300"},
        {name: "crystal-3", value: 0, src: "https://via.placeholder.com/300"},
        {name: "crystal-4", value: 0, src: "https://via.placeholder.com/300"},
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
        $("#target-value").text(targetValue); 
        $("#current-value").text(userTotal);
        
    }

    // gets value from the clicked crystal and adds it to the userTotal
    $(document).on("click",".crystal", function(){
        userTotal += +this.value;
        if (userTotal === targetValue){
            wins ++;
            $("#wins").text(wins);
            startUp();
        }
        else if (userTotal > targetValue){
            losses ++;
            $("#losses").text(losses);
            startUp();
        }
        $("#target-value").text(targetValue); 
        $("#current-value").text(userTotal);
        
    });

    $("#wins").text(wins);
    $("#losses").text(losses);

    $(".button").on("click", function(){
        $("#instructions").slideToggle(500);
    });

});