
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Call your custom function after successful submission
    processForm();
  });
function processForm() {
    let Username = document.getElementById("Username");
    let TeamCode = document.getElementById("TeamCode");
    let TeamName = document.getElementById("TeamName");
  
    console.log(
      `This form has a username of ${Username.value} and TeamCode of ${TeamCode.value} and TeamName of ${TeamName.value}`
    );
  
    
    Username.value = "";
    TeamCode.value = "";
    TeamName.value = "";
  }
  