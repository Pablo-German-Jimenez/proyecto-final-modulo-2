import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardExclusivos = () => {
  return (
    <Card className="bg-transparent cardExclusivos border-0 mt-2">
      <Card.Img
        src="https://i.pinimg.com/474x/47/f2/2f/47f22f40160ffb33987fa4b9091dcee0.jpg"
        className="img-exclusivos"
      />
      <Card.Title className="text-center mt-2 mb-3">Soy Leyenda</Card.Title>
    </Card>
  );
};

export default CardExclusivos;
