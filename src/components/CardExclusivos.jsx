import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardExclusivos = ({ item }) => {
  return (
    <Card className="bg-transparent cardExclusivos border-0 mt-2">
      <Card.Img
        src={item.portada}
        className="img-exclusivos"
      />
      <Card.Title className="text-center mt-2 mb-3">{item.titulo}</Card.Title>
    </Card>
  );
};

export default CardExclusivos;
