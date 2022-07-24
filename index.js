var input = document.querySelector("input")
var addBtn = document.querySelector(".inputField button")
var ul = document.querySelector("ul")
var deleteAll = document.querySelector(".deleteAll buttton")

addBtn.addEventListener("click", () =>{
    var text = input.value;
    var li = document.createElement("li")
    li.textContent = text

    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
});
 
    


deleteAll.addEventListener('click', deleteAllUl)

function addDeleteBtn() {
    const deleteBtn = document.createElement('span')
    deleteBtn.textContent = 'X',
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement
        ul.removeChild(item);
    });
    return deleteBtn;
};

function deleteAllUl() {
    ul.innerHTML = ""
}