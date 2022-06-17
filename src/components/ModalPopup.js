import React from "react";

import { Modal } from "antd";
import 'antd/dist/antd.css';
const ModalPopup = ({
  title,
  visible,
  toggle,
  footer,
  height,
  width,
  content,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={toggle}
      footer={footer}
      height={height}
      width={width}
      content={content}
    >
      {content}
    </Modal>
  );
};

ModalPopup.defaultProps = {
  title: "Title",
  visible: false,
  footer: "Footer",
  height: "auto",
  width: "50vw",
  content: <p>Content</p>,
};

export default ModalPopup;