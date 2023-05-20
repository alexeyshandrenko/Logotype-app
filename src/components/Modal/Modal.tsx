import { FC } from "react";
import { IPost } from "@models/models";
import { ModalWrapper, ModalContent, ModalHeader } from "@styles/components";
import close from "@assets/icons/close-icon.svg";

interface ModalProps {
  onClose: () => void;
  post: IPost | undefined | null;
}

const Modal: FC<ModalProps> = ({ onClose, post }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <div className="img">
            <img src={post?.img} alt="picture" />
          </div>
          <p className="tags">{post?.tags}</p>
          <h2 className="title">{post && post.title}</h2>
          <p className="author">{post?.autor}</p>
          <p className="date">
            <span>{post?.date}</span>
            {post?.views} Views
          </p>
        </ModalHeader>

        <p className="text">{post && post.text}</p>
        <button onClick={onClose}>
          <img src={close} alt="close-icon" />
        </button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
