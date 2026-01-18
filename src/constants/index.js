import {
  mobile,
  backend,
  creator,
  web,
  SQL,
  Python,
  Excel,
  Pandas,
  NumPy,
  Powerbi,
  Tableau,
  Ethereum,
  Solidity, 
  TheGraph,
  API,
  mongodb,
  git,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
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
    title: 'Data Analyst & Visualization',
    icon: web,
  },
  {
    title: 'Web3 Data Analyst',
    icon: mobile,
  },
  {
    title: 'Blockchain Analyst',
    icon: backend,
  },
  {
    title: 'Product & Bussiness Insights',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'SQL',
    icon: SQL,
  },
  {
    name: 'Python',
    icon: Python,
  },
  {
    name: 'Excel',
    icon: Excel,
   
  },
  {
    name: 'Pandas',
    icon: Pandas,
  },
  {
    name: 'NumPy',
    icon: NumPy,
  },
  {
    name: 'Powerbi',
    icon: Powerbi,
  },
  {
    name: 'Tableau',
    icon: Tableau,
  },
  {
    name: 'Ethereum',
    icon: Ethereum,
  },
  {
    name: 'Solidity',
    icon: Solidity,
  },
  {
    name: 'TheGraph',
    icon: TheGraph,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'API',
    icon: API,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
];

const experiences = [
   {
    title: 'Senior Data Analyst',
    company_name: 'Shri diam Inc.',
    iconBg: '#E6DEDD',
    date: 'December 2024 - Present',
    points: [
      'Owned inventory & stock analytics for diamond manufacturing/sales operations—built Python/SQL data pipelines, automated reconciliation, and ensured high data quality across purchasing, production, and sales tables.',
      'Developed  dashboards tracking inventory turnover, aging stock, margin, order fulfillment, and demand trends to support weekly leadership reviews and revenue planning.',
      'Delivered actionable insights & forecasts (ABC/XYZ classification, replenishment triggers, anomaly detection) to optimize stock levels, reduce stockouts/overstock, and improve operational efficiency.',
      'Created SQL views and data models for repeatable self-service reporting, enabling faster root-cause analysis of inventory discrepancies (receiving, transfers, returns) and improving audit readiness.',
    ],
  },
  {
    title: 'Senior Product-Data Analyst',
    company_name: 'Ebizz infotech',
    iconBg: '#383E56',
    date: 'November 2020- May 2023',
    points: [
      'Led product & sales analytics across 1.2M+ records / 38 tables, delivering Power BI KPI dashboards (auto-refresh) and executive insights that improved feature adoption 14% and reduced churn by 3–5% QoQ.',
      'Built scalable ETL pipelines (Python, SQL) with automated validation/monitoring, raising data accuracy from ~92% → 99.5%, cutting manual reporting 30% (~8 hrs/week), and establishing data governance standards adopted company-wide.',
      'Collaborated with cross-functional teams (Product, Engineering, Marketing) to define metrics, design experiments (A/B tests), and analyze results, influencing product roadmap and marketing strategies that boosted MRR by 12%+ over 6 months.',
      'Mentored junior analysts and interns, fostering a data-driven culture through training sessions on SQL, data visualization best practices, and analytical thinking.',
      
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
