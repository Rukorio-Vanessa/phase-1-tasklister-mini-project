document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    createButtonAndListTag(e.target.new_task_description.value)
  })
  
})

function createButtonAndListTag(newTask){
  let li = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  button.style.background= "#00FF00"
  button.style.fontSize= "10px"
  li.textContent = `${newTask}   `
  button.textContent = 'DONE'
  li.appendChild(button)
  console.log(li)
  document.getElementById('tasks').appendChild(li)
}
