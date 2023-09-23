function moblie(){
    if (user){
        return false
    }else{
        firebase.then(() => {
            swal
                .fire({
                    icon: 'success',
                    title: 'Login realizado com sucesso',
                })
                .then(() => {
                    setTimeout(() => {
                        window.location.replace('index.html')
                    })
                })
        })
    }
}

function criarConta() {
    if (firebase.auth().currentUser) {
        firebase.auth().singOut()
    }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    singUp(email, password)
}

function login() {
    if (firebase.auth().currentUser) {
        firebase.auth().singOut()
    }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            swal
                .fire({
                    icon: 'success',
                    title: 'Login realizado com sucesso',
                })
                .then(() => {
                    setTimeout(() => {
                        window.location.replace('index.html')
                    })
                })
        })
        .catch((error) => {
            const errorCode = error.code
            switch (errorCode) {
                case "auth/wrong-password":
                    swal.fire({
                        icon: 'error',
                        title: 'Senha Inválida',
                    })
                    break
                case "auth/invalid-email":
                    swal.fire({
                        icon: 'error',
                        title: 'Email Inválido',
                    })
                    break
                case "auth/user-not-found":
                    swal
                        .fire({
                            icon: "warning",
                            title: "Usuário não encontrado",
                            text: "Deseja criar esse usuário?",
                            showCancelButton: true,
                            cancelButtonText: "Não",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sim",
                            confirmButtonColor: "#3085d6",
                        })
                        .then((result) => {
                            setTimeout(() => {
                                window.location.replace('criar_conta.html')
                            })
                        })
                    break
                default:
                    swal.fire({
                        icon: 'error',
                        title: error.message,
                    })
                    break
            }
        })
}

function singUp(email, password) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            swal
                .fire({
                    icon: "success",
                    title: "O usuário foi criado com sucesso"
                })
                .then(() => {
                    setTimeout(() => {
                        window.location.replace('index.html')
                    }, 800)
                })
        })
        .catch((error) => {
            const errorCode = error.code
            switch (errorCode) {
                case "auth/invalid-email":
                    swal.fire({
                        icon: 'error',
                        title: 'Email Inválido',
                    })
                    break
                case "auth/weak-password":
                    swal.fire({
                        icon: "error",
                        title: 'Senha muito Fraca',
                    })
                    break
                default:
                    swal.fire({
                        icon: "error",
                        title: error.message,
                    })
                    break
            }
        })
}

function logout() {
    firebase.auth().signOut();
    window.location.reload();
}
