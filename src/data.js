var pug = require("pug");

/**
 * General persona & work data
 * @type {Object}
 */
var general = {
  firstName: "Autumn",
  lastName: "Fjeld",
  email: "autumnfjeld@gmail.com",
  careerTitle: "Product Engineering Lead",
  resumeLink: "media/Autumn_Fjeld_Resume_20171123.pdf",
  webProfiles: {
    linkedIn: {
      url: "https://www.linkedin.com/in/autumnfjeld",
      icon: "fa-linkedin",
    },
    twitter: {
      url: "https://twitter.com/autaut",
      icon: "fa-twitter",
    },
    github: {
      url: "https://github.com/autumnfjeld",
      icon: "fa-github",
    },
    instagram: {
      url: "",
      icon: "fa-instagram", 
    },
    currentJob: {
      url: "https://www.ustwo.com",
      icon: "fa-user",
    },
    email: {
      url: "mailto:autumnfjeld@gmail.com",
      icon: "fa-paper-plane-o",
    },
  },
  // introBlurb: "What can I build for you!?"
};

/**
 * Work Experience data
 * @type {Object}
 */
var workExperience = [
  {
    order: 19,
    company: "WordPress.com at Automattic",
    title: "Product Engineering Lead",
    location: "Remote",
    startDate: "July 2020",
    endDate: "April 202",
    companyBlurb: "WordPress.com is a hosted blogging platform and website builder. Automattic is the parent company of WordPress.com, WooCommerce Jetpack, and many other products.",
    items: [
      'Worked in the  <a href="https://github.com/Automattic/wp-calypso" target="_blank">WordPress.com front-end</a>, a modern, open-source application built on  React, Redux, enabling real-time, multi-site management for millions of WP sites via the WordPress.com REST API.',
     
      'Managed multiple engineering teams for four years. Developed new leads. Told by many team members that I was one of the best leads they’ve ever had.  My leadership and team success was validated by the challenging, high profile projects given to my teams.',
    
      // 'Reached across divisions and functions to do the work that was needed, never siloed our work or limited my team to just do what was given to us.',
    
      'Often stepped up to lead large, complex, multi-team initiatives. Used user behavior research to make data informed decisions, created clarity from ambiguity, facilitated discussions with those who have key knowledge or position to move work forward.  Kept engineers focused on business-value-efforts.  Pushed for action that added value for the customer.',
   
      'Worked on the precursor to the WordPress.com <a href="https://wordpress.com/ai-website-builder" target="_blank">AI site builder</a>. A design-you-own-site tool for assembling layout and custom styling on a WordPress site. Iterated on this product for over a year, evolving from a scrappy MVP to a polished guided flow.  Measured success regularly via customer interviews, user interaction analytics, and visual inspection of converted(paid) customer\'s launched sites.',
   
      'Led the novel <a href="https://github.com/Automattic/create-content-model" target="_blank">Content Modeling project</a> as part of a dev-focused marketing initiative to showcase how WordPress.com could creatively leverage new Core features to build modern content creation tools. Demoed to agencies as a proof of innovation and to boost WordPress.com’s appeal to technical audiences.',
  
      'Led a platform‑wide UI audit and execution effort across WordPress.com to separate WordPress Core features from WordPress.com hosting features—simplifying dozens of screens and reorganizing functionality into a cleaner information architecture.'
    ],
  },
  {
    order: 18,
    company: "ustwo",
    title: "Full-stack Product Engineer",
    location: "Sydney, Australia",
    startDate: "Jan 2018",
    endDate: "June 2020",
    items: [
      '<a href="https://ustwo.com/" target="_blank">ustwo</a> is a digital design agency with offices around the globe. Below are the client projects I worked on.',
      '<a href="https://qantas.com/" target="_blank">Qantas</a>: worked on the <a href="https://cardcompanion.qantas.com" target="_blank">Card Companion App</a>. Tech stack: AWS, Elastic search, GraphQL, React.',
      '<a href="https://create.withgoogle.com/" target="_blank">Create with Google</a>: part of the founding product team that launched Create with Google suite of products. Responsible for the <a href="https://create.withgoogle.com/" target="_blank">website</a> and <a href="https://create.withgoogle.com/youtubemockuptool" target="_blank">YouTube Mockup Tool</a>. A project with intense deadlines during which, I wore many hats: sole full-stack dev on the Mockup Tool, dev lead on CMSification & improvement of the website, stakeholder management, on-boarding new ustwobies in agile process and QA.  Website Stack: GAE, python/jinja/webapp.  MockupTool stack: GAE, python/webapp, Angular6. <br>',

      '<a href="https://www.cochlear.com" target="_blank">Cochlear</a>: worked on "CoPilot", a pilot app designed to make use of hearing implant data to assist recipients in maximizing functionality of their implants for optimal hearing. In charge of python back-end, data crunching, and shepherding through AWS security architecture per Cochlear and regulatory standards.',

      '<a href="https://www.bluecats.com/" target="_blank">BlueCats</a>: sole engineer responsible for all technical decisions: tech stack, build pipeline, and hosting. Site built in Angular7, hosted on Netlify, with Contentful CMS.',

      '<a href="https://www.ustwo.com/blog/turning-language-into-light" target="_blank">Lumi: turning language into light</a>: an internal ustwo project using Philips Hue Lights, a Google Home, and node.js controller,  I built a Google voice driven web app that changed the lighting to reflect a person\'s mood. Read my <a href="https://www.ustwo.com/blog/turning-language-into-light" target="_blank">blog post</a>.',

      // TODO: figure out solution: this section becomes too tall, greater than 500px, and srews up the progress-work3.png image placement
      // '<a href="https://www.ustwo.com/blog/turning-language-into-light" target="_blank">Lumi</a>: An internal ustwo project I worked on with a designer, to create a light atmosphere that would reflect a person\'s mood. Using Philips Hue Lights, a Google Home, and a website and back-end node.js controller, and a beautiful UI design, I built an MVP that allowed user voice or text input to change the lighting in a room.  A project I\'d love to return to given the time, we had so many ideas for a fully immersive mood room (scent, music, massage chair!) that the user could command upon expressing their mood and state of mind. Read the <a href="https://www.ustwo.com/blog/turning-language-into-light" target="_blank">blog post</a> I wrote.'
    ],
  },
  {
    order: 16,
    company: "Freelance & Personal Projects",
    title: "Lifelong learner",
    location: "San Francisco,CA",
    startDate: "Then",
    endDate: "Always",
    items: [
      'Built this site starting with a pre-designed html/css template, a great learning experience in design and layout. Hosted on WordPress, served up from AWS S3, with AWS Microservices for the contact form.',
      'Built a site for a Computational Materials research group at the University of California Riverside utilizing AWS tools: a multi-part site hosted on S3 with Microservices to handle dynamic content. Technical goals for this project included maximizing use of flexbox, using npm for all build steps, creating a scripting process to parse <a href="http://www.bibtex.org/Format" target="_blank">bibtex</a> journal listings into interactive html content. <a href="https://github.com/autumnfjeld/dralexgreaney" target="_blank">Github repo.</a> ',
      'Design education via Coursera\'s <a href="https://www.coursera.org/specializations/graphic-design" target="_blank">Graphic Design Specialization</a> created by California Institute of the Arts.',
    ],
  },
  {
    order: 15,
    company: "Talentbin by Monster",
    title: "Software Engineer",
    location: "San Francisco, CA",
    startDate: "Apr 2016",
    endDate: "Nov 2018",
    items: [
      "Full-stack software engineer, with front-end emphasis, building and maintaining enterprise recruiting web application. Tech stack: Java, PHP, Javascript (Backbone, Ractive).",
      "Architect new code patterns with modern frameworks to replace, or coexist with, legacy code.",
      "Building chrome extension app that is a mini-version of our main site which pulls data from social network sites to match profiles in our database.",
      "Helping a growing team migrate from start-up culture to a well-defined agile-scrum work process. Creating documentation, proactively recommend improvements in communication and tools (git, slack, zapier, etc.).",
      "Run team lunch & learn sessions, motivating team to share technical learnings and challenges.",
      "Ruthless about getting team members to document their work in our git wiki!",
      "Supervised two computer science interns, guiding them through the complexities of a large codebase and teaching them in first experiences in front-end web development.",
    ],
  },
  {
    order: 14,
    company: "Ziploop",
    title: "Software Engineer",
    location: "Orinda, CA",
    startDate: "Apr 2014",
    endDate: "Apr 2016",
    items: [
      "Designed and implemented front-end components of mobile consumer app and two enterprise sites in AngularJS framework. Worked closely with President to design UI/UX.",
      "Collaborated with founding CTO to architect components, maintain build processes (grunt, gulp, git, unix scripts), choose frameworks, modules, and pushed to keep a clean, maintainable code base.",
      "Refactored many parts of chaotic, legacy codebase to maintainability and sanity (SASS, Angular best practices).",
      "Solved load time problems for large list of images, via ImageMagick script to produce uniform images, at the right balance of size and quality for optimal page performance. Continually strove for pixel perfect UI/UX.",
      "Managed collaborations between lead developer and non-technical president, supervised two junior engineers and an assistant to develop her technical graphic design skills.",
    ],
  },
  {
    order: 13,
    company: "Hack Reactor",
    title: "Student",
    location: "San Francisco",
    startDate: "Jan 2014",
    endDate: "Apr 2014",
    items: [
      "Part of a team contracted to develop prototype for commercial app. Designed back-end schema in Firebase, chosen for simple login authentication, direct database reference binding.",
      "Built app in AngularJS architecture, ported to mobile with Cordova and styled with Ionic.  Enforced strict modularity in AngularJS controllers and services to create efficient team workflow.",
      'Built a d3.js interactive force directed graph as an AngularJS directive, allowing users to click on a url-node to create an expansive node map of Wikipedia articles. <a href="http://wikiviz.herokuapp.com" target="_blank">Wikiviz</a>',
      // '#[a(href="http://wikiviz.herokuapp.com") Wikiviz]    #{#[a link](http://example.com)}}',
    ],
  },
  {
    order: 12,
    company: "NUMECA International",
    title: "Engineer & Consultant",
    location: "San Francisco",
    startDate: "Nov 2010",
    endDate: "Apr 2012",
    items: [
      "Provided consulting support to engineers at Boeing, Honeywell, etc. on using NUMECA’s computational fluid dynamics software tools, delivering solutions in meshing, solver setup, and post-processing.",
      "Improved fluid dynamics and meshing software as an integral part of the feedback loop for identifying and troubleshooting software bugs, user-friendliness, and scientific accuracy issues.",
      "Created and delivered technical training webinars twice a month to NUMECA’s user base.",
    ],
  },
  {
    order: 11,
    company: "Freelance Editor for Scientific Manuscripts",
    title: "English Editor ",
    location: "Global",
    startDate: "2010",
    endDate: "2014",
    items: [
      "Edited scientific manuscripts for non-native English speakers leading to publication in high profile scientific journals, including work for American Journal Experts, a global editing service for scientists.",
      "Built Joomla site (in my pre-web dev days) to advertise my services. Brought in business by advertising on Austrian websites.",
    ],
  },
  {
    order: 10,
    company: "University of Leoben, Austria",
    title: "Post Doctoral Researcher",
    location: "Leoben, Austria",
    startDate: "Jun 2006",
    endDate: "Nov 2010",
    items: [
      "Created a computational model of a large casting process to simulate flow and heat transfer phenomena for an Austrian steel making company.",
      "Expanded functionality of commercial simulation software with user defined functions in C and data processing scripts in scheme. Used Matlab extensively for data analysis. Tested feasibility of open source simulation framework, OpenFOAM.",
      "Defined experimental investigations for industry partner to get input and validation data for simulations.",
    ],
  },
  // {
  //     order: 0,
  //     company: '',
  //     title: '',
  //     location:'',
  //     startDate: '',
  //     endDate: '',
  //     items: [
  //         '',
  //         ''
  //     ]
  // }
];

