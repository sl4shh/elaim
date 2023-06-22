let changelog = document.querySelector("#changelog");
let changelogCommits = document.querySelector("#changelog-commits");
let overlay = document.querySelector("#overlay");

/*fetch(
  "https://gitlab.cri.epita.fr/api/v4/projects/13243/repository/commits?ref_name=dev",
  {
    method: "GET",
    headers: {
      "PRIVATE-TOKEN": "no more token",
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data
      .filter((e) => !e.title.toUpperCase().includes("MERGE"))
      .forEach((el) => {
        changelogCommits.innerHTML += `
      <div class="teamcard">
        <h1>${el.title}</h1>
        <p>${el.description ?? "-"}</p>
        <i>${el.author_name
          .replace("sl4sh", "Estéban CHARVIN")
          .replace("irene1.lin", "Irène LIN")
          .replace("Akame Shibataro", "Maelys ESNAULT")
          .replace(".", " ")} le
          ${el.created_at.substring(0, 10)}
        </i>
      </div>
      `;
      });
  })
  .catch((err) => console.error(err));*/

let openDialog = (dialogId) => {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.open = false;
  });
  document.getElementById(dialogId).open = true;
  overlay.style.display = "block";
};
let closeDialog = () => {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.open = false;
  });
  overlay.style.display = "none";
};
document
  .querySelectorAll(".closebtn")
  .forEach((btn) => btn.addEventListener("click", closeDialog));

closeDialog();
