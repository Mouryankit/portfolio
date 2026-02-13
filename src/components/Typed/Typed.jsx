import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero({ strings }) {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: strings, // 👈 using prop here
      typeSpeed:100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [strings]); // 👈 dependency

  return (
      <span ref={textRef} className="typed-text"></span>
  );
}

export default Hero;
