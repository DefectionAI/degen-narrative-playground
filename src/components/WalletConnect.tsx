
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, AlertCircle } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: { toString: () => string } }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
  isConnected: boolean;
  publicKey: { toString: () => string } | null;
}

const getProvider = (): PhantomProvider | null => {
  if (typeof window !== 'undefined' && 'solana' in window) {
    const provider = (window as any).solana;
    if (provider.isPhantom) return provider;
  }
  return null;
};

const WalletConnect: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const currentProvider = getProvider();
    setProvider(currentProvider);

    if (currentProvider) {
      // Try to eagerly connect
      currentProvider.connect({ onlyIfTrusted: true })
        .then(response => {
          setWalletAddress(response.publicKey.toString());
        })
        .catch(() => {
          // Silent error for auto-connect
        });

      // Setup connection event listeners
      currentProvider.on('connect', (publicKey: { toString: () => string }) => {
        setWalletAddress(publicKey.toString());
        toast({
          title: "Wallet connected!",
          description: `Connected to ${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`,
          duration: 3000,
        });
      });

      currentProvider.on('disconnect', () => {
        setWalletAddress(null);
        toast({
          title: "Wallet disconnected",
          description: "Your wallet has been disconnected",
          duration: 3000,
        });
      });

      currentProvider.on('accountChanged', (publicKey: { toString: () => string } | null) => {
        if (publicKey) {
          setWalletAddress(publicKey.toString());
          toast({
            title: "Account changed",
            description: `Connected to ${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`,
            duration: 3000,
          });
        } else {
          setWalletAddress(null);
        }
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      toast({
        title: "Wallet not found",
        description: (
          <div>
            <p>Please install Phantom wallet from <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-crypto-purple underline">phantom.app</a></p>
          </div>
        ),
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    try {
      const { publicKey } = await provider.connect();
      setWalletAddress(publicKey.toString());
    } catch (error) {
      console.error("Connection error:", error);
      toast({
        title: "Connection error",
        description: "Could not connect to wallet",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const disconnectWallet = async () => {
    if (provider) {
      try {
        await provider.disconnect();
        setWalletAddress(null);
      } catch (error) {
        console.error("Disconnection error:", error);
      }
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // No wallet connected
  if (!walletAddress) {
    return (
      <Button 
        onClick={connectWallet}
        className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity"
      >
        <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
      </Button>
    );
  }

  // Wallet connected
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
          <Wallet className="mr-2 h-4 w-4" /> {formatAddress(walletAddress)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => {
          navigator.clipboard.writeText(walletAddress);
          toast({
            title: "Address copied",
            description: "Wallet address copied to clipboard",
            duration: 2000,
          });
        }}>
          Copy address
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => {
          window.open(`https://explorer.solana.com/address/${walletAddress}`, '_blank');
        }}>
          View on Solana Explorer
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive" onClick={disconnectWallet}>
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletConnect;
