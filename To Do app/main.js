//1. 유저가 값을 입력한다 0
//2. +버튼을 클릭하면 ,할일이 추가된다. 0
//3. delete 버튼을 누르면 할일이 삭제된다.
//4. check 버튼을 누르면 할일이 끝나면서 밑줄이 간다 
//5. not done, done 탭을 누르면 , 언더바가 이동한다 
//6. done 탭은 끝난 아이템만, not done 탭은 진행중 아이탬만
//7. 전체 탭을 누르면 전체아이템으로 돌아옴



let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button")
let taskList = []





addButton.addEventListener("click",addTask);

function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
}

function render(){
    let resultHTML = 

    document.getElementById("task-board").innerHTML =resultHTML
}
