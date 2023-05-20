import { FC } from "react";
import {
  PostItem,
  PostPicture,
  PostTags,
  PostTitle,
  PostAuthor,
  PostDate,
  PostText,
} from "@styles/components";
import { IPost } from "@models/models";

interface PostProps {
  selectPost: (title: string) => void;
}

const Post: FC<IPost & PostProps> = ({
  id,
  title,
  text,
  tags,
  autor,
  img,
  img_2x,
  date,
  views,
  selectPost,
}) => {
  return (
    <PostItem>
      <PostPicture onClick={() => selectPost(title)}>
        <img loading="lazy" src={img} srcSet={img_2x} alt={`picture-${id}`} />
      </PostPicture>
      <PostTags>{tags}</PostTags>
      <PostTitle onClick={() => selectPost(title)}>{title}</PostTitle>
      <PostAuthor>{autor}</PostAuthor>
      <PostDate>
        <span>{date}</span>
        {views} Views
      </PostDate>
      <PostText>{text}</PostText>
    </PostItem>
  );
};

export default Post;
