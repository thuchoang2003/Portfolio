import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap" style={{ paddingBottom: "70px" }}>
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng Frontend</h4>
                </div>
                <li>Cắt/Ghép template Website</li>
                <li>Framework/Library: ReactJs,Redux-Toolkit,Boostrap,Antd</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/JavaScript</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          ReactJS (JavaScript/TypeScript)
                        </span>
                        <span className="number">90%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={90}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="75"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Design UI/UX</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={70}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng Backend</h4>
                </div>
                <li>Ngôn ngữ lập trình: JavaScript</li>
                <li>Restful APIs,Basic JWT</li>
                <li>Framework: Express</li>
                <li>Database: MySQL/MongoDB</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">NodeJs</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                      </div>
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Database MySQL/MongoDB</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        <ProgressBar
                          completed={80}
                          bgColor="#333"
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
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
export default Skill;
