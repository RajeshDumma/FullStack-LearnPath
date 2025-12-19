const user =[
    {id:1, name : "a", active : false},
    {id:2, name : "b", active:false}
    
];

document.getElementById("active_user").addEventListener("click", () => {
  for (const u of user) {
    if (u.id === 2) {
      u.active = true;
      alert("User " + u.id + " is active");
    }
  }
  console.log(user);
});

