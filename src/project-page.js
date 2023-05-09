function displayProjectMainContent(){
    const titleModal = document.getElementById("dialog-form");
    const titleModalSubmit = document.getElementById("form-btn-submit");
    const titleModalClose = document.getElementById("form-btn-close");

    const projectListForm = document.getElementById("project-title-form");
    let projectTitleInput = document.getElementById("project-title-input");

    const projectTable = document.getElementById("project-table");

    const newProjBtn = document.getElementById("create-new-list-btn");
    const projectListArray = [];
    console.log(projectListArray);
    (function onSubmitProjectForm(){
        projectListForm.addEventListener("submit", (e) => {
            addProjectToArray();
            // displayProjectList();
            projectTable.style.display = "table";
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