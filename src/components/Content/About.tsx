import imageAbout from "@/assets/img/about/image_about_2.jpg";
import cv_example from "@/assets/cv_example.pdf";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner" data-img-url={imageAbout}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Hi there... and I'm a{" "}
                      <TypeAnimation
                        sequence={["Web Developer", 2000, "Freelancer", 3000]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        placeholder={undefined}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào, tôi là Hoàng, hiện đang là sinh viên năm 3, Khoa
                      Công Nghệ Thông Tin, Trường Đại Học Bách Khoa - Đại Học Đà
                      Nẵng. Ngoài việc học tập, tôi có sở thích nghe nhạc,du
                      lịch..., từ đó mở rộng tầm nhìn và khám phá thêm về bản
                      thân. Là một sinh viên tôi rất muốn tìm kiếm một công việc
                      để nâng cao khả năng của bản thân và học hỏi thêm kinh
                      nghiệm.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Ngày sinh:</label> 17.11.2003
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>GPA:</label> 3.83
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Thành phố:</label> Đà Nẵng, Việt Nam
                        </span>
                      </li>
                      {/* <li>
                        <span>
                          <label>Interests:</label> Soccer, UFC
                        </span>
                      </li> */}
                      <li>
                        <span>
                          <label>Đang theo học:</label> Trường Đại Học Bách Khoa
                          Đà Nẵng
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Chuyên ngành:</label> Công nghệ phần mềm
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Facebook:</label>
                          <a
                            href="https://www.facebook.com/profile.php?id=100017717868787"
                            target="_blank"
                          >
                            https://www.facebook.com/profile.php?id=100017717868787
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:nguyenthuchoang17112003@gmail.com">
                            nguyenthuchoang17112003&#64;gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cv_example} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                      {/* <li className="anchor">
                        <a href="#contact">
                          <span>Send Message</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
