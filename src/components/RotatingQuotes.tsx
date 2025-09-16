import { useState, useEffect } from "react";

const RotatingQuotes = () => {
  const quotes = [
    { text: "Chess is life.", author: "Bobby Fischer" },
    { text: "Chess is the gymnasium of the mind.", author: "Blaise Pascal" },
    { text: "It's always better to sacrifice your opponent's pieces.", author: "Igor Smirnov" },
    { text: "An isolated Pawn spreads gloom all over the chessboard.", author: "Savielly Tartakower" },
    { text: "Tactics is what you do when there is something to do; strategy is what you do when there is nothing to do.", author: "Savielly Tartakower" },
    { text: "The beauty of the move lies not in its appearance but in the thought behind it.", author: "Aaron Nimzowitsch" },
    { text: "The ability to play chess is the sign of a gentleman. The ability to play chess well is the sign of a wasted life.", author: "Paul Morphy" }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto min-h-[80px] flex items-center justify-center">
      <div key={currentQuote} className="animate-fade-in text-center">
        <p className="mb-2">"{quotes[currentQuote].text}"</p>
        <p className="text-lg text-accent font-medium">— {quotes[currentQuote].author}</p>
      </div>
    </div>
  );
};

export default RotatingQuotes;