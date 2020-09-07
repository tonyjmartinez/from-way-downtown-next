/** @jsx jsx */
import { Card, Image, Text, useColorMode, jsx } from "theme-ui";
import { useThemeUI } from "theme-ui";

interface CardProps {
  title: String;
  content: String;
  imageUrl: String;
  onClick: () => void;
}

const CardComponent = (props: CardProps) => {
  const { title, content, imageUrl, onClick } = props;
  const [colorMode, setColorMode] = useColorMode();
  const context = useThemeUI();
  const { theme } = context;
  console.log("theme", theme);
  const { modes } = theme.colors;

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "10px auto",
        boxShadow: `0 0 8px ${
          colorMode === "default" ? modes.default.primary : modes.dark.primary
        }`,
      }}
      onClick={onClick}
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
