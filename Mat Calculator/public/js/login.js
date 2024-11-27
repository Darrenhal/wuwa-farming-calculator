function performLogin() {
  const username = document.getElementById("username-input").value;
  const pwd = document.getElementById("pwd-input").value;
  
  fetch(`/users/${username}/${pwd}`)
    .then(res => {
      if(res.status === 404) {
        console.log("Test");
      }
    })
    .then(data => {
      
    });
  
}