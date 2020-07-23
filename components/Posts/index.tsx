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
        {data.posts.map(({ title, content }, idx) => (
          <Box bg="muted" key={`title-${idx}`}>
            <Card
              title={title}
              content={content}
              sx={{ maxWidth: 350, mx: "auto", px: 3, py: 4, bg: "lightgray" }}
            />
          </Box>
        ))}
      </>
    );
  }
};

export default withApollo({ ssr: true })(PostsQuery);
