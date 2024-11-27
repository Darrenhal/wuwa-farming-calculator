function performLogin() {
  const username = document.getElementById("username-input").value;
  const pwd = document.getElementById("pwd-input").value;
  
  fetch(`/users/${username}`)
    .then(res => {
      res.json().then((data) => {
        console.log(data[0]["Salt"]);
      })
    })
    .then(data => {
      let hPwd = hash.saltHashPassword(pwd);
      console.log(hPwd);
    });
  
}