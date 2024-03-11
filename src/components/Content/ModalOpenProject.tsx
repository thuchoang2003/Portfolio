import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalOpenProject = (props: any) => {
  const { isModalOpen, setIsModalOpen, dataProjectForModal } = props;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(dataProjectForModal);
  return (
    <>
      <Modal
        title="Thông tin chi tiết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ul>
          <li>Miêu tả: {dataProjectForModal?.detail.description}</li>
          <li>Frontend: {dataProjectForModal?.detail.frontend}</li>
          <li>Backend: {dataProjectForModal?.detail.backend}</li>
          <li>
            Số lượng thành viên dự án: {dataProjectForModal?.detail.member}
          </li>
          <li>Mobile Responsive: {dataProjectForModal?.detail.responsive}</li>
          <li>Vai trò: {dataProjectForModal?.detail.role}</li>
          <li>
            Demo:{" "}
            <a href={dataProjectForModal?.detail.demo} target="_blank">
              {dataProjectForModal?.detail.demo}
            </a>
          </li>
          <li>
            Github:{" "}
            <a href={dataProjectForModal?.detail.github} target="_blank">
              {dataProjectForModal?.detail.github}
            </a>
          </li>
        </ul>
      </Modal>
    </>
  );
};
export default ModalOpenProject;
