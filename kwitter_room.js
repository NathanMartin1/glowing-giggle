document.getElementById("user_name").innerHTML = "Welcome, " + localStorage.getItem("user_name", user_name) +  "!";

var firebaseConfig = {
      apiKey: "AIzaSyAh--7dPZDnDrJffvfL1XkRZ9dPkTbr8Xk",
      authDomain: "kwitter-xy.firebaseapp.com",
      databaseURL: "https://kwitter-xy-default-rtdb.firebaseio.com",
      projectId: "kwitter-xy",
      storageBucket: "kwitter-xy.appspot.com",
      messagingSenderId: "65446124480",
      appId: "1:65446124480:web:fc59ed32456f8dfcda0625"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = document.getElementById("user_name").value;
console.log(user_name);
fl = user_name.charAt(0);
console.log(f1);
user_name.replace(fl, char.toUpperCase());
console.log(user_name);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id =" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html";   
}
