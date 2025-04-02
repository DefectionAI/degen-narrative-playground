
import { Character } from '../types/character';

export const characters: Character[] = [
  {
    id: "char-001",
    name: "Satoshi's Disciple",
    role: "Bitcoin Maximalist",
    description: "A steadfast believer in Bitcoin's original vision, you view all other cryptocurrencies as inferior. Your unwavering conviction in Bitcoin's superiority guides all your decisions.",
    traits: ["Stubborn", "Principled", "Conservative", "Suspicious of Innovation"],
    image: "https://img.lovepik.com/free-png/20211204/lovepik-bitcoin-png-image_401442500_wh1200.png",
    popularity: 87,
    level: 4,
    unlocked: true
  },
  {
    id: "char-002",
    name: "DeFi Wizard",
    role: "Protocol Developer",
    description: "You're at the cutting edge of financial innovation, building complex systems that challenge traditional finance. Smart contracts are your spells, and liquidity is your magic potion.",
    traits: ["Creative", "Technical", "Risk-Taker", "Visionary"],
    image: "https://png.pngtree.com/png-clipart/20230418/original/pngtree-defi-decentralized-finance-3d-rendering-conceptual-image-png-image_9068851.png",
    popularity: 92,
    level: 5,
    unlocked: true
  },
  {
    id: "char-003",
    name: "The Whale",
    role: "Institutional Investor",
    description: "With billions at your disposal, your market moves cause waves that others must ride or drown in. You operate behind the scenes, manipulating prices and sentiment with calculated precision.",
    traits: ["Strategic", "Patient", "Calculating", "Influential"],
    image: "https://png.pngtree.com/png-clipart/20230504/original/pngtree-the-businessman-is-thinking-about-business-strategy-png-image_9139097.png",
    popularity: 76,
    level: 6,
    unlocked: true
  },
  {
    id: "char-004",
    name: "NFT Artist",
    role: "Digital Creator",
    description: "Your pixelated creations sell for millions, leaving traditional artists baffled. You navigate a world where art meets technology, constantly pushing the boundaries of digital ownership.",
    traits: ["Creative", "Trendsetter", "Adaptable", "Community-Focused"],
    image: "https://static.vecteezy.com/system/resources/previews/021/495/996/original/3d-render-nft-non-fungible-token-digital-crypto-art-concept-png.png",
    popularity: 83,
    level: 3,
    unlocked: true
  },
  {
    id: "char-005",
    name: "Crypto Influencer",
    role: "Social Media Personality",
    description: "Your tweets move markets. With millions of followers hanging on your every word, you walk the fine line between informing the masses and shilling your bags.",
    traits: ["Charismatic", "Persuasive", "Controversial", "Opportunistic"],
    image: "https://img.freepik.com/premium-photo/cartoon-character-with-microphone-headphones_665280-13499.jpg",
    popularity: 91,
    level: 4,
    unlocked: false
  },
  {
    id: "char-006",
    name: "Chain Guardian",
    role: "Network Validator",
    description: "You maintain the backbone of the blockchain, ensuring transaction integrity and network security. Your nodes never sleep, and your vigilance protects billions in value.",
    traits: ["Reliable", "Technical", "Dedicated", "Security-focused"],
    image: "https://img.freepik.com/premium-photo/3d-secure-icon-shield-with-lock-gradient-background_116137-6642.jpg",
    popularity: 68,
    level: 5,
    unlocked: false
  }
];

export const scenarios: Scenario[] = [
  {
    id: "scen-001",
    title: "The Meme Coin Pump",
    description: "A new dog-themed coin is taking the market by storm. Will you join the frenzy, denounce it as a scam, or try to understand the cultural phenomenon behind it?",
    difficulty: "Easy",
    rewards: ["500 XP", "Meme Master Badge", "Market Insight +2"],
    duration: "30 minutes",
    characters: ["char-001", "char-002", "char-004", "char-005"],
    unlocked: true,
    image: "https://img.freepik.com/premium-photo/cute-shiba-inu-dog-astronaut-helmet-space-digital-art-style-illustration-painting_743201-10726.jpg",
    participants: 2483
  },
  {
    id: "scen-002",
    title: "Regulatory Showdown",
    description: "A major country has announced new crypto regulations that could change everything. Navigate the political landscape, protect your interests, and shape public opinion.",
    difficulty: "Hard",
    rewards: ["1000 XP", "Political Strategist Badge", "Influence +3"],
    duration: "45 minutes",
    characters: ["char-002", "char-003", "char-006"],
    unlocked: true,
    image: "https://img.freepik.com/premium-photo/gavel-crypto-coins-cryptocurrency-regulation-concept_76964-7614.jpg",
    participants: 1872
  },
  {
    id: "scen-003",
    title: "The Hack Aftermath",
    description: "A major protocol has been exploited for millions. As key stakeholders, decide how to respond: fork the chain, negotiate with the hacker, or accept the loss as a costly lesson.",
    difficulty: "Expert",
    rewards: ["1500 XP", "Crisis Manager Badge", "Security Expertise +4"],
    duration: "60 minutes",
    characters: ["char-002", "char-003", "char-006"],
    unlocked: true,
    image: "https://img.freepik.com/premium-photo/fingerprint-binary-code-cyber-security-concept-digital-security-authentication_76964-8755.jpg",
    participants: 1345
  },
  {
    id: "scen-004",
    title: "NFT Collection Launch",
    description: "Your digital art collection is about to drop. Manage the community, set the right price, and navigate the thin line between artistic integrity and commercial success.",
    difficulty: "Medium",
    rewards: ["750 XP", "Digital Artist Badge", "Creativity +3"],
    duration: "40 minutes",
    characters: ["char-004", "char-005"],
    unlocked: true,
    image: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",
    participants: 2104
  },
  {
    id: "scen-005",
    title: "Layer 2 Debate",
    description: "Scalability solutions are competing for dominance. Represent your preferred solution and debate its merits against alternatives in this technical showdown.",
    difficulty: "Hard",
    rewards: ["1200 XP", "Scaling Expert Badge", "Technical Knowledge +4"],
    duration: "50 minutes",
    characters: ["char-001", "char-002", "char-006"],
    unlocked: false,
    image: "https://img.freepik.com/premium-photo/futuristic-cyber-network-background-with-blockchain-technology-concept_97886-1072.jpg",
    participants: 892
  }
];
