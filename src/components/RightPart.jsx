import About from "./Content/About";
import Contact from "./Content/Contact";
import Home_cv from "./Content/Home_cv";
import Project from "./Content/Project";
import Skill from "./Content/Skill";

const RightPart = () => {
  return (
    <>
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <Home_cv />

          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- /ABOUT --> */}

          {/* <!-- SKILLS --> */}
          <Skill />
          {/* <!-- /SKILLS --> */}

          {/* <!-- SERVICES --> */}
          <Project />
          {/* <!-- /SERVICES --> */}

          {/* <!-- PORTFOLIO --> */}

          {/* <!-- /PORTFOLIO --> */}

          {/* <!-- TESTIMONIALS --> */}

          {/* <!-- /TESTIMONIALS --> */}

          {/* <!-- COUNTERBOX --> */}
          {/* <!-- /COUNTERBOX --> */}

          {/* <!-- NEWS --> */}

          {/* <!-- /NEWS --> */}

          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
};
export default RightPart;
