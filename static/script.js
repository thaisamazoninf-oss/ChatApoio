// LOGIN ADMIN
const btnLoginAdmin =
    document.getElementById(
        "btn-login-admin"
    )

if (btnLoginAdmin) {

    btnLoginAdmin.addEventListener(
        "click",
        async () => {

            const senha =
                document.getElementById(
                    "senha-admin"
                ).value

            const formData =
                new FormData()

            formData.append(
                "senha",
                senha
            )

            const resposta =
                await fetch(
                    "/login-admin",
                    {
                        method: "POST",
                        body: formData
                    }
                )

            const dados =
                await resposta.json()

            if (dados.success) {

                location.reload()

            } else {

                alert(
                    "Senha incorreta"
                )
            }
        }
    )
}

// MODAL ADMIN
const abrirPainelAdmin =
    document.getElementById(
        "abrir-painel-admin"
    )

const modalAdmin =
    document.getElementById(
        "modal-admin"
    )

const fecharAdmin =
    document.getElementById(
        "fechar-admin"
    )

if (abrirPainelAdmin) {

    abrirPainelAdmin.addEventListener(
        "click",
        () => {

            modalAdmin.style.display =
                "flex"
        }
    )
}

if (fecharAdmin) {

    fecharAdmin.addEventListener(
        "click",
        () => {

            modalAdmin.style.display =
                "none"
        }
    )
}

// LOGOUT ADMIN
const logoutAdmin =
    document.getElementById(
        "logout-admin"
    )

if (logoutAdmin) {

    logoutAdmin.addEventListener(
        "click",
        async () => {

            await fetch(
                "/logout-admin"
            )

            location.reload()
        }
    )
}

//UPLOAD ADMIN
const formAdmin =
    document.getElementById(
        "form-admin"
    )

if (formAdmin) {

    formAdmin.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault()

            const dados =
                new FormData()

            const imagem =
                document.getElementById(
                    "imagem-agenda"
                ).files[0]
            
            const csv =
                document.getElementById(
                    "csv-agenda"
                ).files[0]

            if (imagem) {

                dados.append(
                    "imagem", 
                    imagem
                )
            }

            if (csv) {

                dados.append(
                    "csv",
                    csv
                )
            }

            const resposta = await fetch(
                "/upload-arquivos",
                {
                    method: "POST",
                    body: dados
                }
            )

            const resultado =
                await resposta.json()

            if (resultado.success) {

                alert(
                    "Arquivos atualizados" 
                )

                location.reload()
            }
        }
    )
}

//CRIAR CHAMADO
document
    .getElementById("form")
    .addEventListener("submit", async (e) => {

        e.preventDefault()

        const formData = new FormData(e.target)

        await fetch("/criar", {
            method: "POST",
            body: formData
        })

        location.reload()
})


// ASSUMIR ATENDIMENTO
document.querySelectorAll(".assumir-btn").forEach((botao) => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id

        const linha = botao.closest(".linha")

        const tecnico = linha
            .querySelector(".tecnico-select")
            .value

        if (!tecnico) {

            alert("Selecione um técnico antes de assumir o atendimento.")

            return
        }

        await fetch(`/assumir/${id}`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                tecnico: tecnico
            })

        })

        location.reload()

    })

})


// INICIAR LIGAÇÃO
document.querySelectorAll(".ligacao-btn").forEach((botao) => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id

        await fetch(`/contato/${id}`, {
            method: "POST"
        })

        location.reload()

    })

})


// CONTATO REALIZADO
document.querySelectorAll(".contato-btn").forEach((botao) => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id

        await fetch(`/contato-realizado/${id}`, {
            method: "POST"
        })

        location.reload()

    })

})


// NÃO ATENDEU
document.querySelectorAll(".nao-atendeu-btn").forEach((botao) => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id

        await fetch(`/nao-atendeu/${id}`, {
            method: "POST"
        })

        location.reload()

    })

})


// CONCLUIR
document.querySelectorAll(".concluir-btn").forEach((botao) => {

    botao.addEventListener("click", async () => {

        const id = botao.dataset.id

        await fetch(`/concluir/${id}`, {
            method: "POST"
        })

        location.reload()

    })

})

// SOLICITAR APOIO CHAT
const btnApoio = document.getElementById("btn-apoio-chat")

if (btnApoio) {

    btnApoio.addEventListener(
        "click", 
        async () => {
            await fetch(
                "/solicitar-apoio", 
                {
                    method: "POST"
                }
            )

            location.reload()
    })
}

// DEFINIR APOIO
const confirmaApoio = 
    document.getElementById(
        "confirmar-apoio"
    )

if (confirmaApoio) {

    confirmaApoio.addEventListener(
        "click", 
        async () => {

            const nome = document
                .getElementById(
                    "select-apoio"
                )
                .value
            
            if (!nome) {

                alert(
                    "Selecione um apoio"
                )

                return
            }

            await fetch(
                "/definir-apoio",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        nome: nome
                    })

                }
            )

            location.reload()
        }
    )
}

// ENCERRAR APOIO
const encerrarApoio =
    document.getElementById(
        "encerrar-apoio"
    )

if (encerrarApoio) {

    encerrarApoio.addEventListener(
        "click", 
        async () => {
            await fetch(
                "/encerrar-apoio",
                {
                    method: "POST"
                }
            )

            location.reload()
        }
    )
}

// MODAL AGENDA
const abrirAgenda =
    document.getElementById(
        "abrir-agenda"
    )

const modalAgenda =
    document.getElementById(
        "modal-agenda"
    )

const fecharAgenda =
    document.getElementById(
        "fechar-agenda"
    )

if (abrirAgenda) {

    abrirAgenda.addEventListener(
        "click",
        () => {

            modalAgenda.style.display = "flex"
        }
    )
}

if (fecharAgenda) {

    fecharAgenda.addEventListener(
        "click",
        () => {

            modalAgenda.style.display = "none"
        }
    )
}

// ABRIR LOGIN ADMIN
const abrirAdmin =
    document.getElementById(
        "abrir-admin"
    )

const loginAdminBox =
    document.getElementById(
        "login-admin-box"
    )

if (abrirAdmin) {

    abrirAdmin.addEventListener(
        "click",
        () => {

            loginAdminBox.classList.toggle(
                "mostrar-admin"
            )

        }
    )
}


// ATUALIZAÇÃO AUTOMÁTICA
setInterval(() => {

    location.reload()

}, 10000)