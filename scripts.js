const user = document.getElementById("userGithub");
const userName = document.getElementById("name");
const userBio = document.getElementById("bio");
const userImage = document.getElementsByClassName("userImage");

console.log(userImage)

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${user.textContent}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userImage[0].src = data.avatar_url;
      userImage[1].src = data.avatar_url;
      userName.textContent = data.name;
      userBio.textContent = data.bio
    });
}
getGitHubProfileInfos();
