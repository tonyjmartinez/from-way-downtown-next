import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../../utils/withApollo";
import Card from "../Card";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
      content
    }
  }
`;

const Posts = (props) => {
  return <div>{props.data}</div>;
};

const PostsQuery = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>Error!!!</div>;
  } else if (data) {
    return (
      <div style={{ width: "100%" }}>
        {data.posts.map(({ title, content }, idx) => (
          <Card
            title={title}
            content={content}
            sx={{ maxWidth: 512, mx: "auto", px: 3, py: 4 }}
          />
        ))}
      </div>
    );
  }
};

export default withApollo({ ssr: true })(PostsQuery);
