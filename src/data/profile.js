import achievements from './achievements.json';
import skills from './skills.json';
import projects from './projects.json';
import dsaStats from './dsa-stats.json';

export const profile = {
  basics: {
    name: 'Abhishek Singh',
    title: 'MERN Stack Developer | DSA Enthusiast',
    email: 'ashabhi1234567@gmail.com',
    location: 'India',
    summary: 'Building scalable full-stack applications and solving complex algorithmic problems.',
  },
  social: {
    github: 'https://github.com/abhishek11x',
    linkedin: 'https://linkedin.com/in/abhishek-singh089/',
  },
  contact: {
    phone: '+91 9877851278',
    whatsapp: 'https://wa.me/919877851278',
  },
  dsaProfiles: {
    leetcode: 'https://leetcode.com/abhishek_11z',
    hackerrank: 'https://hackerrank.com/ashabhi1234567',
    geeksforgeeks: 'https://auth.geeksforgeeks.org/user/ashabhi13q2y',
    codechef: 'https://www.codechef.com/users/abhishek11x',},
  education: [
    {
      school: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      status: 'Bachelor of Technology - Computer Science and Engineering; CGPA: 7.40',
      details: 'Currently pursuing the B.Tech program in Computer Science and Engineering.',
      date: "Aug'23 – Present",
    },
    {
      school: "kendriya vidyalaya School",
      location: 'Jalandhar, Punjab',
      status: 'Intermediate; Percentage: 70%',
      details: 'Completed intermediate education.',
      date: "Mar'22 – Mar'23",
    },
    {
      school: "kendriya vidyalaya School",
      location: 'Jalandhar, Punjab',
      status: 'Matriculation; Percentage: 88%',
      details: 'Completed matriculation.',
      date: "Apr'20 – Mar'21",
    },
  ],
  skills,
  projects,
  achievements,
  certifications: [
    {
      title: 'Summer training in DSA',
      issuer: 'Cipher Schools',
      date: "Jun-Aug'25",
      url: '/certificates/cipherschool.pdf',
      thumbnail: '/assets/cipher.png',
      description: 'Completed an intensive DSA training program covering essential data structures, algorithmic thinking, and structured problem-solving. Built a stronger foundation in logic building and coding efficiency.',
      color: '#F4C430',
    },
    {
      title: 'Problem Solving Intermediate',
      issuer: 'IBM',
      date: "Sept'24",
      url: '/certificates/IBM.pdf',
      thumbnail: '/assets/ibm.png',
      description: 'Gained a strong understanding of hardware components, operating system fundamentals, and the core concepts behind how computer systems function.',
      color: '#1A535C',
    },
    {
      title: 'Technology Job Simulation',
      issuer: 'Deloitte',
      date: "Apr'25",
      url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_YKRaj4LZrktZteKbr_1744445916773_completion_certificate.pdf',
      thumbnail: '/assets/Deloitte.png',
      description: 'Participated in Deloitte’s Technology Job Simulation, working on coding and development-based tasks to strengthen practical problem-solving and real-world technical understanding.',
      color: '#E85D4A',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: "Apr'25",
      url: '/certificates/nptelcloudcomputing.pdf',
      thumbnail: '/assets/nptel.png',
      description: 'Academic coursework on cloud service models, virtualization, and distributed systems. Explores scalability, fault tolerance, and resource management.',
      color: '#F4833D',
    },
    {
      title: 'DSA Self Paced',
      issuer: 'Neo Colab',
      date: "Dec'24",
      url: '/certificates/neocolabDSA.pdf',
      thumbnail: '/assets/neocolab1.png',
      description: 'Comprehensive training in data structures, algorithms, and competitive programming patterns. Focus on complexity analysis, optimization, and interview problem solving.',
      color: '#1A535C',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: "Dec'23",
      url: '/certificates/freecodecamp.pdf',
      thumbnail: '/assets/fcc.png',
      description: 'Certification in responsive web design with HTML, CSS, and accessibility standards. Applied modern layout techniques including Flexbox and Grid.',
      color: '#E8699A',
    },
  ],
  dsaStats,
  resume: {
    hero: {
      title: 'My Resume',
      subtitle: 'A quick snapshot of my education, skills, and projects.',
    },
    downloadUrl: '/certificates/AbhishekCV.pdf'
  },
};
