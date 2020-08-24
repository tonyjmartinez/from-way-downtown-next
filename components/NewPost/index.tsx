/** @jsx jsx */
import React, { useState } from "react";
import { Formik } from "formik";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../utils/withApollo";
import { useFetchUser } from "../../utils/user";
import loadable from "@loadable/component";
import {
  jsx,
  Box,
  Label,
  Input,
  Image,
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

const thumbnail = (url) => {
  const parts = url.split("/");
  parts.splice(3, 0, "resize=width:200");
  return parts.join("/");
};

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
  const [publicPost, setPublicPost] = useState(true);
  const router = useRouter();

  console.log("api key...", process.env.FILESTACK_API_KEY);

  const onFileUpload = (response) => {
    setUrl(thumbnail(response.filesUploaded[0].url));
  };

  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("on submit", values);
          const { content, title } = values;
          addPost({
            variables: {
              content,
              title,
              userId: user?.sub,
              isPublic: publicPost,
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
          <Box
            as="form"
            sx={{ marginBottom: "5em" }}
            onSubmit={(e) => handleSubmit()}
          >
            <div style={{ width: "75%", margin: "2em auto" }}>
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
                  <Radio
                    name="isPublic"
                    value={`${publicPost}`}
                    defaultChecked={true}
                    onChange={() => setPublicPost(true)}
                  />{" "}
                  Public
                </Label>
                <Label>
                  <Radio
                    name="isPublic"
                    value={`${!publicPost}`}
                    onChange={() => setPublicPost(false)}
                  />{" "}
                  Private
                </Label>
              </Flex>
              {url && (
                <div style={{ margin: "0px auto" }}>
                  <a href={thumbnail(url)} target="_blank">
                    <Image src={thumbnail(url)} />
                  </a>
                </div>
              )}
            </div>

            {!url && (
              <>
                <ReactFilestack
                  apikey={`${process.env.FILESTACK_API_KEY}`}
                  componentDisplayMode={{ type: "immediate" }}
                  actionOptions={{ displayMode: "inline", container: "picker" }}
                  onSuccess={onFileUpload}
                />
                <div
                  id="picker"
                  style={{
                    marginTop: "2rem",
                    height: "20rem",
                    marginBottom: "2em",
                  }}
                ></div>
              </>
            )}

            {errors.content && touched.content && errors.content}

            <div style={{ margin: "0px auto", width: "25%" }}>
              <Button type="submit">Submit</Button>
            </div>
          </Box>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
