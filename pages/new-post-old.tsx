import NewPost from "../components/NewPostOld";
import { useFetchUser } from "../utils/user";
import { withApollo } from "../utils/withApollo";

const NewPostPage = () => {
  const { loading, user } = useFetchUser({ required: true });
  return <NewPost />;
};

export default withApollo({ ssr: false })(NewPostPage);
