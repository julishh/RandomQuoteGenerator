import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
const Quote = ({ q, f }) => {
  return (
    <motion.div
      id="quote-box"
      
      animate={{ color: q.col }}
      transition={{ delay: 0.5 }}
    >
      <p id="text"><FontAwesomeIcon icon={faQuoteLeft} /> {q.quote}</p>
      <br />
      <p id="author">- {q.author}</p>
      <br />
      <div>
        <motion.button
          id="new-quote"
          style={{ backgroundColor: q.col }}
          animate={{ backgroundColor: q.col }}
          transition={{ delay: 0.5 }}
          onClick={f}
        >
          New quote
        </motion.button>
        <motion.a
          id="tweet-quote"
          style={{ backgroundColor: q.col }}
          animate={{ backgroundColor: q.col }}
          transition={{ delay: 0.5 }}
          target="_top"
          href="https://twitter.com/intent/tweet"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Quote;
