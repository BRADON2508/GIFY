// create variables
var topics=["marvel", "dc", "magic", "stargate", "jumanji"];

// for loop linking variables to the buttons
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button>'+ topics.text + '</button>')
    buttons.append('topics');
};

// code to create the input box and submit button
$form.append('<input type="button" value="button">')


// code to append input to new button


// code to add GIFY api key and link database
var queryURL="https://api.giphy.com/v1/gifs/trending?api_key=Z356ER5WAFzIyQ390uh1yeWvOb3Hg8f6";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

// code to


// code to
//  $.ajax({
//     url: "https://api.giphy.com/v1/gifs/trending?api_key=Z356ER5WAFzIyQ390uh1yeWvOb3Hg8f6",
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });

$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

$(document).on("click", function(){console.log("response")});