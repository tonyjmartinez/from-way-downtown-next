import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "utils/withApollo";
import { useFetchUser } from "../utils/user";
import loadable from "@loadable/component";
import { FaRegImages, FaMarkdown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import MarkdownIt from "markdown-it";
import { Button } from "theme-ui";
import { postTypes } from "utils/enums";
import { INSERT_POST_ITEM, INSERT_POST } from "gql/mutations";
import { isNetworkRequestInFlight } from "apollo-client/core/networkStatus";

type Props = {};

const InsertPostCell = (props: Props) => {
  const [postItem, setPostItem] = useState(null);
  const { user } = useFetchUser({ required: true });
  const [insertPostItem, { data, error, loading }] = useMutation(
    INSERT_POST_ITEM
  );

  const [insertPost, { data: postData }] = useMutation(INSERT_POST);

  useEffect(() => {
    if (data) {
      setPostItem(data.insert_post_item.returning[0].id);
    }
  }, [data]);

  if (postItem) console.log("post item", postItem);

  const insert = async () => {
    await insertPostItem({
      variables: {
        content: "here's my content",
        type: postTypes.TEXT,
        userId: user?.sub,
      },
    });
  };

  return (
    <>
      <Button
        onClick={(e) => {
          console.log("click");
          insert();
        }}
      >
        Post Item
      </Button>
      <Button
        onClick={(e) => {
          if (postItem) {
            insertPost({
              variables: {
                title: "Hello world",
                userId: user?.sub,
                isPublic: true,
                postItems: `[{type: 't', postId: ${postItem}}]`,
              },
            });
          }
        }}
      >
        Post
      </Button>
    </>
  );
};

export default InsertPostCell;
