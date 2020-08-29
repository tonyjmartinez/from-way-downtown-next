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
        maxWidth: 400,
        margin: "10px auto",
      }}
    >
      <Image src={`${imageUrl ?? "https://i.imgur.com/r9dkEUf.png"}`} />

      <Text sx={{ margin: "10px auto", fontSize: "78", color: "secondary" }}>
        {title}
      </Text>
      <Text sx={{ margin: "10px auto", fontSize: "15" }}>{content}</Text>
    </Card>
  );
};
export default CardComponent;
