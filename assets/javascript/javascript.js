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

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

 firstTrainName = $("#train-name-input").val().trim();
 destinantion = $("#train-dest-input").val().trim();
 firstTrainTime = $("#first-time-input").val().trim();
 frequency = $("#freq-input").val().trim();


var newTrain = {
trainName: firstTrainName,
trainDestination: tdestination,
trainTime: firstTrainTime,
trainFrequency: tfrequency,
};

//Push train information to database
database.ref().push(newTrain);




});
//Snapshottime
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
//Child added function using Snapshot and moment to show the difference between the train times
var firstTrainName = childSnapshot.val().trainName;
var tdestination = childSnapshot.val().trainDestination;
var firstTraintime = childSnapshot.val().trainTime;
var tfrequency = childSnapshot.val().trainFrequency;
//Append the destinantion, frequency, next train etc

var firstTime = 0;
varfirstTimeUpdated = moment(firstTime, "HH:mm").subtract(1, "years");

var diffTime = moment();
varnewTime = moment().diff(moment(firstTimeUpdated), "minutes");

var trainFreq;
var tRemainder = diffTime % trainFreq;

var tMinutesToTrain = trainFreq - tRemainder;

var nextTrain = moment().add(tMinutesToTrain, "minutes");
});