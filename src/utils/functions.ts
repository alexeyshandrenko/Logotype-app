import { IPost } from "@models/models";

export const findPostsByText = (text: string, posts: IPost[]): IPost[] => {
  return text
    ? posts.filter(
        (post) =>
          post.title.toLowerCase().includes(text.toLowerCase()) ||
          post.text.toLowerCase().includes(text.toLowerCase())
      )
    : [];
};

export const isEmptyArray = <T>(obj: Array<T>): boolean => {
  return obj.length === 0;
};
