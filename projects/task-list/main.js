function showTask() {


    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    if (tasks == [] || tasks == '') {
        document.getElementById('tasks').innerHTML = `
    <p class="my-5 text-center">No task To show. Add new task to save.</p>`
    } else {

        document.getElementById('tasks').innerHTML=''

        tasks.map(task => {
            let div = document.createElement('div')
            // div.setAttribute('class', 'w-100 d-flex justify-content-between')
            div.setAttribute('class', 'task')
            div.setAttribute('style', '')
            div.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button onclick="deleteTask('${task.title}')" class='btn btn-danger'><i class="bi bi-trash3"></i></button>
        <hr>
        `
            document.getElementById('tasks').appendChild(div)
        }
        )
    }

}
showTask()

function addtask() {

    let titleReletition = 0;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.map(task => {
        if (document.getElementById('title').value == task.title) {
            titleReletition = 1
        }
    })

    if (document.getElementById('title').value == '') {
        document.getElementById('title-err').innerHTML = 'Fill This to Continue'
        document.getElementById('description-err').innerHTML = ''

    }
    else if (document.getElementById('description').value == '') {
        document.getElementById('description-err').innerHTML = 'Fill This to Continue'
        document.getElementById('title-err').innerHTML = ''
    }
    else if (titleReletition) {
        document.getElementById('title-err').innerHTML = 'Title must me Unique'
        document.getElementById('description-err').innerHTML = ''
    } else {
        document.getElementById('title-err').innerHTML = ''
        document.getElementById('description-err').innerHTML = ''

        let title = document.getElementById('title').value
        let description = document.getElementById('description').value

        let data = {
            "title": title,
            "description": description
        }

        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
        tasks.push(data)


        localStorage.setItem('tasks', JSON.stringify(tasks))
        showTask()
    }


}

function deleteTask(title) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    let newTasks = tasks.filter(task => task.title != title)

    localStorage.setItem("tasks",JSON.stringify(newTasks))
    showTask()
}