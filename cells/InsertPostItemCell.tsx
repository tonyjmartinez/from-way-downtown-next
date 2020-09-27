import React, { useState } from "react";
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
import { INSERT_POST_ITEM, INSERT_POST } from "gql/mutations";
import { Button } from "theme-ui";
import { postTypes } from "utils/enums";

type Props = {};

const InsertPostCell = (props: Props) => {
  const { loading, user } = useFetchUser({ required: true });
  const [insertPost] = useMutation(INSERT_POST_ITEM);
  console.log("user?", user?.sub);

  return (
    <Button
      onClick={(e) => {
        const insert = async () =>
          await insertPost({
            variables: {
              content: "here's my content",
              type: postTypes.TEXT,
              userId: user?.sub,
            },
          });
        insert();
      }}
    >
      Insert Post
    </Button>
  );
};

export default InsertPostCell;
