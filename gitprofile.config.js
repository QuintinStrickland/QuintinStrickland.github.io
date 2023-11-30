// gitprofile.config.js

const config = {
  github: {
    username: 'QuintinStrickland', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/quintin-strickland-040856247/',
    instagram: 'https://www.instagram.com/quintin.strickland/',
    email: 'quintinstrickland6@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1IIMtDjaj_RgOhpRk8wKSo82Vke3Ms3PT/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'HTML',
    'C#',
    'Programming',
    'DFDs',
    'ERDs',
    'MySQL',
    'CSS',
  ],
  experiences: [
    {
      company: 'Longhorn Steakhouse',
      position: 'Host',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://www.longhornsteakhouse.com/locations/nc/greenville/greenville-nc/5231',
    },
    {
      company: 'Amazon',
      position: 'Warehouse Associate',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://www.amazon.com/?tag=admarketus-20&ref=pd_sl_f3b3b74b3e3b41c086cc1b64abe5a8de767e106201b158bb94bb144c&mfadid=adm',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelor of Science in Business Adminstration ',
      from: '2020',
      to: 'Present',
    },

  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Conduct a Security Audit',
      description:
        'you will assume the role of a cybersecurity professional at XYZ Financial Services',
      link: 'https://docs.google.com/document/d/11vxceSiWw2nMpD3n4YFeAbm11wQFSc8R/edit?usp=drive_link&ouid=103909794234458299491&rtpof=true&sd=true',
    },
    {
      title: 'Professional Statement & Pitch Video',
      description:
        'A professional statement briefly explains who I am and what you are passionate about',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://docs.google.com/document/d/1cXiN4kSXkguS-RBZSlHD9eEcWnUQSsSV/edit?usp=drive_link&ouid=103909794234458299491&rtpof=true&sd=true',
    },
     {
      title: 'Use the NIST Cybersecurity Framework to Respond to a Security Incident',
      description:
        'You are a cybersecurity analyst working at XYZ Financial Services',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://docs.google.com/document/d/1OFg5mOpejog1FXX0rxCxeI-wa0ImNBq7/edit?usp=drive_link&ouid=103909794234458299491&rtpof=true&sd=true',
    },
     {
      title: 'Cameo narrated Home Network & Heatmap Presentations Narrated PPT',
      description:
        'Created a Home Network & Heatmap Presentations of my household',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://docs.google.com/presentation/d/1oEXWlI--cW7qW6iBEsEMYPzIgwH5LWnH/edit?usp=drive_link&ouid=103909794234458299491&rtpof=true&sd=true',
    },
     {
      title: 'Cloud Computing- AWS Cloud Practicioner Badge Activity',
      description: 'AWS Badge',
      imageUrl: 'https://drive.google.com/file/d/1_8mtZm__f4s5i5Y3GXRiRtnR_Yfx5GyB/view?usp=drive_link',
      link: 'https://drive.google.com/file/d/1x1iKGxOokN_-w4ZnjJlkUnxVGiFnMgUT/view',
    },
    {
      title: '(ISC)2 Certified in Cybersecurity Badge Activties',
      description: 'Linkedln (ISC)2 Badge',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://drive.google.com/file/d/137eU-fsoUOhXALFsW2thx48kMdVvewTg/view?usp=sharing',
    },
    {
      title: 'Cisco Packet Tracer',
      description: 'Cisco Packet Badge',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://drive.google.com/file/d/1D3kKAVLdLnK122CPjUmorDBabheOi7WL/view?usp=drive_link',
    },
    {
      title: 'Cybersecurity Activity',
      description: 'TryHackMe Web Application Security & PenTest Tools',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://docs.google.com/document/d/1nSQVXHzKC3fVpxCCSjjVtNsUOWncr4bR/edit?usp=drive_link&ouid=103909794234458299491&rtpof=true&sd=true',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
 
};

export default config;
