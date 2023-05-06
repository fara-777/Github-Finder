import Github from "./github.js";
import UI from "./ui.js";
// github ve ui class larinin bir ornegini olusturma
const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

//eger ara butonuna tiklanirsa
searchButton.addEventListener("click", getInput);
//eger enter tusunua tiklanirsa
searchUser.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    getInput();
  }
});

function getInput() {
  if (searchUser.value !== "") {
    // eger inputun ici doluysa api istegi at
    github.getUser(searchUser.value).then((data) => {
      // eger gelen verideki mesaj "Not Found " ise
      if (data.profile.message === "Not Found") {
        //hata mesaji goster
        ui.showAlert("User not found.", "alert alert-danger");
      } else {
        ui.showAlert("User successfully.", "alert alert-success");
        // kullaniciyi goster
        ui.showProfile(data.profile);
        // projeleri goster
        ui.showRepos(data.repos);
      }
    });
  } else {
    // eger input bossa uyari ver
    ui.showAlert("Form field cannot be empty.", "alert alert-info");
    ui.clearProfile();
  }

  searchUser.value = "";
  // temanin fonksiyonunu burda calistirdik
  changeTheme();
}
