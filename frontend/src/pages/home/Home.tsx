import { useState } from "react";
import { METADATA } from "@data/metadata";
import HeroSection from "@pages/home/HeroSection";
import InstallSection from "@pages/home/InstallSection";

export default function Home() {
    const [installCopied, setInstallCopied] = useState(false);

  const handleInstallCopy = async () => {
    await navigator.clipboard.writeText(`pip install ${METADATA.pypi.package}`);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <HeroSection installCopied={installCopied} handleInstallCopy={handleInstallCopy}/>
      <InstallSection installCopied={installCopied} handleInstallCopy={handleInstallCopy} />
    </div>
  );
}
