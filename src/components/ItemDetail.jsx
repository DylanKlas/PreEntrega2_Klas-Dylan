import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const ItemDetail = (p) => {
  const { id } = useParams();

  //Sé que está mal subir de nuevo la base de datos, aún no solucioné este problema, pero estoy en ello. Igualmente
  //entrego hasta donde llegué. La idea es que ItemDetail muestre una página nueva con el detalle del producto seleccionado
  //en ItemList.
  const productosDB = [
    {
      id: "001",
      nombre: "Lapse - Platinum Mode",
      precio: 150000,
      categoria: "Platinum",
      imagen: "",
      alt: "Imagen de Reloj Platinum Mode",
      stock: 10,
      descripcion:
        "Su collar de Plata y engranajes de Platino hacen que este reloj sea una auténtica maquina del tiempo.",
    },
    {
      id: "002",
      nombre: "Lapse - Platinum JKLast",
      precio: 130000,
      categoria: "Platinum",
      imagen: "",
      alt: "Imagen de Reloj Platinum JKLast",
      stock: 10,
      descripcion:
        "Plata 100%. Quien hubiera pensado que Lapse hubiera sacado este último modelo en su gama más alta de exhibición.",
    },
    {
      id: "003",
      nombre: "Lapse - Business XXII",
      precio: 220000,
      categoria: "Business",
      imagen: "",
      alt: "Imagen de Reloj Business XXII",
      stock: 10,
      descripcion:
        "Usted crea su historia. Alfabeto Romano, brazalete de oro, esta maquina es solo para los valientes.",
    },
    {
      id: "004",
      nombre: "Lapse - Business Ultimatum 3DF",
      precio: 180000,
      categoria: "Business",
      imagen: "",
      alt: "Imagen de Reloj Business Ultimatum",
      stock: 10,
      descripcion:
        "Tecnología e Información. Este reloj es para los amantes de las nuevas oportunidades, que les gusta estar siempre un paso adelante.",
    },
    {
      id: "005",
      nombre: "Lapse - Classic Gold",
      precio: 135000,
      categoria: "Classic",
      imagen: "",
      alt: "Imagen de Reloj Classic Gold",
      stock: 10,
      descripcion:
        "Clasico, Fino. Este reloj de oro con pulsera de cuero es elegante tan solo con mirarlo.",
    },
    {
      id: "006",
      nombre: "Lapse - Classic Minimalism",
      precio: 130000,
      categoria: "Classic",
      imagen: "",
      alt: "Imagen de Reloj Classic Minimalism",
      stock: 10,
      descripcion:
        "Menos es más, el minimalismo como protocolo de una vida organizada.",
    },
    {
      id: "007",
      nombre: "Lapse - Serious Black",
      precio: 165000,
      categoria: "Serious",
      imagen: "",
      alt: "Imagen de Reloj Serious Black",
      stock: 10,
      descripcion: "Negro. Fino. Serio. Este reloj lo lleva a donde quiera.",
    },
    {
      id: "008",
      nombre: "Lapse - Serious Marine",
      precio: 165000,
      categoria: "Serious",
      imagen: "",
      alt: "Imagen de Reloj Serious Marine",
      stock: 10,
      descripcion:
        "Quiere llegar a lo más alto? Este reloj azul marino lo usa quien se atreve a navegar por los mares hacia su meta.",
    },
  ];

  const queProductosMostrar = productosDB.filter((p) => p.id === id);

  //Para detectar si no me lo toma
  queProductosMostrar.length > 0
    ? console.log(`ItemDetail: va a motrar un producto`)
    : console.log(`ItemDetail: No se detectó ningun producto con id ${id}`);

  return (
    <>
      {
        <Card style={{ width: "36rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{p.nombre}</Card.Title>
            <Card.Text>$ {p.precio}</Card.Text>
            <Card.Text>Últimos {p.stock}</Card.Text>
            <Card.Text>{p.descripcion}</Card.Text>
            {/* <Button variant="primary">Volver</Button> */}
            {/* <Button variant="primary">
              {" "}
              {/* <Link to={`/ItemDetail/${id}`}>Comprar</Link> */}
            {/* </Button>  */}
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default ItemDetail;
