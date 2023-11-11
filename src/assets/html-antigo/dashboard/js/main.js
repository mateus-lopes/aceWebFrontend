$(function () {
  $('#carousel-desktop').on('slide.bs.carousel', function (event) {
    $('.barra', this).removeClass('anima').css('width', '0%')
  })
  $('#carousel-desktop').on('slid.bs.carousel', function (event) {
    $('.barra', this).addClass('anima').css('width', '100%')
  })

  $('.barra', '#carousel-desktop').css('width', '100%')
})

$(function () {
  // layout
  $('[data-toggle="tooltip"]').tooltip()

  $('#sidebar-toggle').click(function (e) {
    e.preventDefault()
    $('#page').toggleClass('toggled')
  })
  $('#sidebar-toggler-bottom').click(function (e) {
    e.preventDefault()
    $('#page').toggleClass('toggled')
  })

  $('#main-toggle').click(function (e) {
    e.preventDefault()
    $('#header').toggleClass('toggled')
  })

  $('#main-toggler-bottom').click(function (e) {
    e.preventDefault()
    $('#header').toggleClass('toggled')
  })
})

// firebase
const banco_dados = firebase.firestore()
let tasks = []
let currentUser = {}

function btnTask() {
  const btn_addTask = document.getElementById('btn-addTask')
  if (btn_addTask) {
    btn_addTask.addEventListener('click', addTask)
  }
}

function getUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser.uid = user.uid
      readTasks()
      let nome_email = user.email
      let nome = nome_email.substring(0, nome_email.indexOf('@'))
      let userLabel = document.getElementById('navbarDropdown')
      userLabel.innerHTML = nome
    } else {
      let userLabel = document.getElementById('navbarDropdown')
      userLabel.innerHTML = 'Entrar'
      userLabel.addEventListener('click', function () {
        swal
          .fire({
            icon: 'warning',
            title: 'Redirecionando para a tela de autenticão'
          })
          .then(() => {
            setTimeout(() => {
              window.location.replace('login.html')
            }, 1000)
          })
      })
    }
  })
}

function createDelButton(task) {
  const newButton = document.createElement('button')
  newButton.setAttribute('class', 'btn btn-info2 p-1 px-4')
  newButton.appendChild(document.createTextNode('Excluir'))
  newButton.setAttribute('onclick', `deleteTask("${task.id}")`)
  return newButton
}

function renderTasks() {
  let itemList = document.getElementById('list-tasks')
  if (itemList) {
    itemList.innerHTML = ''
    for (let task of tasks) {
      const newItem = document.createElement('li')
      newItem.setAttribute('class', 'list-group-item d-flex justify-content-between')
      newItem.appendChild(document.createTextNode(task.title))
      newItem.appendChild(createDelButton(task))
      itemList.appendChild(newItem)
    }
  }
}

async function readTasks() {
  tasks = []
  const logTasks = await banco_dados.collection('tasks').where('owner', '==', currentUser.uid).get()
  for (doc of logTasks.docs) {
    tasks.push({
      id: doc.id,
      title: doc.data().title
    })
  }
  renderTasks()
}

async function addTask() {
  const title = document.getElementById('newItem').value
  if (title && title != ' ') {
    const itemList = document.getElementById('list-tasks')
    const spinnerLoad = document.createElement('li')
    spinnerLoad.setAttribute(
      'class',
      'spinner-border spinner-border spinner-border-xl text-info mx-auto my-3'
    )
    itemList.appendChild(spinnerLoad)
    await banco_dados.collection('tasks').add({
      title: title,
      owner: currentUser.uid
    })
    readTasks()
  } else {
    swal.fire({
      icon: 'error',
      title: 'Você não digitu uma tarefa'
    })
  }
}
async function deleteTask(id) {
  await banco_dados.collection('tasks').doc(id).delete()
  readTasks()
}

window.onload = function () {
  getUser()
  btnTask()
}
