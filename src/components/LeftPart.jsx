import desktop_logo from "@/assets/img/logo/desktop-logo.png";
const LeftPart = () => {
  return (
    <>
      <div className="arlo_tm_leftpart_wrap">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktop_logo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <a className="arlo_tm_resize" href="#">
            <i className="xcon-angle-left"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default LeftPart;
