import { useEffect, useState } from "react";
import axios from "axios";
// yarn add axios
// or
// npm i axios

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

const App = () => {
  // const [posts, setPosts] = useState<Post[]>();
  const [posts, setPosts] = useState();

  const getPost = async () => {
    // async -> 비동기 함수
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {posts?.map((post) => {
        //optional..undefined 를 반환한다.
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
