const featuredSpeakers = [
  {
    id: 1,
    name: 'Jeremiah Owusu',
    description: 'Founder and CEO at BestJ Group of Companies',
    about: 'Coming from a pharmaceutical background, Jerry has created a niche for himself in the tech industry. He believes that with the right mindset and support system, everyone can achieve the optimum best',
    img1: './images/speaker-background.jpg',
    img2: './images/Jerry-owusu.jpeg',
  },
  {
    id: 2,
    name: 'Esther Owusu-Ansah',
    description: 'Physician Assistant, Co-founder and CEO at BestJ Rentals',
    about: 'In her most recent role as Chief Executive Officer, BestJ Rentals, she led them to their best productive years ever.',
    img1: './images/speaker-background.jpg',
    img2: './images/Esther-owusu.jpeg',
  },
  {
    id: 3,
    name: 'Patrick Awuah',
    description: 'Founder and President of Ashesi University',
    about: 'Patrick Awuah is the Founder and President of Ashesi University, a private, not-for-profit institution that has quickly gained a reputation for innovation and quality education in Ghana. ',
    img1: './images/speaker-background.jpg',
    img2: './images/patrick-awuah.jpg',
  },
  {
    id: 4,
    name: 'Williams Adu',
    description: 'Senior Software Engineer at Microsoft ',
    about: 'After completing a degree in Telecommunication at the Kwame Nkrumah University of Science and Technology(KNUST), Williams Adu has pushed himself to become one of the best engineers the world has ever known',
    img1: './images/speaker-background.jpg',
    img2: './images/williams-adu.jpg',
  },
  {
    id: 5,
    name: 'John Agyekum Kuffour',
    description: 'Former President of the Republic of Ghana',
    about: 'Former president of Ghana, a renowned lawyer and a businessman.',
    img1: './images/speaker-background.jpg',
    img2: './images/John_Kufuor.jpg',
  },
  {
    id: 6,
    name: 'Peter Yefi',
    description: 'Chief Technical Officer at Complete Farmer',
    about: 'Hands-on, successful software engineer and data science enthusiast with great analytical skills and in-depth knowledge in Python, ETL and Java. +3 years experience in Ghana, Rwanda, Kenya and US',
    img1: './images/speaker-background.jpg',
    img2: './images/peter-yefi.jpg',
  },
];

const speakers = document.querySelector('#speakers');

const loadSpeakers1 = () => {
  if (speakers !== null) {
    featuredSpeakers.forEach((speaker) => {
      const render = `
      <div  id='${speaker.id}' class='col-md-6 col-lg-5 col-xl-5 mt-3'>
      <div class="row align-items-start justify-content-start">
        <div class="images  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
             <img class="image1 img-fluid" src="${speaker.img1}" alt="" width=50% height=60%>
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
    </div>
      `;
      speakers.innerHTML += `\n ${render}`;
    });
  }
};

document.addEventListener('DOMContentLoaded', loadSpeakers1);
