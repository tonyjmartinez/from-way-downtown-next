import NewPost from "../components/NewPost";
import { useFetchUser } from "../utils/user";
import { withApollo } from "../utils/withApollo";

const NewPostPage = () => {
  const { loading, user } = useFetchUser({ required: true });
  return (
    <div style={{ width: "75%", margin: "2em auto" }}>
      <NewPost />
    </div>
  );
};

export default withApollo({ ssr: true })(NewPostPage);
