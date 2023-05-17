function displayProjectMainContent(){
    const titleModal = document.getElementById("dialog-form");
    const titleModalSubmit = document.getElementById("form-btn-submit");
    const titleModalClose = document.getElementById("form-btn-close");

    const projectListForm = document.getElementById("project-title-form");
    let projectTitleInput = document.getElementById("project-title-input");
    let projectDescInput = document.getElementById("project-list-desc-input");
    let projectDatecInput = document.getElementById("project-list-dueDate-input");
    let projectPriorityInput = document.getElementById("project-list-priority-select");

    // const projectTable = document.getElementById("project-table");
    // const projectTableAddBtn = document.getElementById("project-table-addButton");

    const projectAddModal = document.getElementById("add-to-project-dialog");
    const projectAddForm = document.getElementById("add-to-project-form");
    // const projectAddFormSubmit = document.getElementById("add-to-project-form-submit");
    const projectAddFormClose = document.getElementById("add-to-project-btn-close");

    const newProjBtn = document.getElementById("create-new-list-btn");
    const projectListArray = [];
    console.log(projectListArray);


    (function onSubmitProjectForm(){
        projectListForm.addEventListener("submit", (e) => {
            createProjectListTable();
            addProjectToArray();
            displayProjectInfo();
            // projectTable.style.display = "table";
            
            console.log(projectListArray);
            e.preventDefault();
        });
    })();


    (function addItemToProjectListModal(){
        projectAddForm.addEventListener("submit", (e) => {
            sepereateAddProjectToArray();
            displayProjectInfo();//this needs to change to something else <-----------------------------------------------
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
        
        const projectTable = document.getElementById("project-table");

        projectTitleContent.textContent = projectListArray[i].title;
        const displayRow = document.createElement("tr");
            displayRow.setAttribute('data-index', i);
            
            projectTable.appendChild(displayRow);

        const descDisplay = document.createElement("td");
            descDisplay.textContent = projectListArray[i].desc;
            displayRow.appendChild(descDisplay);

        const dateDisplay = document.createElement("td");
            dateDisplay.textContent = projectListArray[i].dueDate;
            displayRow.appendChild(dateDisplay);

        const priorityDisplay = document.createElement("td");
            priorityDisplay.textContent = projectListArray[i].priority;
            displayRow.appendChild(priorityDisplay);


        const sideBar = document.getElementById("sidebar-list-projects");
        const sidebarListDisplayCtnr = document.createElement("div");
            sideBar.appendChild(sidebarListDisplayCtnr);

        const sidebarListDisplayLi = document.createElement("li");
            sidebarListDisplayLi.textContent = projectListArray[i].title;
            sidebarListDisplayCtnr.appendChild(sidebarListDisplayLi);

        const sidebarListDisplayEdit = document.createElement("button");
            sidebarListDisplayEdit.setAttribute("class", "note-edit-btn");
            sidebarListDisplayEdit.textContent = "Edit";
            sidebarListDisplayLi.appendChild(sidebarListDisplayEdit);

        const sidebarListDisplayDelete = document.createElement("button");
            sidebarListDisplayDelete.setAttribute("class", "note-delete-btn");
            sidebarListDisplayDelete.textContent = "Dlte";
            sidebarListDisplayLi.appendChild(sidebarListDisplayDelete);
    };


    function createProjectListTable(){

        const i = projectListArray.length - 1;
        const mainContent = document.getElementById("main-content");

        // Create the HTML elements
        const table = document.createElement('table');

        table.setAttribute('id', 'project-table');
        table.setAttribute('data-index', i);

        const headingContainer = document.createElement('div');
        headingContainer.setAttribute('id', 'project-table-heading-ctnr');

        const heading = document.createElement('h1');
        heading.setAttribute('id', 'project-heading');
        heading.textContent = 'Default Heading';

        const projectTableAddBtn = document.createElement('input');
        projectTableAddBtn.setAttribute('type', 'button');
        projectTableAddBtn.setAttribute('id', 'project-table-addButton');
        projectTableAddBtn.setAttribute('value', 'Add+');

        const tableRow = document.createElement('tr');

        const th1 = document.createElement('th');
        th1.setAttribute('id', 'th1');
        th1.textContent = 'Task';

        const th2 = document.createElement('th');
        th2.setAttribute('id', 'th2');
        th2.textContent = 'Due Date';

        const th3 = document.createElement('th');
        th3.setAttribute('id', 'th3');
        th3.textContent = 'Priority';

        // Add the elements to the document
        table.appendChild(headingContainer);
        table.appendChild(tableRow);
        headingContainer.appendChild(heading);
        headingContainer.appendChild(projectTableAddBtn);
        tableRow.appendChild(th1);
        tableRow.appendChild(th2);
        tableRow.appendChild(th3);

        mainContent.appendChild(table);
        


        (function addItemToProjectList(){
            projectTableAddBtn.addEventListener("click", () => {
                console.log("Im being clicked");
                projectAddModal.showModal();
            });
        })();
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