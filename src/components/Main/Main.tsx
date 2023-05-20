import { useState, useEffect, useContext } from "react";
import { Container, Content, ContentWrapper } from "@styles/components";
import Post from "@components/Post/Post";
import { IPost } from "@models/models";
import PostService from "@services/PostService";
import Modal from "@components/Modal/Modal";
import ModalPortal from "@components/Modal/ModalPortal";
import { PostDataContext } from "@/App";
import { isEmptyArray } from "@utils/functions";

const Main = () => {
  const { setPosts, posts, findedPosts, activateSearch } =
    useContext(PostDataContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<IPost | undefined | null>(
    null
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = showModal ? "hidden" : "visible";
  }, [showModal]);

  const getAllPosts = async (): Promise<void> => {
    try {
      const { data } = await PostService.getPosts();
      if (data) {
        setPosts(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const findPostById = (title: string) => {
    setSelectedPost(posts.find((el) => el.title === title));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Content>
        {activateSearch && isEmptyArray(findedPosts) && (
          <p>
            Make sure all words are spelled correctly. Try different keywords.
            Try more general keywords.
          </p>
        )}
        <Container>
          <ContentWrapper>
            {!activateSearch &&
              !isEmptyArray(posts) &&
              posts.map(
                (
                  { title, text, tags, autor, img, img_2x, date, views },
                  index
                ) => {
                  return (
                    <Post
                      key={index}
                      id={index}
                      title={title}
                      text={text}
                      tags={tags}
                      autor={autor}
                      img={img}
                      img_2x={img_2x}
                      date={date}
                      views={views}
                      selectPost={findPostById}
                    />
                  );
                }
              )}
            {activateSearch &&
              !isEmptyArray(findedPosts) &&
              findedPosts.map(
                (
                  { title, text, tags, autor, img, img_2x, date, views },
                  index
                ) => {
                  return (
                    <Post
                      key={index}
                      id={index}
                      title={title}
                      text={text}
                      tags={tags}
                      autor={autor}
                      img={img}
                      img_2x={img_2x}
                      date={date}
                      views={views}
                      selectPost={findPostById}
                    />
                  );
                }
              )}
          </ContentWrapper>
        </Container>
      </Content>
      {showModal && (
        <ModalPortal>
          <Modal
            // showModal={showModal}
            onClose={handleCloseModal}
            post={selectedPost}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default Main;
