import React from 'react'
import { Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'


function CardProduct(props) {
  return (
    <>

        <Col >
          <Card>
            <Card.Img variant="top" src={props.obj.image} />
            <Card.Body>
              <Card.Title>{props.obj.title}</Card.Title>
              <Card.Text>
              ${props.obj.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </>
  )
}

export default CardProduct