import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "md";
  hideLabelOnMobile?: boolean;
  iconOnly?: boolean;
}

export default function CopyButton({
  text,
  className = "",
  size = "md",
  hideLabelOnMobile = false,
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed:", err);
    }
  };

  const sizeClasses = iconOnly
    ? size === "sm"
      ? "p-1.5"
      : "p-2"
    : size === "sm"
      ? "px-2 py-1 text-xs gap-1"
      : "px-3 py-1.5 text-sm gap-1.5";

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center ${sizeClasses} rounded font-mono font-medium transition-all duration-200 ${
        copied
          ? "bg-nova-green/20 text-nova-green border border-nova-green/30"
          : "bg-nova-border text-[#94A3B8] border border-nova-border hover:text-nova-text hover:border-nova-blue/40"
      } ${className}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <Check size={size === "sm" ? 12 : 14} />
      ) : (
        <Copy size={size === "sm" ? 12 : 14} />
      )}

      {!iconOnly && (
        <span className={hideLabelOnMobile ? "hidden sm:inline" : ""}>
          {copied ? "Copied" : "Copy"}
        </span>
      )}
    </button>
  );
}
