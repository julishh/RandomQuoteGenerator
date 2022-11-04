import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Quote from "./components/Quote";
function App() {
  const [quote, setQuote] = useState({
    quote: null,
    author: null,
    col: null,
  });

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const getQuote = async () => {
    let fetchQuote = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    let rNumber = Math.floor(Math.random() * 100 + 1);
    let num = Math.floor(Math.random() * 12 + 1);

    setQuote(fetchQuote.data.quotes[rNumber]);

    setQuote((v) => ({
      ...v,
      col: colors[num],
    }));
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <>
      <motion.div
        className="App"
        style={{ backgroundColor: quote.col }}
        animate={{ backgroundColor: quote.col }}
        transition={{ delay: 0.5 }}
      >
        <Quote q={quote} f={getQuote} />
      </motion.div>
    </>
  );
}

export default App;
