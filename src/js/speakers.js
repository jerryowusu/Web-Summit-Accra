const featuredSpeakers1 = [
  {
    id: 1,
    name: 'Jeremiah Owusu',
    description: 'Founder and CEO at BestJ Group of Companies',
    about: 'Coming from a pharmaceutical background, Jerry has created a niche for himself in the tech industry. He believes that with the right mindset and support system, everyone can achieve the optimum best',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/Jerry-owusu.jpeg",
  },
  {
    id: 2,
    name: 'Esther Owusu-Ansah',
    description: 'Physician Assistant, Co-founder and CEO at BestJ Rentals',
    about: 'In her most recent role as Chief Executive Officer, BestJ Rentals, she led them to their best productive years ever.',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/Esther-owusu.jpeg",
  },
];
const featuredSpeakers2 = [
  {
    id: 1,
    name: 'Patrick Awuah',
    description: 'Founder and President of Ashesi University',
    about: 'Patrick Awuah is the Founder and President of Ashesi University, a private, not-for-profit institution that has quickly gained a reputation for innovation and quality education in Ghana. ',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/patrick-awuah.jpg",
  },
  {
    id: 2,
    name: 'Williams Adu',
    description: 'Senior Software Engineer at Microsoft ',
    about: 'After completing a degree in Telecommunication at the Kwame Nkrumah University of Science and Technology(KNUST), Williams Adu has pushed himself to become one of the best engineers the world has ever known',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/williams-adu.jpg",
  },
];

const featuredSpeakers3 = [
  {
    id: 1,
    name: 'John Agyekum Kuffour',
    description: 'Former President of the Republic of Ghana',
    about: 'Former president of Ghana, a renowned lawyer and a businessman.',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/John_Kufuor.jpg",
  },
  {
    id: 2,
    name: 'Peter Yefi',
    description: 'Chief Technical Officer at Complete Farmer',
    about: 'Hands-on, successful software engineer and data science enthusiast with great analytical skills and in-depth knowledge in Python, ETL and Java. +3 years experience in Ghana, Rwanda, Kenya and US',
    img1: "./src/images/speaker-background.jpg",
    img2: "./src/images/peter-yefi.jpg",
  },
];

const speakers1 = document.querySelector('.columns-row1');

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
  const featuredSpeaker1 = featuredSpeakers1[i];

  speakers1.innerHTML += `
        
            
  <div  id='${featuredSpeaker1.id}' class='col-md-6 col-lg-5 col-xl-5 mt-3'>
  <div class="row align-items-start justify-content-start">
    <div class="images  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
         <img class="image1 img-fluid" src="${featuredSpeaker1.img1}" alt="" width=60% height=80%>
        <img class="image2 " src="${featuredSpeaker1.img2}" alt='${featuredSpeaker1.name}' width=80% height=100%>
    </div>
    <div class="description align-items-center justify-content-center col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2">
        <h4>${featuredSpeaker1.name}</h4>
        <h5 class='red fst-italic fw-bold'>${featuredSpeaker1.description}
        </h5>
        <span class='line2'></span>
        <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker1.about}</h6>
    </div>
   </div>
    </div>               
</div>
`;
}

const speakers2 = document.querySelector('.columns-row2');

for (let i = 0; i < featuredSpeakers2.length; i += 1) {
  const featuredSpeaker2 = featuredSpeakers2[i];

  speakers2.innerHTML += `
        
  <div  id='${featuredSpeaker2.id}' class='col-md-6 col-lg-5 col-xl-5 mt-3 '>
  <div class="row align-items-start justify-content-start">
    <div class="images  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
         <img class="image1 img-fluid" src="${featuredSpeaker2.img1}" alt="" width=60% height=80%>
        <img class="image2 " src="${featuredSpeaker2.img2}" alt='${featuredSpeaker2.name}' width=80% height=100%>
    </div>
    <div class="description align-items-center justify-content-center col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2">
        <h4>${featuredSpeaker2.name}</h4>
        <h5 class='red fst-italic fw-bold'>${featuredSpeaker2.description}
        </h5>
        <span class='line2'></span>
        <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker2.about}</h6>
    </div>
   </div>
    </div>               
</div>
`;
}

const speakers3 = document.querySelector('.columns-row3');

for (let i = 0; i < featuredSpeakers2.length; i += 1) {
  const featuredSpeaker3 = featuredSpeakers3[i];

  speakers3.innerHTML += `
  <div  id='${featuredSpeaker3.id}' class='col-md-6 col-lg-5 col-xl-5 mt-3'>
  <div class="row align-items-start justify-content-start">
    <div class="images  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
         <img class="image1 img-fluid" src="${featuredSpeaker3.img1}" alt="" width=60% height=80%>
        <img class="image2 " src="${featuredSpeaker3.img2}" alt='${featuredSpeaker3.name}' width=80% height=100%>
  </div>
    <div class="description align-items-center justify-content-center col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2">
        <h4>${featuredSpeaker3.name}</h4>
        <h5 class='red fst-italic fw-bold'>${featuredSpeaker3.description}
        </h5>
        <span class='line2'></span>
        <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker3.about}</h6>
    </div>
   </div>
    </div>               
</div>
`;
}
