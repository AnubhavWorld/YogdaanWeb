var firebaseConfig = {
    apiKey: "AIzaSyCd0z-5eh279APTqSHU7t-LJhdndI_ZN-o",
    authDomain: "fir-webapp-dfdb2.firebaseapp.com",
    databaseURL: "https://fir-webapp-dfdb2.firebaseio.com",
    projectId: "fir-webapp-dfdb2",
    storageBucket: "fir-webapp-dfdb2.appspot.com",
    messagingSenderId: "72384337559",
    appId: "1:72384337559:web:3ebbd3d56ff937df57fbd2",
    measurementId: "G-PX918SC5TP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL

  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && passord != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(functiom(error)
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
        window.alert("Form is incomplete . Please fill out all fields.");
    }
  });


  $("#btn-signup").click(function()
  {
      var Work = $("#Field of Work").val();
      var Username = $("#Username").val();
      var passord = $("#password").val();
      var cPassword = $("#confirmPassword").val();
      var name = $("#Name").val();
      var phone number  = $("#Phone number").val();
      var City  = $("#City").val();
      var State  = $("#State").val();


      if(Work != "" && Username != "" && password !="" && cPassword !="" && name !="" && phone number !="" && City !="" && State !="")
    {
        if (password==cPassword)
        {
            var result = firebase.auth().createUserWithUsernamePasswordAndPhonenumber(Username, password,phone number);

        result.catch(functiom(error)
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
            window.alert("Password do not match with the Confirm Password"); 
        }
    }
    else
    {
        window.alert("Form is incomplete . Please fill out all fields.");
    }
  });
  
  $("#btn-resetPassword").click(function()
  {
      var auth = firebase.auth();
      var Username = $("#Username").val();
      
      if(Username !="")
      {
          auth.sendPasswordResetUsername(Username).then(function()
          {
             window.alert("Username has been sent to you,Please check and verify.");
          });
        .catch(function(error)
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


  