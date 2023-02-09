const taskListEl = document.getElementById('task-list')
const input = document.getElementById('add-input')
const button = document.getElementById('add')

let tasks = [
    {
        title: "Tugas 1",
        done: false
    }
]

button.addEventListener('click', (ev) => {
    ev.preventDefault()

    tasks.push ({
        title: input.value,
        done: false
    })

    const div = document.createElement('div')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const deleteBtn = document.createElement('div')

    div.classList.add('task')

    checkbox.classList.add('tasks__check')

    label.classList.add('task__title')

    deleteBtn.classList.add('task__delete')

    div.appendChild(checkbox)
    div.appendChild(label)
    div.appendChild(deleteBtn)

    taskListEl.appendChild(div)
})


