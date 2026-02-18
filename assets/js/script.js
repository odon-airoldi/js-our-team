
/*
Dato un array di oggetti rappresentante un team di un’azienda
- creare una pagina dedicata in cui mostrare una card per ciascun componente

Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
*/


const row_el = document.querySelector('.row');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


function handleTeamMembers(team) {

    for(let i = 0; i < team.length; i++) {

        const member = team[i];
        const {name, role, email, img} = member;

        const col_el =` <div class="col-md-6">
                          <div class="card mb-3 border-0 bg-body-tertiary">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src="./assets/${img}" class="img-fluid" alt="${name}">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title">${name}</h5>
                                  <p class="card-text">${role}</p>
                                  <p class="card-text"><small class="text-body-secondary">${email}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`

        row_el.innerHTML += col_el;
    }


}

handleTeamMembers(teamMembers)