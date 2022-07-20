const input = document.querySelector("input")
const addBtn = document.querySelector(".inputField button")
const ul = document.querySelector("ul")


addBtn.addEventListener("click", (e) =>{
    const text = input.value;
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = text

    li.appendChild(p)
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
});
function addDeleteBtn() {
    const deleteBtn = document.createElement('span')

    deleteBtn.textContent = "X";
    deleteBtn.className = "fa-solid fa-trash";

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement
        ul.removeChild(item);
    });
    return deleteBtn;
};