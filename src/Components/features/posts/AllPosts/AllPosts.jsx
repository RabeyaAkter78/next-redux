import { fetchPosts } from "@/Components/features/posts/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function AllPosts() {
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
      );
      console.log(posts)
      const dispatch = useDispatch();
   
      useEffect(() => {
        dispatch(fetchPosts());
      }, [dispatch]);
    
      let content;
    if (isLoading) {
      content = <h1> Loding posts</h1>;
    }
    if (!isLoading && isError) {
      content = <h1>{error}</h1>;
    }
    if (!isLoading && !isError && posts.length === 0) {
      content = <h1>No posts Found</h1>;
    }
    if (!isLoading && !isError && posts.length > 0) {
      content = (
        <ul>
          {posts.map((post,indedx) => (
            <li key={post.id} className="border-2 p-5 font-semibold">{indedx+1} {post.title}</li>
          ))}
        </ul>
      );
     
    };
  return (
    <div className="bg-red-200 container mx-auto py-10">{content}</div>
  )
}
