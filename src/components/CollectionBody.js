import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CollectionBody() {
  return (
    <Container>
    <div className='title-collection'>
    <h2>ESSENTIAL COLLECTION</h2>
    </div>
    <Row xs={1} md={4} className="g-4 cards-collection">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col >
          <Card>
            <Card.Img variant="top" src="/assets/image/img1.png" />
            <Card.Body>
              <Card.Title>Kid's UV protective</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src="/assets/image/img2.png" />
            <Card.Body>
              <Card.Title>Windbreaker Jacket</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src="/assets/image/img3.png" />
            <Card.Body>
              <Card.Title>Down Winter Jacket</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src="/assets/image/img4.png" />
            <Card.Body>
              <Card.Title>Women's Running Jacket</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      {/* ))} */}
    </Row>
    </Container>
  );
}

export default CollectionBody;