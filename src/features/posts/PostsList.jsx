import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButton';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className="border" key={post.id}>
      <h3 className="text-white">{post.title}</h3>
      <p className="text-white">{post.content.substring(0, 100)}</p>

      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2 className="text-white">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
