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
            // displayProjectList(); doesnt exist yet
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
            addProjectToArray();
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
    

    function createNewProjectList(title, listItem, dueDate, priority){
        return{title, listItem, dueDate, priority};
    };


    function pushProjectToArray(parameter){
        projectListArray.push(parameter);
    };


    createNewProjectList.prototype.displayProjectList = function(){
        const mainContent = document.getElementById("main-content");
        const i = projectListArray.length - 1;
        

        // const projectListTable = document.createElement("table");
        //     mainContent.appendChild(projectListTable);
        // const projectListRowTitle = document.createElement("tr");
        //     projectListTable.appendChild(projectListRowTitle);
        // const projectListItem = document.createElement();
        // const projectListdueDate = document.createElement();
        // const projectListPriority = document.createElement();
    }; 


    function addProjectToArray(){
        const newProjectObject = new createNewProjectList(projectTitleInput.value, projectDescInput.value ,projectDatecInput.value ,projectPriorityInput.value);
        pushProjectToArray(newProjectObject);
        console.log(newProjectObject);
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



    // (function preventRefreshSubmit(){
    //     projectListForm.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //     });
    // })();