import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import { useState } from "react";

import { useEffect } from "react";


export default function PopUpSize(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body className="modal-promotion">
          <Row>

              <Image src="/assets/image/popup.jpg" fluid />

          </Row>
        </Modal.Body>
        {/* <Modal.Footer className="modal-promotion">
          <Button
            // variant="danger"
            onClick={() => {
              handleClose();
            }}
          >
            Shop Now
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
