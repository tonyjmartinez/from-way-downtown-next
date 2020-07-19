import React from "react";
import { Formik } from "formik";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../utils/withApollo";
import { useFetchUser } from "../../utils/user";

const INSERT_POST = gql`
  mutation(
    $title: String!
    $isPublic: Boolean!
    $content: String!
    $userId: String!
  ) {
    insert_posts(
      objects: { title: $title, is_public: $isPublic, content: $content }
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

const Basic = () => {
  const { loading, user } = useFetchUser();
  const [addPost] = useMutation(INSERT_POST);
  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
        // validate={(values) => {
        //   const errors: any = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          const { content, title } = values;
          addPost({
            variables: {
              content,
              title,
              userId: user?.sub,
              isPublic: true,
            },
          });

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
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
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="text"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            {errors.content && touched.content && errors.content}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
