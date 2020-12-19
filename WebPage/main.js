var firebaseConfig = {
    apiKey: "AIzaSyD7EO9E3eyQJhWy6m9XYr_D4p9nZBJvAK8",
    authDomain: "iot-1-35d00.firebaseapp.com",
    databaseURL: "https://iot-1-35d00.firebaseio.com",
    projectId: "iot-1-35d00",
    storageBucket: "iot-1-35d00.appspot.com",
    messagingSenderId: "76961788315",
    appId: "1:76961788315:web:de81b9bd3828037d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 let u1 = firebase.database().ref('User1').child('UserName')
 let u2 = firebase.database().ref('User2').child('UserName')
 let u1_req=""
 let u2_req=""
 function login()
 {
   	 let user_name=document.getElementById('uname').value
     let pass=document.getElementById('pass').value
     u1.on("value", function(snapshot) 
   	  { u1_req=snapshot.val();  });
     u2.on("value", function(snapshot) 
      { u2_req=snapshot.val();  });
      if(user_name==u1_req)
       {
         let p1 = firebase.database().ref('User1').child('Password')
         p1.on("value",function(snapshot)
          {
          		console.log(snapshot.val())
              if(pass==snapshot.val())
              {
                console.log("ACCESS GRANTED");
                window.location.assign("Main_Page.html")
              }   
              else
              {
                  window.alert("INCORRECT USERNAME OR PASSWORD");
              }
          });
      }
      else if(user_name==u2_req)
       {
         let p2 = firebase.database().ref('User2').child('Password')
         p2.on("value",function(snapshot)
          {
              if(pass==snapshot.val())
              {
                console.log("ACCESS GRANTED");
                window.location.assign("project.html")
              }   
              else
              {
                  window.alert("INCORRECT USERNAME OR PASSWORD");
              }
          });
        }
      else
      {
        window.alert("INCORRECT USERNAME OR PASSWORD");
      }
      
 }