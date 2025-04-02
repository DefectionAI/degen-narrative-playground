
import { Script } from "../types/script";

export const scripts: Script[] = [
  {
    id: "script-001",
    title: "ETH Integration Milestone",
    date: new Date().toISOString().split('T')[0], // Today's date
    content: `SCENE: A modern tech office with multiple screens displaying Ethereum charts. VITALIK sits at a circular table with DEVELOPERS.

VITALIK: (examining code) The layer-2 integration looks solid. Throughput is up 400% in testing.

DEVELOPER 1: (nodding) The danksharding implementation is exceeding expectations. But there's something else...

VITALIK: (raising eyebrow) Something else?

DEVELOPER 2: (excitedly) The institutional flows we're seeing since the ETFs launched. It's unprecedented.

(A notification pings. They look at a screen showing major banks announcing Ethereum custody solutions)

VITALIK: (calmly) Remember when they called us a "science experiment"?

DEVELOPER 1: (smiling) Well, science just became mainstream.

VITALIK: (standing) That was never the goal though, was it? The goal was always to build...

ALL TOGETHER: "Unstoppable applications."

(CAROLYN enters the room unexpectedly)

CAROLYN: Unstoppable, yes. But can they scale without sacrificing what makes Ethereum... Ethereum?

[END SCENE]`,
    characters: ["Vitalik Buterin", "Ethereum Developer 1", "Ethereum Developer 2", "Carolyn (Investor)"],
    tags: ["Ethereum", "Layer 2", "Scaling", "ETF"],
    interactions: 243,
    unlocked: true
  },
  {
    id: "script-002",
    title: "Bitcoin ETF Drama",
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday's date
    content: `SCENE: A Wall Street investment firm. Trading screens flash with Bitcoin price movements. FUND MANAGER stands before a team of ANALYSTS. Market tension is palpable.

FUND MANAGER: (reviewing dashboard) Six billion in outflows yesterday. But the price is holding.

ANALYST 1: (concerned) The selling pressure was expected after the unlock period, but the volume is beyond our models.

FUND MANAGER: (dismissively) Models are just models. Look at the on-chain data. Long-term holders aren't budging.

ANALYST 2: (bringing up a chart) There's something else. Look at the derivatives market. Perpetual funding rates are turning positive again.

FUND MANAGER: (nodding slowly) The leverage is shifting... the short squeeze could be biblical.

(Door opens, CEO enters looking tense)

CEO: (urgently) We need to reverse our position. NOW.

FUND MANAGER: (surprised) What? Based on what?

CEO: (showing phone) Galaxy just announced. They're upgrading their Bitcoin allocation from 5% to 25% of portfolio.

(Screens suddenly flash green as Bitcoin price jumps)

ANALYST 1: (stunned) What just happened?

FUND MANAGER: (smiling) The game theory just played out. First mover advantage.

[END SCENE]`,
    characters: ["Fund Manager", "Wall Street Analyst 1", "Wall Street Analyst 2", "Investment Firm CEO"],
    tags: ["Bitcoin", "ETF", "Institutional", "Market Movement"],
    interactions: 412,
    unlocked: true
  },
  {
    id: "script-003",
    title: "The Regulatory Storm",
    date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0], // 2 days ago
    content: `SCENE: A congressional hearing room. REGULATORS sit at an elevated panel, while EXCHANGE CEOS face them from a lower table. Tension fills the air.

REGULATOR 1: (firmly) Your exchange facilitated $4 billion in transactions without proper KYC protocols. How do you explain this?

EXCHANGE CEO 1: (confidently) Those figures are misrepresented. Our compliance team flags and blocks suspicious activity with 99.7% accuracy.

REGULATOR 2: (skeptically) Yet you operate in jurisdictions with minimal oversight.

EXCHANGE CEO 2: (interjecting) With respect, we choose jurisdictions with regulatory clarity. The U.S. has provided anything but that.

(Murmurs from the audience)

REGULATOR 1: (leaning forward) Are you suggesting U.S. regulations are the problem?

EXCHANGE CEO 1: (measured) I'm suggesting that innovation follows clarity. Singapore, Hong Kong, the UAE - they've all provided frameworks that protect consumers while allowing innovation.

REGULATOR 2: (tersely) Innovation cannot come at the expense of national security.

EXCHANGE CEO 2: (passionately) Nor should security come at the expense of American competitiveness. We're watching a $3 trillion industry build its foundations outside U.S. borders.

(A young AIDE rushes in, whispers to REGULATOR 1)

REGULATOR 1: (expression changing) We'll take a brief recess.

(As people start to move, EXCHANGE CEOs exchange knowing glances)

EXCHANGE CEO 1: (quietly) They've seen the capital flight data.

EXCHANGE CEO 2: (nodding) Too little, too late?

[END SCENE]`,
    characters: ["Regulator 1", "Regulator 2", "Exchange CEO 1", "Exchange CEO 2"],
    tags: ["Regulation", "Compliance", "Exchanges", "Policy"],
    interactions: 357,
    unlocked: true
  },
  {
    id: "script-004",
    title: "DeFi Revolution Continues",
    date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0], // 3 days ago
    content: `SCENE: A virtual meeting space represented by futuristic holograms. DEFI FOUNDERS from different protocols interact in the digital environment.

FOUNDER 1: (displaying metrics) Our TVL is up 47% since the real-yield narrative took hold. Users want sustainable returns.

FOUNDER 2: (skeptically) But you're still relying on VC exit liquidity. Those tokenomics won't survive a bear market.

FOUNDER 3: (interrupting) Speaking of which, has anyone seen the latest regulatory guidance? They're coming for stablecoins next.

(Digital display shows policy document)

FOUNDER 1: (analyzing) They're differentiating between algorithmic and fully-backed stables. This is actually... not terrible?

FOUNDER 2: (surprised) Regulatory clarity? In this economy?

FOUNDER 3: (thoughtful) It means they're accepting reality. Stablecoins transfer volume exceeded Visa last quarter. They can't ignore us anymore.

(A new participant materializes - INSTITUTION REP)

INSTITUTION REP: (professionally) That's precisely why my firm wants to discuss integration opportunities. Our clients are demanding DeFi exposure.

(The founders look at each other in shock)

FOUNDER 2: (suspicious) Your firm was calling us a Ponzi scheme last year.

INSTITUTION REP: (smiling) Last year we didn't have a $2 billion client allocation mandate for DeFi. Funny how that works, isn't it?

[END SCENE]`,
    characters: ["DeFi Founder 1", "DeFi Founder 2", "DeFi Founder 3", "Institutional Representative"],
    tags: ["DeFi", "Stablecoins", "Institutional", "Regulation"],
    interactions: 298,
    unlocked: true
  },
  {
    id: "script-005",
    title: "The Meme Coin Phenomenon",
    date: new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0], // 4 days ago
    content: `SCENE: A bustling crypto conference. VETERAN TRADER and INFLUENCER are on a panel while RETAIL INVESTORS huddle around, recording with their phones.

MODERATOR: (to panel) In this market cycle, meme coins have outperformed blue chips. How do you explain this?

VETERAN TRADER: (sighing) Market inefficiency and gambling psychology. Nothing more.

INFLUENCER: (energetically) Wrong! It's community ownership and participatory culture. People don't just want returns, they want belonging.

(RETAIL INVESTORS cheer)

VETERAN TRADER: (incredulously) Belonging? You're describing a casino as a social club.

INFLUENCER: (smiling) The best casinos ARE social clubs. But that's not what's happening. These communities are funding developers, building products...

VETERAN TRADER: (interrupting) On dog-themed tokens? Please.

(A notification rings across multiple phones simultaneously)

RETAIL INVESTOR 1: (excited) PEPE just announced a DAO!

RETAIL INVESTOR 2: (looking at phone) Market cap just jumped 80%!

VETERAN TRADER: (putting head in hands) This is why we can't have nice things.

INFLUENCER: (to Veteran Trader) You keep analyzing the market like it's 2017. New cycle, new rules. The line between memes and movements has never been thinner.

[END SCENE]`,
    characters: ["Veteran Trader", "Crypto Influencer", "Retail Investor 1", "Retail Investor 2", "Moderator"],
    tags: ["Meme Coins", "Market Psychology", "Community", "Trends"],
    interactions: 513,
    unlocked: true
  }
];
