function displayProjectMainContent(){
    const titleModal = document.getElementById("dialog-form");
    const titleModalSubmit = document.getElementById("form-btn-submit");
    const titleModalClose = document.getElementById("form-btn-close");

    const projectListForm = document.getElementById("project-title-form");
    let projectTitleInput = document.getElementById("project-title-input");
    let projectDescInput = document.getElementById("project-list-desc-input");
    let projectDatecInput = document.getElementById("project-list-dueDate-input");
    let projectPriorityInput = document.getElementById("project-list-priority-select");

    const projectTable = document.getElementById("project-table");
    const projectTableAddBtn = document.getElementById("project-table-addButton");

    const projectAddModal = document.getElementById("add-to-project-dialog");
    const projectAddForm = document.getElementById("add-to-project-form");
    const projectAddFormSubmit = document.getElementById("add-to-project-form-submit");
    const projectAddFormClose = document.getElementById("add-to-project-btn-close");

    const newProjBtn = document.getElementById("create-new-list-btn");
    const projectListArray = [];
    console.log(projectListArray);


    (function onSubmitProjectForm(){
        projectListForm.addEventListener("submit", (e) => {
            addProjectToArray();
            displayProjectInfo();
            projectTable.style.display = "table";
            console.log(projectListArray);
            e.preventDefault();
        });
    })();


    (function addItemToProjectList(){
        projectTableAddBtn.addEventListener("click", () => {
            console.log("Im being clicked");
            projectAddModal.showModal();
        });
    })();
    (function addItemToProjectListModal(){
        projectAddForm.addEventListener("submit", (e) => {
            sepereateAddProjectToArray();
            projectAddModal.close();
            e.preventDefault();
        });
        projectAddFormClose.addEventListener("click", () => {
            projectAddModal.close();
            console.log("Yo im being clicked")
        });
    })();
    

    (function clearInputText(){
        projectListForm.addEventListener("submit", (e) => {
            projectTitleInput.value = " ";
        });
    })();
    

    function createNewProjectList(title, desc, dueDate, priority){
        return{title, desc, dueDate, priority};
    };


    function pushProjectToArray(parameter){
        projectListArray.push(parameter);
    };


    // createNewProjectList.prototype.displayProjectList = function(){
    //     const mainContent = document.getElementById("main-content");
    //     const i = projectListArray.length - 1;
    // }; 


    function addProjectToArray(){
        let newProjectObject = new createNewProjectList(projectTitleInput.value, projectDescInput.value ,projectDatecInput.value ,projectPriorityInput.value);
        pushProjectToArray(newProjectObject);
        console.log(newProjectObject);
    };
    function sepereateAddProjectToArray(){
        const i = projectListArray.length - 1;
        const addBtnProjectDescInput = document.getElementById("project-add-list-desc-input-addBtn");
        const addBtnProjectDateInput = document.getElementById("project-add-list-dueDate-input-addBtn");
        const addBtnProjectPriorityInput = document.getElementById("project-add-list-priority-select-addBtn");
        let newProjectObject = new createNewProjectList(projectListArray[i].title, addBtnProjectDescInput.value ,addBtnProjectDateInput.value ,addBtnProjectPriorityInput.value);
        pushProjectToArray(newProjectObject);
        console.log(newProjectObject);
    };


    function displayProjectInfo(){
        const i = projectListArray.length - 1;
        const projectTitleContent = document.getElementById("project-heading");
        const insertDiv = document.getElementById("project-table-insert-div");
        
        projectTitleContent.textContent = projectListArray[i].title;
        const displayRow = document.createElement("tr");
            displayRow.setAttribute('data-index', i);
            insertDiv.appendChild(displayRow);
        const descDisplay = document.createElement("td");
            descDisplay.textContent = projectListArray[i].desc;
            displayRow.appendChild(descDisplay);
        const dateDisplay = document.createElement("td");
            dateDisplay.textContent = projectListArray[i].dueDate;
            displayRow.appendChild(dateDisplay);
        const priorityDisplay = document.createElement("td");
            priorityDisplay.textContent = projectListArray[i].priority;
            displayRow.appendChild(priorityDisplay);
    };


    (function openCloseModal(){
        newProjBtn.addEventListener("click", function() {
            titleModal.showModal();
        });
        titleModalSubmit.addEventListener("click", function() {
            titleModal.close();
        });
        titleModalClose.addEventListener("click", function() {
            titleModal.close();
        });
    })();


};
console.log("project-page");
export {displayProjectMainContent};