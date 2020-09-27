import InsertPostCell from "../cells/InsertPostItemCell";
import { useFetchUser } from "../utils/user";
import { withApollo } from "../utils/withApollo";

const NewPostItem = () => {
  return <InsertPostCell />;
};

export default withApollo({ ssr: true })(NewPostItem);
