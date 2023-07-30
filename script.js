const noteContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll('.input-box')

function showNote(){
    noteContainer.innerHTML = localStorage.getItem('notes');
}
showNote()

function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    
    // add class name to the inputBox
    inputBox.className = "input-box";
    inputBox.placeHolder = "Start typing"
    inputBox.setAttribute("contenteditable", "true");
    img.src= "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img)
})


noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        });
    }
    
})