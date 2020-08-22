import React, { useState } from "react";
import { Formik } from "formik";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../utils/withApollo";
import { useFetchUser } from "../../utils/user";
import loadable from "@loadable/component";
import {
  Box,
  Label,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  Flex,
  Slider,
  Button,
} from "theme-ui";

const ReactFilestack = loadable(() => import("filestack-react"), {
  ssr: false,
});

const INSERT_POST = gql`
  mutation(
    $title: String!
    $isPublic: Boolean!
    $content: String!
    $userId: String!
    $imageTitle: String
    $imageUrl: String
  ) {
    insert_posts(
      objects: {
        title: $title
        is_public: $isPublic
        content: $content
        image_title: $imageTitle
        image_url: $imageUrl
      }
    ) {
      affected_rows
      returning {
        id
        title
        created_at
      }
    }
  }
`;

interface NewPostProps {
  image?: {
    url: string;
  };
}

const Basic = (props: NewPostProps) => {
  const { loading, user } = useFetchUser();
  const [addPost] = useMutation(INSERT_POST);
  const [url, setUrl] = useState(props?.image?.url);

  console.log("api key...", process.env.FILESTACK_API_KEY);

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url);
  };

  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(values, { setSubmitting }) => {
          const { content, title } = values;
          addPost({
            variables: {
              content,
              title,
              userId: user?.sub,
              isPublic: false,
              imageUrl: url,
              imageTitle: "TEST TITLE!",
            },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                id="title"
                mb={3}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Label htmlFor="content">Content</Label>
              <Textarea
                name="content"
                id="content"
                rows={6}
                mb={3}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <Flex mb={3}>
                <Label>
                  <Radio name="letter" /> Public
                </Label>
                <Label>
                  <Radio name="letter" /> Private
                </Label>
              </Flex>
              <ReactFilestack
                apikey={`${process.env.FILESTACK_API_KEY}`}
                componentDisplayMode={{ type: "immediate" }}
                actionOptions={{ displayMode: "inline", container: "picker" }}
                onSuccess={onFileUpload}
              />
              <div
                id="picker"
                style={{ marginTop: "2rem", height: "20rem" }}
              ></div>
              {errors.content && touched.content && errors.content}
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Box>
          </form>

          // <form onSubmit={handleSubmit}>
          //   <input
          //     type="text"
          //     name="title"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.title}
          //   />
          //   <input
          //     type="text"
          //     name="content"
          //     onChange={handleChange}
          //     onBlur={handleBlur}
          //     value={values.content}
          //   />
          //   <ReactFilestack
          //     apikey={`${process.env.FILESTACK_API_KEY}`}
          //     componentDisplayMode={{ type: "immediate" }}
          //     actionOptions={{ displayMode: "inline", container: "picker" }}
          //     onSuccess={onFileUpload}
          //   />
          //   <div
          //     id="picker"
          //     style={{ marginTop: "2rem", height: "20rem" }}
          //   ></div>{" "}
          //   {errors.content && touched.content && errors.content}
          //   <button type="submit" disabled={isSubmitting}>
          //     Submit
          //   </button>
          // </form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
