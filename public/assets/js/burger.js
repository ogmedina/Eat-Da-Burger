$(function() {
    //function to eat burger and change the state of devoured
    $(".devour-burger").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        //Send the new PUT request for Burger Eating
        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("changed devoured state to", newDevour);
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //function to add burger to db
    $("#add-burger").on("submit", function(event){
        event.preventDefault();
        console.log(event);
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),       
            devoured: 0
        };
        console.log(newBurger);
        //Send the new POST request for the new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger");
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
