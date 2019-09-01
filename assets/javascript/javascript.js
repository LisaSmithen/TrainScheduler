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
var firstTrainName;
var destination;
var firstTrainTime;
var frequency = 0;




//Add train info onclick function to store and retrieve train data


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

 firstTrainName = $("#train-name-input").val().trim();
 destinantion = $("#train-dest-input").val().trim();
 firstTrainTime = $("#first-time-input").val().trim();
 frequency = $("#freq-input").val().val().trim();




//Push train information to database
var newTrain = {
    firstTrainName: firstTrainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
};

database.ref().push(newTrain);


//Snapshottime

//Child added function using Snapshot and moment to show the difference between the train times

//Append the destinantion, frequency, next train etc
});
