const addButton = document.getElementById("addBtn");
const cancelButton = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todoForm = document.getElementById("todoForm");
// const deleteBtn = document.querySelectorAll(".deleteBtn");
const todoItem = document.querySelector(".todoItem");
// const ul = document.querySelector("todo-list");
const deleteSpan = document.getElementById("deleteSpan");
const checkBox = document.getElementById("checkBox");


var todoList = [];
var inputValues = {}

addBtn.addEventListener("click", (event) => {
    event.preventDefault()

    titleValidation();
    descriptionValidation();

    // isFormValid();

    const isFormValid = (descriptionValidation() && titleValidation() == true)
    if (isFormValid == false) {
        return
    }

    inputValues = {
        "title": title.value,
        "description": description.value
    }

    todoList.push(inputValues);

    todoSelector();

    todoForm.reset();
})

const todoSelector = () => {
    // if (todoList.length == 0) {
    //     return
    // }
    const todoItemSelector = document.querySelector(".todoList")
    const todoItem = document.querySelector(".todoItem")


    todoList.map((item) => {
        todoItemSelector.innerHTML =
            `<div class="todoItem d-flex align-items-center" id="demo">
                                <div class="flex-shrink-0">
                                    <input type="checkbox" class="todo-input" id="checkBox" onclick="strickText()"> 
                                </div>
                                <div class="list flex-grow-1 ms-3 d-flex justify-content-between align-items-center">
                                    <ul class = "list-unstyled m-0" id="ul">
                                        <li class="todoText">${item.title}</li>
                                        <li class="todoText class="d-flex justify-content-between align-items-center">${item.description}</li>                                
                                    </ul>
                                    
                                    <span id="deleteSpan" class="border-0 bg-transparent" onclick="removeItem()">
                                        <img src="./asset/trash-bin.png" alt="delete" width="25" height="25">
                                    </span>             
                                </div>
                             <hr>`
    })
    todoItemSelector.appendChild(todoItem)
}

//strick-through inputValues
const strickText = () => {
    var todoText = document.getElementsByClassName("todoText");
    const checkBox = document.getElementById("checkBox");

    // for (var i in todoText)
    //     todoText[i].style.textDecoration = 'line-through'
    if (checkBox.checked) {
        document.getElementById("ul").style.textDecorationLine = "line-through";
    } else {
        document.getElementById("ul").style.textDecorationLine = "none";
    }

}

//clear input field
const clearFields = () => {
    title.value = ""
    description.value = ""
}


//remove-item
const removeItem = () => {
    const element = document.getElementById("demo");
    element.remove();
}













































//validation
todoForm.addEventListener('input', (event) => {
    switch (event.target.id) {
        case 'title':
            titleValidation();
            break;
        case 'description':
            descriptionValidation();
            break;
    }
})

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const success = formField.querySelector('small');
    success.textContent = message;
}

const titleValidation = () => {
    var regex = /^[a-zA-Z\s]+$/;
    if (title.value == "") {
        showError(title, '');
    } else {
        showSuccess(title, '');
        return true;
    }
    return false
}

const descriptionValidation = () => {
    if (description.value == "") {
        showError(description, '');
    } else {
        showSuccess(description, '');
        return true;
    }
    return false
}