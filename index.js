var firebaseConfig = {
    apiKey: "AIzaSyBYBjuyi4QRtxsr7kIG2GcdAPcusfkS2bw",
    authDomain: "yogdaan-63e49.firebaseapp.com",
    databaseURL: "https://yogdaan-63e49.firebaseio.com",
    projectId: "yogdaan-63e49",
    storageBucket: "yogdaan-63e49.appspot.com",
    messagingSenderId: "1053095630027",
    appId: "1:1053095630027:web:e1f38a1e40a3ef56b5f74e",
    measurementId: "G-LQK2Z9C6BN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL
  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();
      console.log(email,password,"----");
      if(email != "" && password != "")
    {
        console.log("inside");
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
            console.log('hit finally');
            window.location.href = "Yogdaan/yogdaan.html";
        }).catch(function(error)
        {
            console.log('hit hahah');
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
        });
            console.log("present");
    }
    else
    {
        window.alert("Form is incomplete . Please fill out all fields.");
    }
  });
  
  $("#btn-resetPassword").click(function()
  {
      var auth = firebase.auth();
      var email = $("#email").val();
      
      if(email !="")
      {
          auth.sendPasswordResetEmail(email).then(function()
          {
             window.alert("Email has been sent to you,Please check and verify.");
          }).catch(function(error)
        {
           var errorCode = error.code;
           var errorMessage = error.message;

           console.log(errorCode);
           console.log(errorMessage);

           window.alert("Message : " + errorMessage);
           
           
        });
      }
      else
      {
          window.alert("Please write your username first.");
      }
  });



  $("#btn-logout").click(function()
  {
     firebase.auth().signOut();  
  });


  