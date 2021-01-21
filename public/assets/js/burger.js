$(function() {
    $("#add-burger").on("submit", function(event){
        event.preventDefault();
        console.log(event);
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),       
            devoured: 0
        };
        console.log(newBurger);
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger");
                location.reload();
            }
        );
    });
});
