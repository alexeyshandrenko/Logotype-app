import { createContext, useState } from "react";

import GlobalStyles from "@styles/global";
import { Wrapper } from "@styles/components";

import Header from "@components/Header/Header";
import Main from "@components/Main/Main";
import { IPost } from "@models/models";
import { PostDataContextProps } from "@context/types";

export const PostDataContext = createContext<PostDataContextProps>(
  {} as PostDataContextProps
);

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [findedPosts, setFindedPosts] = useState<IPost[]>([]);
  const [activateSearch, setActivateSearch] = useState<boolean>(false);

  const value = {
    posts,
    setPosts,
    findedPosts,
    setFindedPosts,
    activateSearch,
    setActivateSearch,
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <PostDataContext.Provider value={value}>
          <Header />
          <Main />
        </PostDataContext.Provider>
      </Wrapper>
    </>
  );
}

export default App;
