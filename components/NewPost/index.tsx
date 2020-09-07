/** @jsx jsx */
import React, { useState } from "react";
import { Formik, Form } from "formik";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../utils/withApollo";
import { useFetchUser } from "../../utils/user";
import loadable from "@loadable/component";
import { FaRegImages, FaMarkdown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import MarkdownIt from "markdown-it";
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
import dynamic from "next/dynamic";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const ReactFilestack = loadable(() => import("filestack-react"), {
  ssr: false,
});

const thumbnail = (url) => {
  const parts = url.split("/");
  parts.splice(3, 0, "resize=width:400");
  return parts.join("/");
};

const INSERT_POST = gql`
  mutation(
    $title: String!
    $isPublic: Boolean!
    $content: String!
    $userId: String!
    $imageUrl: String
    $markdown: String
  ) {
    insert_posts(
      objects: {
        title: $title
        is_public: $isPublic
        content: $content
        image_url: $imageUrl
        markdown: $markdown
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
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState(null);
  const [publicPost, setPublicPost] = useState(true);
  const router = useRouter();
  const [showPicker, setShowPicker] = useState(false);
  const [showMarkdown, setShowMarkdown] = useState(false);

  console.log("api key...", process.env.FILESTACK_API_KEY);

  const onFileUpload = (response) => {
    setUrl(thumbnail(response.filesUploaded[0].url));
  };
  console.log("showpicker", showPicker);
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  const handleEditorChange = ({ html, text }) => {
    console.log("html", html);
    console.log("text", text);
    setMarkdown(text);
    setHtml(html);
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
              markdown: html ?? "",
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Box as="form" sx={{ marginBottom: "5em" }}>
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
                {html && (
                  <div>
                    <Label>Markdown Content</Label>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </div>
                )}

                {showMarkdown ? (
                  <div>
                    <MdClose
                      size={30}
                      style={{
                        display: "block",
                        margin: "0px auto",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setShowMarkdown(false);
                      }}
                    />
                    <Label sx={{ mb: "1em" }}>Markdown Editor</Label>
                    <MdEditor
                      value={markdown}
                      style={{ height: "500px" }}
                      renderHTML={(text) => mdParser.render(text)}
                      onChange={handleEditorChange}
                    />
                  </div>
                ) : (
                  <div>
                    <FaMarkdown
                      size={40}
                      style={{
                        display: "block",
                        margin: "0px auto",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowMarkdown(true)}
                    />
                  </div>
                )}

                {url && (
                  <div style={{ margin: "0px auto" }}>
                    <a href={thumbnail(url)} target="_blank">
                      <Image src={thumbnail(url)} />
                    </a>
                  </div>
                )}
              </div>
              {showPicker ? (
                <MdClose
                  size={30}
                  style={{
                    display: "block",
                    margin: "0px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPicker(false);
                  }}
                />
              ) : (
                <FaRegImages
                  size={40}
                  style={{
                    display: "block",
                    margin: "0px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPicker(true);
                  }}
                />
              )}
              {!url && showPicker && (
                <div style={{ margin: "0px auto", width: "85%" }}>
                  <Label>Image Upload</Label>
                  <ReactFilestack
                    apikey={`${process.env.FILESTACK_API_KEY}`}
                    componentDisplayMode={{ type: "immediate" }}
                    actionOptions={{
                      displayMode: "inline",
                      container: "picker",
                    }}
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
                </div>
              )}

              {errors.content && touched.content && errors.content}

              <Button
                sx={{ margin: "0px auto", marginTop: "5em", display: "block" }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
