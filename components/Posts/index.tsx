/** @jsx jsx */
import { jsx } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../../utils/withApollo";
import Card from "../Card";
import { Box } from "theme-ui";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
      content
      image_url
      image_title
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
      <>
        {data.posts.map(({ title, content, image_url }, idx) => (
          <Box bg="muted" key={`title-${idx}`}>
            <Card title={title} content={content} imageUrl={image_url} />
          </Box>
        ))}
      </>
    );
  }
};

export default withApollo({ ssr: true })(PostsQuery);
