import { TypeAnimation } from "react-type-animation";
import imageLogo from "@/assets/img/hero/coffee_noel_3_final.jpg";
const Home_cv = () => {
  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img
                    src={imageLogo}
                    alt="hero"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="name_holder">
                  <h3>
                    Nguyễn <span>Thúc Hoàng</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    {/* I'm a <span className="arlo_tm_animation_text_word"></span> */}
                    I'm a{" "}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Web Developer",
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Freelancer",
                        3000,
                        // "We produce food for Guinea Pigs",
                        // 1000,
                        // "We produce food for Chinchillas",
                        // 1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      //   style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      placeholder={undefined}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a href="#about">
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home_cv;
