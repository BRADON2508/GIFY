$(document).ready(function() {
 $('.search_button').on('click', function(){
 console.log("test")
 })


// create variables
var topics = ["marvel", "dc", "magic", "stargate", "jumanji"];

// render buttons
function renderButtons() {
  $("#topics-view").empty();
  // for loop linking variables to the buttons
  for (var i = 0; i < topics.length; i++) {
  var a = $("<button>");
  a.addClass("topic");
  a.attr("data-name", topics[i])
  a.text(topics[i]);
  $("#topics-view").append(a);
  }
};
renderButtons();


$("#add-topic").on("click", function(event) {
  event.preventDefault();
  var topic =$("#topic-input").val().trim();
  topics.push(topic);
  renderButtons();
});

// code to add GIPHY api key and link database
var queryURL="https://api.giphy.com/v1/gifs/search?api_key=Z356ER5WAFzIyQ390uh1yeWvOb3Hg8f6&q=" + topics + "&limit=10&offset=2&rating=G&lang=en";

// ajax call
// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/trending?api_key=Z356ER5WAFzIyQ390uh1yeWvOb3Hg8f6",
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });

// $(document).on("click", function(){console.log("response")});

 $(".gif").on("click", function() {
   var state = $(this).attr("data-state");
   if (state === "still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "animate");
   } else {
     $(this).attr("src", $(this).attr("data-still"));
     $(this).attr("data-state", "still");
   }
 });
$(document).on("click", ".topic", function() {
// $(".topic").on("click", function() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.data);
    var gifDiv = $("<div class='topics'>");
    var imgURL = response.id;
    var image = $("<img>").attr("src", imgURL);
    gifDiv.append(image);
    $("#topics-view").prepend(gifDiv);
  });
  console.log("test")
  
 })
});