/**
 * Skill set data
 * @type {*[]}
 */
var skills = [
  {
    title: "Languages",
    skills: [
      {
        id: 15,
        colorId: 1,
        skill: "HTML5 / CSS3",
        completed: "80%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Javascript",
        completed: "80%",
      },
      {
        id: 10,
        colorId: 2,
        skill: "TypeScript",
        completed: "80%",
      },
      {
        id: 60,
        colorId: 3,
        skill: "PHP",
        completed: "40%",
      },
      {
        id: 50,
        colorId: 4,
        skill: "Java",
        completed: "30%",
      },
      {
        id: 20,
        colorId: 1,
        skill: "Python",
        completed: "20%",
      },
    ],
  },
  {
    title: "Libraries/Frameworks",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "AngularJS",
        link: "https://angularjs.org/",
        completed: "80%",
      },
      {
        id: 10,
        colorId: 1,
        skill: "Angular6+",
        link: "https://angularjs.org/",
        completed: "80%",
      },
      {
        id: 20,
        colorId: 4,
        skill: "React",
        completed: "80%",
      },
      {
        id: 30,
        colorId: 2,
        skill: "Backbone",
        completed: "70%",
      },
      {
        id: 40,
        colorId: 3,
        skill: "Jasmine/Mocha",
        completed: "50%",
      },
      {
        id: 50,
        colorId: 4,
        skill: "jQuery",
        completed: "80%",
      },
      {
        id: 60,
        colorId: 1,
        skill: "Ractive.js",
        completed: "70%",
      },
      {
        id: 35,
        colorId: 2,
        skill: "D3.js",
        completed: "30%",
      },
      {
        id: 70,
        colorId: 3,
        skill: "Yii",
        completed: "30%",
      },
      {
        id: 12,
        colorId: 3,
        skill: "Jinja/Django",
        completed: "30%",
      },
    ],
  },
  {
    title: "Database/Backend/Server",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Mongo",
        completed: "60%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "MySQL",
        completed: "50%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Node.js",
        completed: "55%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "webapp2",
        completed: "70%",
      },
      {
        id: 5,
        colorId: 5,
        skill: "Google App Engine",
        completed: "70%",
      },
      {
        id: 12,
        colorId: 6,
        skill: "Flask",
        completed: "30%",
      },
    ],
  },
  {
    title: "Software/Tools/Design",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Sketch",
        link: "https://www.sketchapp.com/",
        completed: "40%",
        toolTip:
          "Using sketch regularly and it is becoming my go-to design tool",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Adobe Illustrator",
        completed: "60%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Photoshop",
        completed: "30%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Imagemagick",
        link: "http://www.imagemagick.org/",
        completed: "30%",
      },
      {
        id: 5,
        colorId: 1,
        skill: "GitHub",
        link: "http://www.github.com/autumnfjeld",
        completed: "85%",
      },
      {
        id: 6,
        colorId: 2,
        skill: "Gulp/Grunt",
        // link: 'http://www.github.com/autumnfjeld',
        completed: "85%",
      },
      {
        id: 7,
        colorId: 3,
        skill: "NPM as build tool",
        link: "https://github.com/autumnfjeld/dralexgreaney",
        completed: "85%",
      },
      {
        id: 8,
        colorId: 4,
        skill: "Latex",
        link: "https://www.latex-project.org",
        completed: "85%",
      },
      {
        id: 9,
        colorId: 1,
        skill: "Google Analytics",
        link: "https://analytics.google.com",
        completed: "85%",
      },
    ],
  },
  {
    title: "Amazon Web Services",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "SES",
        completed: "60%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Lamba Functions",
        completed: "60%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "API Microservices",
        completed: "60%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Route 53",
        completed: "60%",
      },
      {
        id: 5,
        colorId: 1,
        skill: "Simple Storage Service (S3) ",
        completed: "60%",
      },
      {
        id: 5,
        colorId: 2,
        skill: "Boto - AWS SDK for Python ",
        link: "https://aws.amazon.com/sdk-for-python/",
        completed: "60%",
      },
      {
        id: 6,
        colorId: 3,
        skill: "Kibana",
        link: "https://aws.amazon.com/elasticsearch-service/kibana/",
        completed: "85%",
      },
    ],
  },
  {
    title: "Leadership Skills",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Deliberate communicator",
        completed: "95%",
        toolTip:
          "I strive to keep coworkers informed and clearly communicate ideas and documentation",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Stakeholder management",
        completed: "90%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Distilling ambiguity",
        completed: "90%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Motivator",
        completed: "99%",
      },
      {
        id: 4,
        colorId: 1,
        skill: "Fun!",
        completed: "99%",
      },
    ],
  },
];

