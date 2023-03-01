import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="m-auto mt-20">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
