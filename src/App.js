import logo from './logo.svg';
import './App.css';

import React from "react";

const random = Math.random();


function MyQuote() {
  if (random < 0.2) {
    return (
      <blockquote>
        <p>The stars don't look bigger, but they do look brighter.</p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Sally_Ride">
            Sally Ride
          </a>
        </cite>
      </blockquote>
    );
  } else if (random >= 0.2 && random < 0.4){
    return (
        <blockquote>
        <p>That's one small step for a man, a giant leap for mankind.</p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Neil_Armstrong">
            Neil Armstrong
          </a>
        </cite>
      </blockquote>
    )
  } else if (random >= 0.4 && random <0.6){
    return (
        <blockquote>
        <p>The Universe is under no obligation to make sense to you.</p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson">
            Neil deGrasse Tyson
          </a>
        </cite>
      </blockquote>
    )
  } else if (random >= 0.6 && random <0.8){
    return (
        <blockquote>
        <p>Poyekhali! ( Let’s go!)</p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Yuri_Gagarin">
          Yuri Gagarin
          </a>
        </cite>
      </blockquote>
    )
  } else {
    return (
      <blockquote>
      <p>The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.</p>
      <cite>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Konstantin_Tsiolkovsky">
        Konstantin Tsiolkovsky
        </a>
      </cite>
    </blockquote>
  )
  }
}

export default MyQuote;



