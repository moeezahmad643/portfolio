let url = window.location.host;
let protocol = window.location.protocol;

fetch("Data/project.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((project) => {
      let projectCard = document.createElement("div");
      projectCard.setAttribute("class", "card");
      projectCard.innerHTML = `
      <img src="project-img/${project.icon}" alt="">
        <h3>${project.title}</h3>
        <div>
        <a  href="${protocol}//${url}/projects/${project.view}" id="view">View</a>
        <a  href="${project.git}" id="github">GitHub</a>
        </div>`;

      document.getElementById("project-bottom").appendChild(projectCard);
    });
  });
