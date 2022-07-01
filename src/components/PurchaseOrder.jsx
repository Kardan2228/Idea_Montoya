import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import ToPay from "./ToPay";

export default function PurchaseOrder() {
  const { cart, totalCart } = useContext(CartContext);
  const [formSend, setFormSend] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

    function handleClic() {
      const orderPurchase = {
    buyer: { name, email, phone },
    item: cart,
    total: totalCart,
  };
    addDoc(orderCollection, orderPurchase).then(({ id }) => {
      console.log(id);
    });
  }
  

  return (
    <>
      <h1>Orden de compra</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="shadow-lg p-3 mb-5 mt-4 rounded">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                }}
                validate={(values) => {
                  let errorsForm = {};

                  //Validación del nombre
                  if (!values.name) {
                    errorsForm.name = "Debes ingresar tu nombre";
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                    errorsForm.name =
                      "El nombre únicamente puede contener letras y espacios.";
                  }

                  //Validación del email
                  if (!values.email) {
                    errorsForm.email =
                      "Debes ingresar tu dirección de correo electrónico";
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA -Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      values.email
                    )
                  ) {
                    errorsForm.email =
                      "El correo electrónico debe mantener esta estructura: correo@dominio.com";
                  }

                  //Validación del número telefónico
                  if (!values.phone) {
                    errorsForm.phone = "Debes ingresar tu número telefónico";
                  } else if (
                    !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(
                      values.phone
                    )
                  ) {
                    errorsForm.phone =
                      "El número telefónico puede contener únicamente números y símbolos ()+-.";
                  }

                  return errorsForm;
                }}
                // onSubmit lo utilizamos para enviar la información del formulario
                onSubmit={(values, { resetForm }) => {
                  //resetForm();
                  // console.log("Formulario enviado.");
                  // console.log("valores", values.name);
                  // setFormSend(true);
                  setName(values.name);
                  setEmail(values.email);
                  setPhone(values.phone);
                  // setTimeout(() => setFormSend(false), 2000);
                  
                }}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        id="name"
                      />
                      <ErrorMessage
                        name="name"
                        component={() => <div>{errors.name}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="correo">Correo</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="correo@dominio.com"
                        id="email"
                      />
                      <ErrorMessage
                        name="email"
                        component={() => <div>{errors.email}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Teléfono</label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="(555)-555-5555"
                        id="phone"
                      />
                      <ErrorMessage
                        name="phone"
                        component={() => <div>{errors.phone}</div>}
                      />
                    </div>
                      {/* <button type="submit">Enviar</button>
                      {formSend && <p>¡Tu orden ha sido enviada con éxito!</p>} */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ marginLeft: "20px" }}>Tu pedido</h2>
          <hr></hr>
          <div className="container">
            {cart.map((itemCart) => (
              <>
                <div className="row p-3 border">
                  <div className="col-sm">
                    <h4 style={{ textAlign: "center" }}>{itemCart.article}</h4>
                    <span>{itemCart.description}</span>
                  </div>
                  <div style={{ textAlign: "center" }} className="col-sm">
                    <h4>Cantidad</h4>
                    <span>
                      <strong>{itemCart.cantidad}</strong>
                    </span>
                  </div>
                  <div className="col-sm">
                    <span>
                      <strong>Precio unitario:</strong> ${itemCart.price}.00
                    </span>
                    <h4 className="lh-lg">
                      Subtotal: ${itemCart.cantidad * itemCart.price}.00
                    </h4>
                  </div>
                </div>
              </>
            ))}
            <hr></hr>
            <div className="text-end">
              <h1>Total: ${totalCart}.00</h1>
              <Link to="/purchase_order">
                <button
                  style={{ marginRight: 10, marginTop: 20 }}
                  className={"btn btn-success"}
                >
                  Proceder al pago
                </button>
              </Link>
              <Link to={`/`}>
                <button style={{ marginTop: 20 }} className={"btn btn-warning"}>
                  Cancelar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <form onSubmit={handleSubmit}>
<div>
  <label htmlFor="nombre">Nombre</label>
  <input
    type="text"
    name="name"
    placeholder="John Doe"
    id="name"
    value={values.name}
    onChange={handleChange}
    onBlur={handleBlur}
  />

  {touched.name && errors.name && <div>{errors.name}</div>}
</div>
<div>
  <label htmlFor="correo">Correo</label>
  <input
    type="email"
    name="email"
    placeholder="correo@dominio.com"
    id="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
  />
  {touched.email && errors.email && (
    <div>{errors.email}</div>
  )}
</div>
<button type="submit">Enviar</button>
{formSend && <p>¡Tu orden ha sido enviada con éxito!</p>}
</form> */
}
