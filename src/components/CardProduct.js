import React from 'react'

function CardProduct(props) {
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={props.obj.imageReact} />
          <Card.Body>
            <Card.Title>{props.obj.title}</Card.Title>
            <Card.Text>{props.obj.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CardProduct