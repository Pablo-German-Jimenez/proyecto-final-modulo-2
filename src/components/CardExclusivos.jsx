import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardExclusivos = ({ titulo, img }) => {
  return (
    <Card className="bg-transparent cardExclusivos border-0 mt-2 h-100">
      <Card.Img
        src={img}
        className="img-exclusivos"
      />

      <Card.Title className="text-center mt-2 mb-3">{titulo}</Card.Title>

      <Card.Title className="text-center mt-2 mb-3 titulo-exclusivo">{titulo}</Card.Title>

    </Card>
  );
};

export default CardExclusivos;
