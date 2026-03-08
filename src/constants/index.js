import {
  mobile,
  Grubhub,
  Deloitte,
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
    title: 'Data Analytics & Visualization',
    icon: web,
  },
  {
    title: 'Data Engineering & ETL Pipelines',
    icon: mobile,
  },
  {
    title: 'Advanced Data Analysis',
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
  // {
  //   name: 'Ethereum',
  //   icon: Ethereum,
  // },
  // {
  //   name: 'Solidity',
  //   icon: Solidity,
  // },
  // {
  //   name: 'TheGraph',
  //   icon: TheGraph,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'API Integration',
    icon: API,
  },
 
];

const experiences = [
   {
    title: 'Data Analyst',
    company_name: 'GrubHub',
    iconBg: '#f5f4f4',
    icon: Grubhub,
    date: 'Octomber 2024 - Present',
    points: [
      'Developed interactive Power BI dashboards to track food delivery platform metrics, restaurant performance KPIs, and order trends, helping teams make faster data-driven decisions.',
      'Performed exploratory data analysis (EDA) on customer ordering behavior to identify retention risks and engagement patterns, contributing to improved repeat order rates.',
      'Built Python-based ETL pipelines to automate data ingestion from multiple systems into Azure SQL, reducing manual reporting effort and improving data reliability.',
      'Designed SQL Server and Snowflake views to enable self-service analytics for product, marketing, and operations teams.',
      'Collaborated with cross-functional teams (product, engineering, operations) using Jira and Confluence to deliver insights that improved delivery operations and platform performance.',
    ],
  },
  {
    title: 'Data Analyst',
    company_name: 'Deloitte',
    iconBg: '#e9ebf1',
    icon: Deloitte,
    date: 'Feb 2021 – Mar 2023',
    points: [
      'Created Power BI and Tableau dashboards to track KPIs, trend analysis, and resource utilization, enabling leadership to identify operational bottlenecks and improve performance.',
      'Designed and maintained SQL pipelines using MySQL and PostgreSQL to extract, transform, and load large client datasets, improving reporting accuracy and data reliability.',
      'Developed Python-based predictive models to forecast revenue and operational trends, helping teams make data-driven strategic decisions.',
      'Executed ETL pipelines and data validation processes in Azure SQL and Synapse Analytics to ensure high-quality datasets for enterprise reporting and governance compliance.',
      'Conducted A/B testing and cohort analysis to evaluate workflow changes and operational processes, providing insights for business optimization.',
      'Presented data storytelling reports and KPI insights to stakeholders, translating complex analytics into clear business recommendations and improving decision-making efficiency.',
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      'Priyansi has a strong analytical mindset and consistently transforms complex datasets into actionable insights. Her ability to build dashboards and communicate results clearly makes her a valuable asset to any data-driven team.',
    name: 'Rahul Mehta',
    designation: 'Senior Data Analytics Manager',
    company: 'GrubHub',
    image: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=6D28D9&color=fff&size=256'
  }
  ,
  {
    testimonial:
      'Priyansi demonstrated excellent skills in Python, SQL, and BI tools. Her work on data pipelines and visualization dashboards significantly improved our reporting efficiency.',
    name: 'Amit Sharma',
    designation: 'Lead Data Engineer',
    company: 'Deloitte',
    image: 'https://ui-avatars.com/api/?name=Amit+Sharma&background=2563EB&color=fff&size=256'
  },
    {
    testimonial:
      'Priyansi is detail-oriented and proactive in solving data challenges. Her ability to combine technical analysis with business insights makes her stand out as a data professional.',
    name: 'Dr. Hong Man',
    designation: 'Professor of Information Systems',
    company: 'Stevens Institute of Technology',
    image: 'https://ui-avatars.com/api/?name=Dr.+Hong+Man&background=101010&color=fff&size=256'
    }
  
];

const projects = [
  {
    name: 'Customer Retention & Churn Prediction Analytics',
    description:
      'Predictive analytics project identifying at-risk customers using Python, SQL, and machine learning to improve retention strategies.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'SQL',
        color: 'green-text-gradient',
      },
      {
        name: 'Power BI',
        color: 'pink-text-gradient',
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/priyaraval12/NFT-Marketplace',
  },
  
  {
    name: 'SaaS Feature Adoption & Usage Analysis',
    description:
      'Product analytics project analyzing user behavior and feature adoption using Python, SQL, and BI dashboards to drive product optimization.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'SQL',
        color: 'green-text-gradient',
      },
      {
        name: 'Tableau',
        color: 'pink-text-gradient',
      },
      {
        name: 'Snowflake',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/priyaraval12/UrbanClapXHuddle',
  },
  // {
  //   name: 'Recognify',
  //   description:
  //     'I have developed the front end for our project Recognify, an open decentralized platform where users own their profiles. Our achievement includes winning two bounty prizes at ETHIndia.',
  //   tags: [
  //     {
  //       name: 'reactjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'solidity',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'lighthouse , mantle',
  //       color: 'pink-text-gradient',
  //     },
    
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/priyaraval12/Recognify',
  // },
  // {
  //   name: 'BlockTube',
  //   description:
  //     'I built the front end for BlockTube, a decentralised YouTube competitor on the Polygon network. It makes use of The Graph and incorporates Storage by FileCoin and IPFS for safe, private video production, sharing, and viewing.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'solidity',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'CSS',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'Hardhat',
  //       color: 'blue-text-gradient',
  //     },
  //   ],
  //   image: Blocktube,
  //   source_code_link: 'https://github.com/priyaraval12/BlockTube',
  // },
 
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
  // {
  //   name: 'Open Bazaar',
  //   description:
  //     'his is a decentralized version of the Gumroad.com. This is where users can login using their wallets. They can mint any file as ERC1155 token and set its attributes like supply, price, cover image',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'solidity',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'CSS , filecoin',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'Hardhat , polygon',
  //       color: 'blue-text-gradient',
  //     },
  //   ],
  //   image:openbazar,
  //   source_code_link: 'https://open-bazaar.vercel.app/',
  // },
  // {
  //   name: 'FNS - Flow Name Service',
  //   description:
  //     'FNS (Flow Name Service) provides a streamlined solution for naming and managing resources within the Flow blockchain ecosystem.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'solidity',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'CSS',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
      
  //   ],
  //   image: FNS,
  //   source_code_link: 'https://fns-flow-name-service.vercel.app/',
  // },
  
  // {
  //   name: 'Freelance-Block',
  //   description:
  //     'As a freelancer, I prioritize collaboration and communication with clients to ensure successful outcomes for all types of projects',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
   
  //     {
  //       name: 'CSS',
  //       color: 'pink-text-gradient',
  //     },
     
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/priyaraval12/Freelance-Block',
  // },
  // {
  //   name: 'OLD-My-Portfolio',
  //   description:
  //       'Hi, I am Priyanshi, a Web3 Frontend Developer with React JS and smart contract experience. I prioritize client collaboration and aim to create amazing projects together.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'Tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //     {
  //       name: 'Typescript',
  //       color: 'green-text-gradient',
  //     },

  //   ],
  //   image: Portfolio,
  //   source_code_link: 'https://github.com/priyaraval12/My-Portfolio',
  // },
  
  
];

export { services, technologies, experiences,testimonials, projects };
