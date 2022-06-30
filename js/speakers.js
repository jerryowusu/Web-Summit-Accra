const featuredSpeakers = [
  {
    id: 1,
    name: 'Jeremiah Owusu',
    description: 'Founder and CEO at BestJ Group of Companies',
    about: 'Coming from a pharmaceutical background, Jerry has created a niche for himself in the tech industry. He believes that with the right mindset and support system, everyone can achieve the optimum best',
    // img1: './images/speaker-background.jpg',
    img2: './images/Jerry-owusu.jpeg',
  },
  {
    id: 2,
    name: 'Steve Beale',
    description: 'SalesForce Consultant at Simplus',
    about: 'He manufactured a customer database for both sales and service using CRM databases and tools of Zoho',
    // img1: './images/speaker-background.jpg',
    img2: './images/steve-beale.jpeg',
  },
  {
    id: 3,
    name: 'Mac Bamba',
    description: 'SalesForce Consultant at Simplus',
    about: 'Led a group of interns to build a career website that is similar to jobstreet/linkedin. He also designs the user interface of the website using the Eden Framework, a PHP framework.',
    // img1: './images/speaker-background.jpg',
    img2: './images/macB.jpeg',
  },
  {
    id: 4,
    name: 'Williams Adu',
    description: 'Senior Software Engineer at Microsoft ',
    about: 'After completing a degree in Telecommunication at the Kwame Nkrumah University of Science and Technology(KNUST), Williams Adu has pushed himself to become one of the best engineers the world has ever known',
    // img1: './images/speaker-background.jpg',
    img2: './images/williams-adu.jpg',
  },
  {
    id: 5,
    name: 'Czyrene Erika Paguio',
    description: 'Capability Lead at Simplus',
    about: 'She obtained BSc Electronics Engineering at De La Salle Lipa, and has since been a force to reckon with in what ever organization employed in',
    // img1: './images/speaker-background.jpg',
    img2: './images/Czyrene-Paguio.jpeg',
  },
  {
    id: 6,
    name: 'Elike Banibensu',
    description: 'BPO / ICT Enabled Services and Process Improvement Consultant',
    about: 'Experience in Operations Management since 2005. ACS-Xerox Six-sigma black belt certified. Production, Quality and Workforce Management since 2002.',
    // img1: './images/speaker-background.jpeg',
    img2: './images/elikeB.jpeg',
  },
];

const speakers = document.querySelector('#dynamic-speakers');

const loadSpeakers1 = () => {
  if (speakers !== null) {
    featuredSpeakers.forEach((speaker) => {
      const render = `
      <div  id='${speaker.id} class='dynamic-speaker row m-3 p-5 mt-5'>
      <div class="row">
        <div class="images col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
             <img class="image1 img-fluid" src='./images/speaker-background.jpg' alt="" width=50% height=60%>
            <img class="image2 " src="${speaker.img2}" alt='${speaker.name}' width=80% height=90%>
        </div>
        <div class="description align-items-center justify-content-center col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2">
            <h4>${speaker.name}</h4>
            <h5 class='red fst-italic fw-bold'>${speaker.description}
            </h5>
            <span class='line2'></span>
            <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${speaker.about}</h6>
        </div>
       </div>
        </div>               
      `;
      speakers.innerHTML += `${render}`;
    });
  }
};

document.addEventListener('DOMContentLoaded', loadSpeakers1);
