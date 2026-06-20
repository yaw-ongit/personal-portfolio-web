export const portfolio = {
  name: 'Muhammad Wisnu Haryanto',
  nickname: 'Yaw',
  title: 'Information Technology Undergraduate | UI/UX Enthusiast | Web Developer',
  tagline: 'Crafting digital experiences with thoughtful design and robust engineering.',
  email: 'wisnuharyanto1140@gmail.com',
  phone: '+62 896-5299-5642',
  linkedin: 'https://linkedin.com/in/mhdwisnu',
  
  education: {
    university: 'Telkom University Jakarta',
    program: 'Information Technology',
    gpa: '3.8',
  },

  about: `I'm a passionate IT undergraduate from Telkom University Jakarta with a keen interest in UI/UX design and web development. My expertise spans across design tools like Figma and web technologies including HTML, CSS, and JavaScript. I&apos;m dedicated to creating meaningful digital experiences and continuously exploring emerging technologies.`,

  skills: {
    technical: ['Figma', 'HTML/CSS', 'JavaScript', 'Web Development', 'User Research', 'Database Design', 'Microsoft Office'],
    soft: ['Communication', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Attention to Detail'],
  },

  projects: [
    {
      id: 1,
      title: 'PORTIS',
      subtitle: 'Mobile App for Elderly Care Services',
      description: 'A user-centered mobile application designed to connect elderly individuals with care services. Built with focus on accessibility and intuitive design. Utilized Figma for UI/UX design and user research methodologies.',
      technologies: ['Figma', 'User-Centered Design', 'Mobile Design', 'User Research'],
      image: 'healthcare technology elderly care',
      year: 2024,
    },
    {
      id: 2,
      title: 'GudangGo',
      subtitle: 'Warehouse Management System',
      description: 'A comprehensive warehouse management system designed to streamline inventory tracking and logistics operations. Implemented with modern web technologies and database design principles.',
      technologies: ['Web Development', 'Database Design', 'System Architecture', 'UML'],
      image: 'warehouse management logistics',
      year: 2024,
    },
    {
      id: 3,
      title: 'AHA',
      subtitle: 'Adaptive Habit Analyst',
      description: 'An intelligent habit tracking and analytics application that helps users understand and improve their daily routines. Features data visualization and personalized insights.',
      technologies: ['Web Application', 'Data Visualization', 'Analytics', 'User Interface'],
      image: 'productivity dashboard analytics',
      year: 2023,
    },
  ],

  publications: [
    {
      id: 1,
      title: 'Analysis of HTTP Vulnerabilities on Public Networks Using Wireshark',
      conference: 'JICT (Journal of Information and Communication Technology)',
      date: 'June 2025',
      description: 'Research on network security vulnerabilities and analysis techniques using industry-standard tools.',
      link: '#',
    },
  ],

  social: [
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:wisnuharyanto1140@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/mhdwisnu',
    },
  ],
}

export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]
