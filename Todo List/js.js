const taskinput = document.querySelector(".taskinput");
const tasksubmit = document.querySelector(".tasksubmit");
const section = document.querySelector("section");

tasksubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!taskinput.value) {
    alert("LÜTFEN NOT GİRİNİZ");
  } else {
    let tasksdiv = document.createElement("div");
    section.appendChild(tasksdiv);
    tasksdiv.classList.add("tasks");

    let taskdiv = document.createElement("div");
    tasksdiv.appendChild(taskdiv);
    taskdiv.classList.add("task");

    let contentdiv = document.createElement("div");
    taskdiv.appendChild(contentdiv);
    contentdiv.classList.add("content");

    var input = document.createElement("input");
    contentdiv.appendChild(input);
    input.classList.add("text");
    input.type = "text";
    input.value = taskinput.value;
    input.setAttribute("readOnly", true);

    let actionsdiv = document.createElement("div");
    taskdiv.appendChild(actionsdiv);
    actionsdiv.classList.add("actions");

    let editbutton = document.createElement("button");
    actionsdiv.appendChild(editbutton);
    editbutton.classList.add("edit");
    editbutton.innerHTML = "Düzenle";

    let deletebutton = document.createElement("button");
    actionsdiv.appendChild(deletebutton);
    deletebutton.classList.add("delete");
    deletebutton.innerHTML = "Sil";
    taskinput.value = "";

    editbutton.addEventListener("click", () => {
      if (editbutton.innerHTML == "Düzenle") {
        input.readOnly = false;
        input.style.color = "white";
        editbutton.innerHTML = "Kaydet";
      } else {
        input.readOnly = true;
        input.style.color = "black";
        editbutton.innerHTML = "Düzenle";
      }
    });

    deletebutton.addEventListener("click", () => {
      tasksdiv.remove();
    });
  }
});
