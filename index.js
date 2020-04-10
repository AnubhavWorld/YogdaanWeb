var firebaseConfig = {
    apiKey: "AIzaSyAz-0oP7rRFgoKjftdLeo7llctC0yiw19M",
    authDomain: "yogdaan-20e0a.firebaseapp.com",
    databaseURL: "https://yogdaan-20e0a.firebaseio.com",
    projectId: "yogdaan-20e0a",
    storageBucket: "yogdaan-20e0a.appspot.com",
    messagingSenderId: "989336896163",
    appId: "1:989336896163:web:be3893270f567e06f0f516",
    measurementId: "G-Y8BYPX3MHC"
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
            window.location.href = "MainPage.html";
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


  