import { forwardRef } from "react";

interface LineNumbersProps {
  lineCount: number;
}

const LineNumbers = forwardRef<HTMLDivElement, LineNumbersProps>(
  ({ lineCount }, ref) => {
    return (
      <div
        ref={ref}
        className="select-none overflow-hidden border-r border-nova-border bg-nova-bg px-3 py-4 text-right font-mono text-xs text-nova-muted"
      >
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index} className="leading-7">
            {index + 1}
          </div>
        ))}
      </div>
    );
  },
);

LineNumbers.displayName = "LineNumbers";

export default LineNumbers;
