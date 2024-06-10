import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/videoexemplo.png" />
            <Card.Body>
                <Card.Title>Maria Priscila Martins</Card.Title>
                <Card.Text>
                    Obras em áreas de mangue e aterros irregulares são embargados.
                </Card.Text>
                <Button variant="primary">Ver mais</Button>
            </Card.Body>
        </Card>
    );
}

export default Card;