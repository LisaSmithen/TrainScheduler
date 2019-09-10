$(document).ready(function(){
//Attach Firebase vars config thing
var firebaseConfig = {
    apiKey: "AIzaSyCwGmczVpOv_WOMM13odPxw5VSl92KnR2c",
    authDomain: "trainjourney-87e60.firebaseapp.com",
    databaseURL: "https://trainjourney-87e60.firebaseio.com",
    projectId: "trainjourney-87e60",
    storageBucket: "",
    messagingSenderId: "1069787585056",
    appId: "1:1069787585056:web:89599949e4b2871d"
  };


//Initialize Firebase app
firebase.initializeApp(firebaseConfig);
//Create a var database
var database = firebase.database();
//Create the onclick event vars and grab user info function

    var name;
    var destination;
    var firstTrainTime;
    var frequency = 0;

$("#add-train-btn").on("click", function() {
    event.preventDefault();
 name = $("#train-name").val().trim();
 destinantion = $("#train-dest").val().trim();
 firstTrainTime = $("#first-time").val().trim();
 frequency = $("#freq").val().trim();

 
//Push train information to database
database.ref().push({

name: name,
destination: destination,
firstTrainTime: firstTrainTime,
frequency: frequency,
dateAdded: firebase.database.ServerValue.TIMESTAMP
});

$("form")[0].reset();
});
//Snapshottime
//database.ref().orderByChild("dataAdded").limitToLast(1).on("child_added"), function(snapshat) {
database.ref().on("child_added", function(childSnapshot) {
   var nextArr;
    var minAway;
//Child added function using Snapshot and moment to show the difference between the train times
var firstTrainNew = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");
var diffTime = moment().diff(moment(firstTrainNew), "minutes");
var remainder = diffTime % childSnapshot.val().frequency;
var minAway = childSnapshot.val().frequency - remainder;
var nextTrain = moment().add(minAway, "minutes");
nextTrain = moment(nextTrain).format("hh:mm");

//Append the destinantion, frequency, next train etc

$("#add-row").append("<tr><td>" + childSnapshot.val().name +
"</td><td>" + childSnapshot.val().destination +
"</td><td>" + childSnapshot.val().frequency +
"</td><td>" + nextTrain + 
"</td><td>" + minutesAway + "</td></tr>");
});



database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
$("#name-display").html(snapshot.val().name);
$("#email-display").html(snapshot.val().email);
$("#age-display").html(snapshot.val().age);
$("#comment-display").html(snapshot.val().comment);
});
});