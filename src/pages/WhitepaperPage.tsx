
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Download, FileText, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhitepaperPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-crypto-purple to-crypto-blue">
              Defection Whitepaper
            </h1>
            <p className="text-foreground/70">The technical and philosophical foundation of our ecosystem</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Download size={16} className="mr-2" />
              PDF Version
            </Button>
            <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue">
              <FileText size={16} className="mr-2" />
              Full Document
            </Button>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-lg border border-white/10 mb-8">
          <h2 className="text-2xl font-bold font-display mb-4">Abstract</h2>
          <p className="text-foreground/80 leading-relaxed">
            Defection represents a paradigm shift in the intersection of decentralized finance and interactive storytelling. 
            This whitepaper outlines our vision for a blockchain-powered ecosystem where narrative experiences, 
            community governance, and economic incentives converge. We introduce a novel token utility model that rewards 
            participation in our daily scripts and role-playing scenarios, creating a self-sustaining economy of creators, 
            players, and investors.
          </p>
        </div>
        
        <Tabs defaultValue="introduction">
          <TabsList className="bg-background/50 border border-white/10 mb-8">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="introduction" className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">Overview</h3>
              <p className="text-foreground/80 leading-relaxed">
                The Defection platform merges interactive fiction with blockchain technology to create 
                a new category of engagement. Our ecosystem is designed to incentivize creative contribution, 
                thoughtful participation, and community governance through a carefully balanced economic model.
              </p>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Vision & Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                We envision a future where storytelling becomes a collaborative, decentralized experience, 
                rewarding all participants fairly for their contributions while pushing the boundaries of 
                interactive narrative. Defection aims to pioneer this new frontier by building tools and 
                economic incentives that empower creators and engage audiences in unprecedented ways.
              </p>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Market Analysis</h3>
              <p className="text-foreground/80 leading-relaxed">
                The convergence of gaming, DeFi, and interactive storytelling represents an untapped market 
                with significant growth potential. Current Web3 narrative projects focus primarily on 
                collectibles rather than dynamic participation, creating an opportunity for Defection's 
                interactive approach to capture significant market share in this emerging sector.
              </p>
            </section>
          </TabsContent>
          
          <TabsContent value="technology" className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">Technical Architecture</h3>
              <p className="text-foreground/80 leading-relaxed">
                The Defection platform is built on a multi-layer technical stack that combines advanced 
                cryptographic protocols with interactive storytelling mechanisms. Our implementation uses 
                EVM-compatible smart contracts for core functionality, with customized solutions for 
                narrative progression and character development.
              </p>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Smart Contracts</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our ecosystem relies on several specialized smart contract systems:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>StoryNFT: Representing ownership and progress in narrative arcs</li>
                <li>CharacterSystem: Managing character attributes, skills, and progression</li>
                <li>RewardsDistributor: Algorithmically allocating tokens based on participation metrics</li>
                <li>GovernanceProtocol: Enabling community control over narrative direction and treasury allocation</li>
              </ul>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Security Measures</h3>
              <p className="text-foreground/80 leading-relaxed">
                Security is paramount in the Defection ecosystem. All smart contracts undergo rigorous 
                auditing by multiple independent security firms. We implement a multi-signature structure 
                for treasury management and maintain a bug bounty program to incentivize the responsible 
                disclosure of potential vulnerabilities.
              </p>
            </section>
          </TabsContent>
          
          <TabsContent value="tokenomics" className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">Token Utility</h3>
              <p className="text-foreground/80 leading-relaxed">
                The DFC token serves multiple functions within our ecosystem:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Governance: Voting on narrative directions and protocol changes</li>
                <li>Access: Unlocking premium storylines and character abilities</li>
                <li>Rewards: Compensating active participants and content creators</li>
                <li>Staking: Earning passive income through narrative validation</li>
              </ul>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Distribution Model</h3>
              <p className="text-foreground/80 leading-relaxed">
                The total supply of 100 million DFC tokens will be distributed as follows:
              </p>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="font-semibold text-crypto-blue">Community Rewards</p>
                  <p className="text-2xl font-bold">40%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="font-semibold text-crypto-blue">Team & Advisors</p>
                  <p className="text-2xl font-bold">20%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="font-semibold text-crypto-blue">Ecosystem Development</p>
                  <p className="text-2xl font-bold">15%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="font-semibold text-crypto-blue">Treasury</p>
                  <p className="text-2xl font-bold">15%</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="font-semibold text-crypto-blue">Initial Offering</p>
                  <p className="text-2xl font-bold">10%</p>
                </div>
              </div>
            </section>
          </TabsContent>
          
          <TabsContent value="governance" className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">Governance Framework</h3>
              <p className="text-foreground/80 leading-relaxed">
                Defection implements a progressive decentralization model, transitioning from initial 
                protocol governance by the core team to complete community control. Token holders can 
                submit proposals, debate potential changes, and vote on implementation.
              </p>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Proposal Mechanism</h3>
              <p className="text-foreground/80 leading-relaxed">
                The Defection governance system uses a two-tiered proposal structure:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Community Proposals: Suggested by any token holder with a minimum stake</li>
                <li>Protocol Proposals: Upgrades to core smart contracts and economic parameters</li>
              </ul>
              <p className="mt-3 text-foreground/80">
                Proposals follow a standardized lifecycle: submission, discussion period, voting period, 
                and implementation or rejection. Voting power scales logarithmically with token holdings 
                to prevent excessive influence by large token holders.
              </p>
            </section>
            
            <Separator className="my-6 bg-white/10" />
            
            <section>
              <h3 className="text-xl font-bold mb-3">Narrative Control</h3>
              <p className="text-foreground/80 leading-relaxed">
                A unique feature of Defection governance is the ability for community members to influence 
                story development. Through specialized voting mechanisms, participants can suggest new 
                narrative branches, character introductions, and plot developments that will be incorporated 
                into the official canon based on community support.
              </p>
            </section>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-xl font-bold mb-4">References & Resources</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Link size={16} className="mt-1 text-crypto-blue" />
              <a href="#" className="text-foreground/80 hover:text-crypto-blue transition-colors">
                Technical Implementation Details (Github Repository)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Link size={16} className="mt-1 text-crypto-blue" />
              <a href="#" className="text-foreground/80 hover:text-crypto-blue transition-colors">
                Economic Model Simulations
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Link size={16} className="mt-1 text-crypto-blue" />
              <a href="#" className="text-foreground/80 hover:text-crypto-blue transition-colors">
                Security Audit Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
