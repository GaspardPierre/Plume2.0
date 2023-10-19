import Card from 'react-bootstrap/Card';
import baniere from '../../assets/baniere.jpg';

export default function CardImage() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={baniere} alt="Montain img" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
