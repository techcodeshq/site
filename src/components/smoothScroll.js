import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const scroll = {
  container: "#___gatsby",
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
  },
};

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll;

    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    });

    // Exposing to the global scope for ease of use.
    locomotiveScroll.update();
    window.scroll = locomotiveScroll;

    locomotiveScroll.on("scroll", ScrollTrigger.update);
    locomotiveScroll.on("scroll", func => {
      if (func.scroll.y > 10) {
        document.documentElement.setAttribute("data-at-top", false);
      } else {
        document.documentElement.setAttribute("data-at-top", true);
      }

      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction);
    });

    ScrollTrigger.scrollerProxy("#___gatsby", {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#___gatsby").style.transform ? "transform" : "fixed",
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
