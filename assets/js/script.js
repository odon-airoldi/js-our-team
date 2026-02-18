
/*
Dato un array di oggetti rappresentante un team di un’azienda
- creare una pagina dedicata in cui mostrare una card per ciascun componente

Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
*/

const row_el = document.querySelector('.row');
const form_el = document.getElementById('form_member');
const input_name_el = document.getElementById('inputName');
const input_role_el = document.getElementById('inputRole');
const input_email_el = document.getElementById('inputEmail');
const input_image_el = document.getElementById('inputImage');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

function renderCard(member) {

    const {name, role, email, img} = member;
    const markup_card =` <div class="col-md-6">
                    <div class="card border-0 bg-body-tertiary">
                      <div class="row g-0">
                        <div class="col-4">
                          <img src="${img}" class="img-fluid" alt="${name}">
                        </div>
                        <div class="col-8">
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                            <p class="card-text"><small class="text-body-secondary">${email}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`
    
    return markup_card;

}

function renderTeam(team, output_el) {

    let cards = '';
  
    for(let i = 0; i < team.length; i++) {

        const member = team[i];

        const markup_card = renderCard(member)

        cards += markup_card

    }

    output_el.innerHTML = cards

}

renderTeam(teamMembers, row_el);


form_el.addEventListener('submit', function(e) {

    e.preventDefault()

    const name = input_name_el.value;
    const role = input_role_el.value;
    const email = input_email_el.value;
    const img = input_image_el.value;

    const new_member = {name, role, email, img}

    teamMembers.push(new_member);

    renderTeam(teamMembers, row_el);

});
