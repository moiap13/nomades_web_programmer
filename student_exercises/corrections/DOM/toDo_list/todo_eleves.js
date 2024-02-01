const BTN_ADD = document.querySelector("#enter")
const USER_INPUT = document.querySelector("#userInput")
const LIST_ITEM_UL = document.querySelector(".listItems ul")
const localStorageLiKey = "liItems"

let counter = 0

const addLi = (taskValue, done) => {
  const liId = `li${counter}`
  const li = document.createElement("li")
  if(done === "done")
    li.classList.add(done)
  li.id = liId// li.id = "li" + str(counter)
  li.addEventListener("click", e => {
    e.target.classList.toggle("done")
    saveLis()
  })

  const spanLi = document.createElement("span")
  const liTxt = document.createTextNode(taskValue)

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")
  deleteButton.textContent = "X"
  deleteButton.setAttribute("data-li_id", liId)
  deleteButton.addEventListener("click", e => {
    const _this = e.target
    // e.target.parentElement.remove()
    const li_id = e.target.getAttribute("data-li_id")
    document.querySelector(`#${li_id}`).remove()
    saveLis()
  })

  spanLi.appendChild(liTxt)
  li.append(spanLi, deleteButton)
  LIST_ITEM_UL.appendChild(li)
  counter++
  saveLis()
}

USER_INPUT.addEventListener("keypress", e => {
	let _this = e.target
	if (e.key === "Enter") {
    if(_this.value === "clear")
      localStorage.clear()
    else
      addLi(_this.value, "")
	}
})

BTN_ADD.addEventListener("click", e => {
  addLi(USER_INPUT.value, "")
})

const saveLis = _ => {
  // const lis = document.querySelectorAll("li")
  const lis = LIST_ITEM_UL.children
  const liSavedMap = Array.from(lis).map(li => {
    return {
      liValue:li.querySelector("span").textContent,
      done: li.classList.contains("done")
    }
  })

  localStorage.setItem(localStorageLiKey, JSON.stringify(liSavedMap))
}

if(localStorage.getItem(localStorageLiKey)){
  const lisStr = localStorage.getItem(localStorageLiKey)
  JSON.parse(lisStr).forEach(liObj => addLi(liObj.liValue, (liObj.done ? "done" : "")))
}