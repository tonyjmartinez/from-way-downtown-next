/** @jsx jsx */
import { jsx } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../../utils/withApollo";
import Card from "../Card";
import { Box } from "theme-ui";
import { useRouter } from "next/router";

const GET_POSTS = gql`
  query MyQuery {
    posts {
      id
      title
      content
      image_url
      markdown
    }
  }
`;

const Posts = (props) => {
  return <div>{props.data}</div>;
};

const PostsQuery = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const router = useRouter();

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    console.log(error);
    return <div>Error!!!</div>;
  } else if (data) {
    console.log("data", data);
    return (
      <>
        {data.posts.map(({ title, content, image_url, id }, idx) => (
          <Card
            key={`${title}-${idx}`}
            title={title}
            content={content}
            imageUrl={image_url}
            onClick={() => {
              console.log("click id", id);
              router.push(`/post/${id}`);
            }}
          />
        ))}
      </>
    );
  }
};

export default withApollo({ ssr: true })(PostsQuery);
