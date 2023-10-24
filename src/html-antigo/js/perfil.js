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
let currentUser = {}
let profile = false

function getUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser.uid = user.uid
      let nome_email = user.email
      let nome = nome_email.substring(0, nome_email.indexOf('@'))
      let userLabel = document.getElementById('user')
      let userLabel2 = document.getElementById('user2')
      userLabel.innerHTML = nome
      userLabel2.innerHTML = nome
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

async function getUserInfo(uid) {
  const logUsers = await banco_dados.collection('profile').where('uid', '==', uid).get()
  let userInfo = document.getElementById('userInfo')
  if (logUsers.docs.length == 0) {
    userInfo.innerHTML = 'Perfil Não Registrado'
    userInfo.setAttribute('class', 'text-danger')
  } else {
    userInfo.innerHTML = 'Perfil Registrado'
    userInfo.setAttribute('class', 'text-success')
    profile = true
    const userData = logUsers.docs[0]
    currentUser.uid = userData.id
    currentUser.firstName = userData.data().firstName
    currentUser.lastName = userData.data().lastName
    currentUser.descricao = userData.data().descricao
    document.getElementById('firstName').value = currentUser.firstName
    document.getElementById('lastName').value = currentUser.lastName
    document.getElementById('email').value = currentUser.email
    document.getElementById('bairro').value = currentUser.bairro
    document.getElementById('rua').value = currentUser.rua
    document.getElementById('complemento').value = currentUser.complemento
    document.getElementById('cep').value = currentUser.cep
  }
}

async function saveProfile() {
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const bairro = document.getElementById('bairro').value
  const rua = document.getElementById('rua').value
  const complemento = document.getElementById('complemento').value
  const cep = document.getElementById('cep').value
  if (!profile) {
    await banco_dados.collection('profile').add({
      uid: currentUser.uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      bairro: bairro,
      rua: rua,
      complemento: complemento,
      cep: cep
    })
    getUserInfo(currentUser.uid)
  } else {
    await banco_dados.collection('profile').doc(currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      bairro: bairro,
      rua: rua,
      complemento: complemento,
      cep: cep
    })
  }
}

window.onload = function () {
  getUser()
}
