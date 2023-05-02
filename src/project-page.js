function displayProjectMainContent(){
    const titleModal = document.getElementById("dialog-form");
    const titleModalSubmit = document.getElementById("form-btn-submit");
    const titleModalClose = document.getElementById("form-btn-close");

    const projectListForm = document.getElementById("project-title-form");
    let projectTitleInput = document.getElementById("project-title-input");

    const newProjBtn = document.getElementById("create-new-list-btn");
    const projectListArray = [];

    (function onSubmitProjectForm(){
        projectListForm.addEventListener("submit", (e) => {
            addProjectToArray();
            displayProjectList();
            console.log(projectListArray);
            
            // handle submit
        });
    })();

    (function preventRefreshSubmit(){
        projectListForm.addEventListener("submit", (e) => {
            e.preventDefault();
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

    function displayProjectList(){
        const mainContent = document.getElementById("main-content");
        const i = projectListArray.length - 1;
        
        const projectListTable = document.createElement("table");
            mainContent.appendChild(projectListTable);
        const projectListRowTitle = document.createElement("tr");
            projectListTable.appendChild(projectListRowTitle);
    };

    function addProjectToArray(){
        
        const newProjectObject = new createNewProjectList(projectTitleInput.value,"TestItem" ,"TestDate" ,"TestPriority");

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