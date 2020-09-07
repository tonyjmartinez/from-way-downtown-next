import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { withApollo } from "../../utils/withApollo";
import { Image } from "theme-ui";

const POST_BY_ID = gql`
  query MyQuery($id: Int!) {
    posts_by_pk(id: $id) {
      id
      content
      image_url
      title
      markdown
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { loading, data, error } = useQuery(POST_BY_ID, {
    variables: { id: pid },
  });
  if (loading) return <div>Loading...</div>;
  if (error) console.log(error);
  console.log("data", data);
  const { posts_by_pk } = data;
  const { markdown, content, title, image_url } = posts_by_pk;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{content}</h3>
      {image_url && <Image src={image_url} />}
      {markdown && <div dangerouslySetInnerHTML={{ __html: markdown }} />}
    </div>
  );
};

export default withApollo({ ssr: true })(Post);
