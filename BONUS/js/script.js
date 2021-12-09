// SECTION Object: team //
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// SECTION card filler initial//
const containerCards = document.querySelector('.team-container');
for (let i = 0; i < team.length; i++) {
  const obj = team[i];
  const templateCard = `
    <div class='team-card'>
      <div class='card-image'>
        <img src="img/${obj.image}"/>
      </div>
      <div class="card-text">
        <h3>${obj.name}</h3>
        <p>${obj.role}</p>
      </div>
    </div>`;
  containerCards.innerHTML += templateCard;
}

// SECTION get element from DOM //
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const selectImage = document.getElementById('image');
const submitBtn = document.getElementById('addMemberButton');

// SECTION sumbit new co-workers //
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const valueName = inputName.value;
  const valueRole = inputRole.value;
  const valueImage = selectImage.value;

  if (valueName.length > 0 && valueRole.length > 0) {
    const obj = {
      name: valueName,
      role: valueRole,
      image: valueImage 
    };
    team.push(obj);

    const containerCards = document.querySelector('.team-container');
    containerCards.innerHTML = '';
    for (let i = 0; i < team.length; i++) {
      const obj = team[i];
      const templateCard = `
        <div class='team-card'>
          <div class='card-image'>
            <img src="img/${obj.image}"/>
          </div>
          <div class="card-text">
            <h3>${obj.name}</h3>
            <p>${obj.role}</p>
          </div>
        </div>`;
      containerCards.innerHTML += templateCard;
    }
  } else {console.log('Non hai inserito dati');}
});