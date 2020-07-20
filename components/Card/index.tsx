import { Card, Image, Text } from "theme-ui";

interface CardProps {
  title: String;
  content: String;
}

const CardComponent = (props: CardProps) => {
  const { title, content } = props;
  return (
    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <Image src="https://i.imgur.com/r9dkEUf.png" />
      <Text>{title}</Text>
      <Text>{content}</Text>
    </Card>
  );
};
export default CardComponent;
