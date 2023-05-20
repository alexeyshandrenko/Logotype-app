import { IPost } from "@models/models";

export interface PostDataContextProps {
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  findedPosts: IPost[];
  setFindedPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  activateSearch: boolean;
  setActivateSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
