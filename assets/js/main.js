// const student = {
//     first_name: 'Odon',
//     age: 38,
//     email: 'odon.airoldi@gmail.com'
// }

// const {first_name, email} = student;

// console.log(first_name, email);

// const professor = ['Fabio', '40', 'professor@email.com']

// const [professor_name, , professor_email] = professor
// console.log(professor_name, professor_email);



const starWarsTitles = [
  {
    name: 'A New Hope',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=A+New+Hope',
  },
  {
    name: 'The Empire Strikes Back',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Empire+Strikes+Back',
  },
  {
    name: 'Return of the Jedi',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Return+of+the+Jedi',
  },
  {
    name: 'The Phantom Menace',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Phantom+Menace',
  },
  {
    name: 'Attack of the Clones',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Attack+of+the+Clones',
  },
  {
    name: 'Revenge of the Sith',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Revenge+of+the+Sith',
  },
  {
    name: 'The Force Awakens',
    role: 'Movie',
    image: 'https://placehold.co/300x400?text=Force+Awakens',
  },
  {
    name: 'The Mandalorian',
    role: 'Series',
    image: 'https://placehold.co/300x400?text=Mandalorian',
  },
  {
    name: 'Obi-Wan Kenobi',
    role: 'Series',
    image: 'https://placehold.co/300x400?text=Obi-Wan+Kenobi',
  },
  {
    name: 'Andor',
    role: 'Series',
    image: 'https://placehold.co/300x400?text=Andor',
  },
];




function handleTitle(arr_obj) {


    const rowEl = document.querySelector('.row')


        for(let i = 0; i < arr_obj.length; i++) {

            const starWarsTitle = arr_obj[i];

            const {name, role, image} = starWarsTitle

            const markupCard = `
                <div class="col-4">
                    <div class="card">
                        <img src="${image}" class="card-img-top" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                        </div>
                    </div>
                </div>
            ` 
            
            rowEl.innerHTML += markupCard;

        }

}

handleTitle(starWarsTitles)