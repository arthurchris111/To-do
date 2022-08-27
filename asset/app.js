const addButton = document.getElementById("addBtn");
const cancelButton = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todoForm = document.getElementById("todoForm");
const deleteButton = document.querySelectorAll("#deleteButton");
const todoItem = document.querySelector(".todoItem");
const trash = document.querySelector(".trash")


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
    todoSelector()
    todoForm.reset();


})

trash.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.remove()
    }
})


// const isFormValid = () => {
//     if (!descriptionValidation() && !titleValidation()) {
//         return
//     }

//     inputValues = {
//         "title": title.value,
//         "description": description.value
//     }
//     todoList.push(inputValues);
//     todoSelector()

// }

const todoSelector = () => {
    if (todoList.length == 0) {
        return
    }
    const todoItemSelector = document.querySelector(".todoList")
    const todoItem = document.querySelector(".todoItem")

    todoList.map((item) => {
        todoItemSelector.innerHTML =
            ` <div class="todoItem d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <input type="checkbox"> </div>
                                <div class="flex-grow-1 ms-3">
                                    <ol class="list-unstyled m-0">
                                        <li>${item.title} </li>
                                        <li>${item.description} </li>
                                    </ol>
                                </div>
                                <div class="trash">
                                    <img src="./asset/trash-bin.png" alt="" width="25" height="25" id="deleteButton">
                                </div>
                            </div>
                             <hr/>
                            `
    })
    todoItemSelector.appendChild(todoItem)
}



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