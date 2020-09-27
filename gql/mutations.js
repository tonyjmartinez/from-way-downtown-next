import gql from "graphql-tag";

export const INSERT_POST_ITEM = gql`
  mutation MyMutation(
    $content: String = ""
    $type: String = ""
    $userId: String
  ) {
    insert_post_item(
      objects: { content: $content, type: $type, user_id: $userId }
    ) {
      returning {
        id
        content
        type
      }
    }
  }
`;

export const INSERT_POST = gql`
  mutation(
    $title: String!
    $isPublic: Boolean!
    $content: String
    $userId: String!
    $imageUrl: String
    $markdown: String
    $postItems: jsonb
  ) {
    insert_posts(
      objects: {
        title: $title
        is_public: $isPublic
        content: $content
        image_url: $imageUrl
        markdown: $markdown
        post_items: $postItems
      }
    ) {
      affected_rows
      returning {
        id
        title
        is_public
        content
        image_url
        markdown
        created_at
        post_items
      }
    }
  }
`;
