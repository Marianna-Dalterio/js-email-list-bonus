const booleanApiEndpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
mailOutputEl = document.getElementById("emailOutput")

function stampa() {
    for (let i = 0; i < 10; i++) {
        axios.get(booleanApiEndpoint)
            .then(response => {
                const email = response.data.response;
                console.log(email)
                mailOutputEl.innerHTML += email
            })
            .catch(error => {
                console.log(error);
            })
    }
}

stampa()

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
    stampa();
})
