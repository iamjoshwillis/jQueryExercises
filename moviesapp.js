
$("#add-movie").on("submit", function(e) {
    e.preventDefault();

    let title = $("#title").val();
    let rating = $("#rating").val();

    let newMovie = (`${title}, ${rating}`)

    let removeButton = $('<button/>').addClass('removeButton').text('REMOVE');

    $("ul").append("<li>" +newMovie+ "</li>");
    $("li").append(removeButton);
    $("#add-movie").trigger("reset");
})

$("#movie-list").on('click', ".removeButton", function(e) {
    $(e.target).closest("li").remove();
})

