import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  Blocktube,
  Unite3,
  FNS,
  Portfolio,
  openbazar
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Web3 Backend Developer',
    company_name: 'The Brand Global LTD.',
    iconBg: '#383E56',
    date: 'September 2021 - March 2023',
    points: [
      'Developing and maintaining web applications using React.js and smart contract related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Work on Multipal chain and inteigration',
      
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Universe Technologies',
    iconBg: '#E6DEDD',
    date: 'internship ',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  
];

const testimonials = [
  
];

const projects = [
  {
    name: 'NFT-Marketplace',
    description:
      'Welcome to The Brand Globals NFT Marketplace! Our platform allows creators to mint and sell their unique digital assets as non-fungible tokens (NFTs) on the blockchain.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/priyaraval12/NFT-Marketplace',
  },
  
  {
    name: 'UrbanClapXHuddle',
    description:
      'A decentralised web service that allows consumers to pay MATIC consultants fees to communicate with employees like plumbers, carpenters, electricians, etc. via one-on-one video calls utilising Huddle01.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Solidity',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/priyaraval12/UrbanClapXHuddle',
  },
  {
    name: 'Recognify',
    description:
      'I have developed the front end for our project Recognify, an open decentralized platform where users own their profiles. Our achievement includes winning two bounty prizes at ETHIndia.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'lighthouse , mantle',
        color: 'pink-text-gradient',
      },
    
    ],
    image: tripguide,
    source_code_link: 'https://github.com/priyaraval12/Recognify',
  },
  {
    name: 'BlockTube',
    description:
      'I built the front end for BlockTube, a decentralised YouTube competitor on the Polygon network. It makes use of The Graph and incorporates Storage by FileCoin and IPFS for safe, private video production, sharing, and viewing.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Hardhat',
        color: 'blue-text-gradient',
      },
    ],
    image: Blocktube,
    source_code_link: 'https://github.com/priyaraval12/BlockTube',
  },
 
  {
    name: 'UNITE-3',
    description:
      'Contribution Power Gating mechanism by Empowering Open Source Contributors , UNITE-3 addresses recognition and compensation challenges for Web3 open-source contributors, enabling anonymous expertise demonstration.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Hardhat',
        color: 'blue-text-gradient',
      },
    ],
    image: Unite3,
    source_code_link: 'https://devfolio.co/projects/unite-349b',
  },
  {
    name: 'Open Bazaar',
    description:
      'his is a decentralized version of the Gumroad.com. This is where users can login using their wallets. They can mint any file as ERC1155 token and set its attributes like supply, price, cover image',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS , filecoin',
        color: 'pink-text-gradient',
      },
      {
        name: 'Hardhat , polygon',
        color: 'blue-text-gradient',
      },
    ],
    image:openbazar,
    source_code_link: 'https://open-bazaar.vercel.app/',
  },
  {
    name: 'FNS - Flow Name Service',
    description:
      'FNS (Flow Name Service) provides a streamlined solution for naming and managing resources within the Flow blockchain ecosystem.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      
    ],
    image: FNS,
    source_code_link: 'https://fns-flow-name-service.vercel.app/',
  },
  
  {
    name: 'Freelance-Block',
    description:
      'As a freelancer, I prioritize collaboration and communication with clients to ensure successful outcomes for all types of projects',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
   
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
     
    ],
    image: tripguide,
    source_code_link: 'https://github.com/priyaraval12/Freelance-Block',
  },
  {
    name: 'OLD-My-Portfolio',
    description:
        'Hi, I am Priyanshi, a Web3 Frontend Developer with React JS and smart contract experience. I prioritize client collaboration and aim to create amazing projects together.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },

    ],
    image: Portfolio,
    source_code_link: 'https://github.com/priyaraval12/My-Portfolio',
  },
  
  
];

export { services, technologies, experiences,testimonials, projects };
