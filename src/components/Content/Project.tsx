import React, { useState } from "react";
import ModalOpenProject from "./ModalOpenProject";
const Project = () => {
  const dataProject = [
    {
      image: "img/svg/camera-diaphragm.svg",
      title: "Website Clone Quizlet",
      shortDescription:
        " Website giúp ghi nhớ các từ vựng tiếng anh bằng flashcard và cung cấp một số bài kiểm tra để ôn tập",
      detail: {
        description: "(Self-learning) Xây dựng website clone Quizlet", //mieu ta
        frontend: "React (JavaScript),Redux Toolkit, Ant Design",
        backend: "Node.Js (Express)", //cong nghe
        member: 1,
        responsive: "No",
        role: "Developer",
        demo: "Sản phẩm vẫn đang dần hoàn thiện, đang chạy ở localhost", //link video, link github, link deploy
        github: "https://github.com/thuchoang2003/SERN_Quizzlet",
      },
    },
    {
      image: "img/svg/new-tab.svg",
      title: "Website Clone Tiki",
      shortDescription:
        " Website thương mại điện tử hổ trợ việc tìm kiếm,quản lý và mua bán sách mang đến trải nghiệm tiện lợi cho người mua ",
      detail: {
        description:
          "(Self-learning) Xây dựng website thương mại điện tử clone Tiki", //mieu ta
        frontend: "React (JavaScript),Redux Toolkit, Ant Design",
        backend: "Node.Js (Express)", //cong nghe
        member: 1,
        responsive: "Yes",
        role: "Developer",
        demo: "https://frontend.nhodev.xyz", //link video, link github, link deploy
        github: "https://github.com/thuchoang2003/React_Fresher_Project",
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProjectForModal, setDataProjectForModal] = useState<{}>();
  return (
    <>
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Các dự án đã thực hiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        setIsModalOpen(!isModalOpen);
                        setDataProjectForModal(item);
                      }}
                    >
                      <div className="inner">
                        <div className="icon">
                          <img
                            className="svg"
                            src={item.image}
                            alt="camera-diaphragm"
                          />
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <ModalOpenProject
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          dataProjectForModal={dataProjectForModal}
        />
      </div>
    </>
  );
};
export default Project;
