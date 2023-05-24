function submit(){
  
  
    var user = "vanshika";
  var pass= "123";
  var get_user = document.getElementById('username').value;
  var get_pass = document.getElementById('password').value;
  if(user == get_user && pass== get_pass){
      location.href='Shop.html';
      // window.open('./login.html');  
      idLogin.innerHTML = '';  
  }
  else{
      idLogin.innerHTML = '<p>username or password is incorrect<br> Try again! </p>';  
  }
  }