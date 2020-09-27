import { useFormik } from "formik";
import React from "react";
import {
  Box,
  Label,
  Input,
  Radio,
  Select,
  Textarea,
  Flex,
  Button,
} from "theme-ui";

const NewPostForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box as="form" sx={{ marginBottom: "5em" }}>
      <div style={{ width: "75%", margin: "2em auto" }}>
        <Label htmlFor="title">Title</Label>
        <Input
          name="title"
          id="title"
          mb={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        <Label htmlFor="content">Content</Label>
        <Textarea
          name="content"
          id="content"
          rows={6}
          mb={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
        />
        <Flex mb={3}>
          <Label>
            <Radio
              name="isPublic"
              value={"yes"}
              defaultChecked={true}
              onChange={(e) => console.log(e)}
            />{" "}
            Public
          </Label>
          <Label>
            <Radio
              name="isPublic"
              value={"no"}
              onChange={(e) => console.log("change", e)}
            />
            Private
          </Label>
        </Flex>

        <Button
          sx={{ margin: "0px auto", marginTop: "5em", display: "block" }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default NewPostForm;
