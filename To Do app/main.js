//1. 유저가 값을 입력한다 0
//2. +버튼을 클릭하면 ,할일이 추가된다. 0
//3. delete 버튼을 누르면 할일이 삭제된다.
//4. check 버튼을 누르면 할일이 끝나면서 밑줄이 간다 

//4-1 check 버튼을 클릭하는 순간 true false 
//4-2 true 이면 끝난걸로 간주하고 밑줄 보여주기
//4-3 false 이면 안끝난걸로 간주하고 그대로 

//5. not done, done 탭을 누르면 , 언더바가 이동한다 
//6. done 탭은 끝난 아이템만, not done 탭은 진행중 아이탬만
//7. 전체 탭을 누르면 전체아이템으로 돌아옴



let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button")
let taskList = []





addButton.addEventListener("click",addTask);

function addTask(){
    let task = {
        id:randomIdGenerate(),
        taskContent : taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = '';


    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')" class="size check">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button onclick="deleteTask('${taskList[i].id}')" class="size trash">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
        }else{
            resultHTML += `<div class="task">
            <div >${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')" class="size check">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button onclick="deleteTask(${taskList[i].id})" class="size trash">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
        }
    }

    document.getElementById("task-board").innerHTML =resultHTML;
}


function toggleComplete(id){
    console.log("id:",id);
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete=!taskList[i].isComplete;
            break;
        }
    }
    console.log(taskList)
    render()
}

function deleteTask(id){
    for(let i=0;i<taskList.length;i++){
        if (taskList[i].id ==id){
            taskList.splice(i,1)
            break
        }
    }
    render();
}

function randomIdGenerate(){
    return '_' + Math.random().toString(36).substr(2,9);
}