/**
 * Fun Facts Data
 * @type {Object}
 */
var funFacts = [
  {
    title: "Traveling",
    blurb:
      "I've lived on four continents: Africa, Europe, N. America, and Australia. And have traveled to all except Antarctica. Nothing is more thrilling than stepping into a new place on earth, eating tasty unfamiliar delicacies, smiling at new people, immersing in new cultures. Some recent explorations: Thailand, Bali, Auckland, Cuba, Baja California, Republic of Georgia, Portugal, Colombia, San Francisco, CA, Washington, D.C.",
  },
  {
    title: "Austria",
    blurb:
      "I was a post-doctoral researcher at a university in Austria for four years, in my computational fluid dynamics phase of life.  While there I was determined to become fluent in German and started weekly German-learning conversational group for us foreigners living in Leoben, Austria. I still work to improve my German skills via social groups and classes at a local community college.",
  },
  {
    title: "Creativity",
    blurb:
      "Occasional creator of colorful clothes, jewelry, bags (when I have time to dust off my sewing machine). I thrive on color. The combination of tech and creativity is why I fit so well in web development and design--and why I left Materials Science for WebDev. Current projects include painting the house I bought in 2020 every fun color possible!",
  },
  {
    title: "Volunteering",
    blurb:
      "I was a math tutor volunteer in a San Francisco middle-school, helping kids who are struggling with math meet state education requirements.  I've been a volunteer in many different roles over the years.  Past volunteer experiences: tutor for Women Who Code, high school prep classes for underprivileged kids. I wish I did more of this.",
  },
  {
    title: "Reading",
    blurb:
      "I received a trophy for reading 100 books in first grade--thank you Mom!  Now I generally divide my reading time between novels, skill improvement books, and <i>The New Yorker</i>.  Some of my favorite recent reads:  <i>Tomorrow, and Tomorrow, and Tomorrow</i>, <i>Mating</i>, <i>Lessons from the Edge: A Memoir</i>, <i>The Short and Tragic LIfe of Robert Peace</i>, <i>Creativity, Inc.</i>, <i>Beautiful Ruins</i>, <i>Where'd You Go Bernadette</i>.",
  },
  {
      title: 'Bucket List',
      blurb: 'Learn spanish fluently. Learn to play a musical instrument. Become a fashion designer (this one might have to wait til in my next life). Do something meaningful to get more girls into STEM fields. Visit all 50 US states & Puerto Rico. Become a foreign diplomat (this life is tooooo short!).'
  },
];

/**
 * Portfolio data
 * @type {{title1: string, title2: string, img: {primary: string, thumb: string, title: string}}}
 */
var portfolio = {
  title1: "This is title1",
  title2: "title2",
  img: {
    primary: "media/portfolio-item-zoom.jpg",
    thumb: "media/portfolio-item-thumb.jpg",
    title: "Image title",
  },
};

exports.app = {
  general: general,
  workExperience: workExperience,
  skills: skills,
  funFacts: funFacts,
  portfolio: portfolio,
};
