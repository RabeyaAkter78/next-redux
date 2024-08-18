import { fetchPosts } from "@/Components/features/posts/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function allposts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
}
return(
    <div></div>
);
