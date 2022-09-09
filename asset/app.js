const addButton = document.getElementById("addBtn");
const cancelButton = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todoForm = document.getElementById("todoForm");
const todoItem = document.querySelector(".todoItem");
const deleteSpan = document.getElementById("deleteSpan");
const checkBox = document.getElementById("checkBox");


var todo = [];
var todoListView = []
var inputValues = {}

addButton.addEventListener('click', () => {
    const input = document.querySelector('#input');

    titleValidation();
    descriptionValidation();
    const isFormValid = (descriptionValidation() && titleValidation() == true)
    if (isFormValid == false) {
        return
    }

    inputValues = {
        "title": title.value,
        "description": description.value
    }

    if (inputValues) {
        addToList(inputValues);
        todoForm.reset();
    }
});



const addToList = (task) => {
    const list = document.querySelector('#list');
    const id = new Date().getMilliseconds();

    list.innerHTML += `<div class="todoItem d-flex align-items-center" id="${id}">
                             <div class="flex-shrink-0">
                                 <input type="checkbox" class="todo-input" id="checkBox_${id}" onclick="strikeText(${id})"> 
                             </div>
                             <div class="list flex-grow-1 ms-3 d-flex justify-content-between align-items-center">
                                 <ul class="ul list-unstyled m-0" id="ul_${id}">
                                     <li class="todoText" id="li">${task.title}</li>
                                     <li li class = "todoText d-flex justify-content-between align-items-center" id="li">${task.description}</li>                                
                                 </ul>

                                 <span id="delete"class = "border-0 bg-transparent" onclick="removeItem(${id})">
                                     <img src="./asset/trash-bin.png" alt="delete" width="25" height="25">
                                 </span>             
                             </div>
                          <hr>`

    console.log(list)
}


//strick-through inputValues
const strikeText = (id) => {
    console.log(id, '======id')
    const checkBox = document.getElementById("checkBox_" + id);
    console.log(checkBox, '======checkbox')
    if (checkBox.checked) {
        document.getElementById("ul_" + id).style.textDecorationLine = "line-through";
    } else {
        document.getElementById("ul_" + id).style.textDecorationLine = "none";
    }

}
debugger
//remove-item
const removeItem = (id) => {
    console.log(id)
    const element = document.getElementById(id);
    element.remove();

}

//clear todo list
function clearTodoList() {
    list.innerHTML = ""
}


//clear input field
const clearFields = () => {
    title.value = ""
    description.value = ""
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