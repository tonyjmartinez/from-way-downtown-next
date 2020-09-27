/** @jsx jsx */
import { ReactNode } from "react";
import { Heading, jsx } from "theme-ui";
import { Box, Button, Grid, Card, Text, useColorMode } from "theme-ui";
import { FaRegImages, FaMarkdown, FaLink } from "react-icons/fa";
import { Form, Formik, useFormik } from "formik";
import NewPostForm from "components/NewPost/NewPostForm";
type NewPostProps = {};

type PostCardType = {
  children: ReactNode;
  colorMode: string;
};
const PostCard = ({ children, colorMode }: PostCardType) => {
  const isDark = colorMode === "dark";
  return (
    <Card
      // bg="primary"
      bg={`${isDark ? "primary" : "secondary"}`}
      color={`${isDark ? "black" : "gray"}`}
      sx={{
        maxWidth: 256,
        height: "150px",
        "&:hover": {
          boxShadow: `${
            isDark
              ? "0 0 14px hsl(171, 100%, 41%)"
              : "0 0 8px rgba(0, 0, 0, 0.325)"
          }`,
        },
        cursor: "pointer",
      }}
    >
      {children}
    </Card>
  );
};
const NewPost = (props: NewPostProps) => {
  const [colorMode, setColorMode] = useColorMode();
  console.log("colorMode", colorMode);

  return (
    <>
      <NewPostForm />
      <Box p={50}>
        <Grid gap={2} columns={[2, null, 4]}>
          <Box>
            <PostCard colorMode={colorMode}>
              <Heading
                as="h1"
                sx={{
                  textAlign: "center",
                  transform: "translateY(100%)",
                  userSelect: "none",
                }}
              >
                Text
              </Heading>
            </PostCard>
          </Box>
          <Box>
            <PostCard colorMode={colorMode}>
              <Box sx={{ textAlign: "center" }}>
                <FaMarkdown size={100} />
              </Box>
            </PostCard>
          </Box>
          <Box>
            <PostCard colorMode={colorMode}>
              <Box sx={{ textAlign: "center", marginTop: "0.5em" }}>
                <FaRegImages size={100} />
              </Box>
            </PostCard>
          </Box>
          <Box>
            <PostCard colorMode={colorMode}>
              <Box sx={{ textAlign: "center", marginTop: "0.5em" }}>
                <FaLink size={100} />
              </Box>
            </PostCard>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default NewPost;
