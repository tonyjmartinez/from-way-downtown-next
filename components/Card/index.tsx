import { Card, Image, Text } from "theme-ui";

interface CardProps {
  title: String;
  content: String;
  imageUrl: String;
}

const CardComponent = (props: CardProps) => {
  const { title, content, imageUrl } = props;
  return (
    <Card
      sx={{
        maxWidth: 256,
        margin: "0px auto",
      }}
    >
      <Image src={`${imageUrl ?? "https://i.imgur.com/r9dkEUf.png"}`} />

      <Text>{title}</Text>
      <Text>{content}</Text>
    </Card>
  );
};
export default CardComponent;
