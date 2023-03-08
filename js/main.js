

const membriteam  = [
    {
        'Nome': 'Wayne Barnett', 'Ruolo':'Founder & CEO', 'Immagine':' wayne-barnett-founder-ceo.jpg'
    },    
    {
        'Nome': 'Angela Caroll', 'Ruolo':'Chief Editor', 'Immagine':' angela-caroll-chief-editor.jpg'
    },    
    {
        'Nome': 'Walter Gordon', 'Ruolo':'Office Manager', 'Immagine':' walter-gordon-office-manager.jpg'
    },    
    {
        'Nome': 'Angela Lopez', 'Ruolo':'Social Media Manager', 'Immagine':'angela-lopez-social-media-manager.jpg'
    },    
    {
        'Nome': 'Scott Estrada', 'Ruolo':'Developer', 'Immagine':' scott-estrada-developer.jpg'
    },    
    {
        'Nome': 'Barbara Ramos', 'Ruolo':'Graphic Designer', 'Immagine':' barbara-ramos-graphic-designer.jpg'
    }
];
console.log(membriteam);

const containerDom = document.getElementById('card');

for(let i = 0 ; i < membriteam.length; i++){
    const people = membriteam[i];

    for(let key in people) {
        console.log(key +' '+ people[key]);
        containerDom.innerHTML+=(key +' '+ people[key])
    }
}