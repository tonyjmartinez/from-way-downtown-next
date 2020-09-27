import { useMutation } from "@apollo/react-hooks";
import { INSERT_POST_ITEM, INSERT_POST } from "gql/mutations";
import { useEffect, useState } from "react";
import { Button, Heading } from "theme-ui";
import { postTypes } from "utils/enums";
import { useFetchUser } from "utils/user";
import { withApollo } from "utils/withApollo";
import NewPost from "components/NewPost";
import { Box } from "theme-ui";
import { Formik, Form } from "formik";

const NewPostPage = () => {
  const { user } = useFetchUser({ required: true });
  const [postItems, setPostItems] = useState([]);
  const [insertPostItem, { data: postItemData }] = useMutation(
    INSERT_POST_ITEM
  );

  const [insertPost, { data: postData }] = useMutation(INSERT_POST);

  useEffect(() => {
    console.log("data change", postItemData);
    const newPostItem = postItemData?.insert_post_item?.returning[0];
    if (newPostItem) {
      setPostItems([
        ...postItems,
        { type: newPostItem.type, id: newPostItem.id },
      ]);
    }
  }, [postItemData]);

  console.log("post items?", postItems);
  console.log("post data?", postData);

  const runInsertPostItem = () => {
    insertPostItem({
      variables: {
        content: "here's my content",
        type: postTypes.TEXT,
        userId: user?.sub,
      },
    });
  };

  const runInsertPost = () => {
    insertPost({
      variables: {
        title: "Hello world",
        userId: user?.sub,
        isPublic: true,
        postItems,
      },
    });
  };
  return (
    <>
      <Button onClick={(e) => runInsertPostItem()}>Insert post item</Button>
      <Button onClick={(e) => runInsertPost()}>Insert post</Button>

      <Box sx={{ textAlign: "center" }}>
        <Heading>New Post</Heading>
      </Box>

      <NewPost />
    </>
  );
};

export default withApollo()(NewPostPage);
