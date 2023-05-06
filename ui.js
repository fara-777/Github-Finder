class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const created_at = new Date(user.created_at).toLocaleDateString();
    this.profile.innerHTML = `
    <div class="container border my-4">
    <div class="row">
      <div class="col-md-3">
        <img src="${user.avatar_url}" class="img-fluid" alt="" />
        <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100"
          >View Profile</a
        >
      </div>
      <div class="col-md-9">
        <span class="badge bg-primary fs-6 mt-3">Repository: ${user.public_repos}</span>
        <span class="badge bg-secondary fs-6 mt-3">Gists: ${user.public_gists}</span>
        <span class="badge bg-success fs-6 mt-3">Following:${user.following}:</span>
        <span class="badge bg-info fs-6 mt-3">Followers:${user.followers}</span>

        <ul class="list-group my-5">
          <li class="list-group-item">About: ${user.bio}</li>
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Create: ${created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id="repos" class="container p-3"></div>`;
  }

  showRepos(repos) {
    let output = "<h3 class='fs-1'>Repositories</h3>";

    repos.forEach((repo) => {
      output += `<div class="border p-3 mb-4">
      <div class="row">
        <div class="col md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col md-6">
          <div class="badge bg-primary">Star:${repo.stargazers_count} </div>
          <div class="badge bg-secondary">Viewers: ${repo.watchers_count}</div>
          <div class="badge bg-succes">Forks: ${repo.forks_count}</div>
        </div>
      </div>
    </div>`;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, alertColor) {
    //div ekleme
    const div = document.createElement("div");
    //class ekleme
    div.className = alertColor;
    //yaziyi ekleme
    div.innerText = message;
    // gonderecegimiz elamanin yerini alma
    const outlet = document.getElementById("alert");
    // htm le gonderme
    outlet.appendChild(div);

    setTimeout(() => {
      //alerti 4 sanie sonra kaldirma
      this.clearAlert();
    }, 4000);
  }
  clearAlert() {
    // uyariyi ekrandan silme
    const currentAlert = document.querySelector(".alert");
    // ekrandaki alert
    if (currentAlert) {
      // alert varsa onu kaldir
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

//tema

const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const body = document.querySelector("body");

  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");

  if (body.classList.contains("bg-dark")) {
    themeBtn.innerText = "Light Mod";
  } else {
    themeBtn.innerText = "Dark Mod";
  }
}

export default UI;
