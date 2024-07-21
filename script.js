var input = document.getElementById("enter");
var button = document.getElementById("submit");
var ul = document.querySelector("ul");

function createListElement() {
    var taskText = input.value; 

    
    var li1 = document.createElement("li");

    if (taskText.trim() !== "") {
        li1.textContent = taskText; 


var icon =document.createElement("i")
    icon.classList.add("fas", "fa-times" , "delete-icon");

    li1.appendChild(icon);
    icon.addEventListener("click" , function(){
li1.remove();

    })

        ul.appendChild(li1);
        input.value = "";
    }
}



button.addEventListener("click", function() {
    createListElement();
});


input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { 
        createListElement();
    }
});
