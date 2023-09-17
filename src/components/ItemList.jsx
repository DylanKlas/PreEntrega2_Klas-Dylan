import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemList = ({ productosDB }) => {
  return (
    <>
      <div>
        {productosDB.map((p) => {
          return (
            <div key={p.id} className="mt-3 mb-3">
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text>$ {p.precio}</Card.Text>
                  <Card.Text>Últimos {p.stock}</Card.Text>
                  {/* <Card.Text>{p.descripcion}</Card.Text> */}
                  <Button variant="primary">
                    <Link to={`/item/${p.id}`}>Detalles</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
