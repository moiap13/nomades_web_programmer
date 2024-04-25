const userInput = document.querySelector("#userInput");
const taskUl = document.querySelector("ul");

const createLi = (textLi, done, id) => {
  const li = document.createElement("li");
  li.id = id || self.crypto.randomUUID();
  if (done) {
    li.classList.add("done");
  }
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    saveLisLocalStorage();
  });

  const span = document.createElement("span");
  span.textContent = textLi;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", () => {
    taskUl.removeChild(li);
    saveLisLocalStorage();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  return li;
};

const convertLisToArrayObject = () => {
  return Array.from(document.querySelectorAll("li"))
    .map((liElement) => {
      return {
        id: liElement.id,
        // task: liElement.firstChild.textContent
        task: liElement.querySelector("span").textContent,
        done: liElement.classList.contains("done"),
      };
  });

  console.log(liObjects)
  // const lis = document.querySelectorAll("li")  
  // const liObjects = []
  // lis.forEach((liElement) => {
  //   const liObj = {
  //     id: liElement.id,
  //     // task: liElement.firstChild.textContent
  //     task: liElement.querySelector("span").textContent,
  //     done: liElement.classList.contains("done")
  //   }

  //   liObjects.push(liObj)
  // })
  return liObjects
};

const taskAlreadyExists = (taskText) => {
  const lis = document.querySelectorAll("li");
  for (li of lis) {
    if (
      li.querySelector("span").textContent.toLowerCase() ===
      taskText.toLowerCase()
    )
      return true;
  }

  return false;
};

const addLi = (li) => {
  if (!taskAlreadyExists(li.querySelector("span").textContent))
    taskUl.appendChild(li);
};

const saveLisLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(convertLisToArrayObject()));
};

const addLiEvent = (liText) => {
  const li = createLi(liText);
  addLi(li);
  saveLisLocalStorage();
};

userInput.addEventListener("keypress", (e) => {
  const _this = e.target;
  if (e.key === "Enter") {
    addLiEvent(_this.value);
  }
});

document.querySelector("#addTaskBtn").addEventListener("click", () => {
  addLiEvent(userInput.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const lis = JSON.parse(localStorage.getItem("tasks")) || [];
  lis
    .filter((liObj) => !liObj.done)
    .map((liObj) => createLi(liObj.task, liObj.done, liObj.id))
    .forEach((liElement) => {
      addLi(liElement);
    });

  lis
    .filter((liObj) => liObj.done)
    .map((liObj) => createLi(liObj.task, liObj.done, liObj.id))
    .forEach((liElement) => {
      addLi(liElement);
    }); 
});
