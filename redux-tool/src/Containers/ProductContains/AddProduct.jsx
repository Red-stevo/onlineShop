import {Form} from "react-bootstrap";
import "./../../Styling/AddProduct.css"

const AddProduct = () => {
    return(<>
            <Form id={"product-input-form"}>
                <Form.Group>
                    <Form.Control id={"product-input-image"} type={"file"}  />
                </Form.Group>
                <div id={"product-text-input"}>
                  <Form.Group>
                      <Form.Label id={"title-label"} htmlFor={"title"}>Product Title.</Form.Label>
                      <Form.Control id={"title"} type={"text"} />
                  </Form.Group>

                    <Form.Group>
                        <Form.Label id={"product-label"} htmlFor={"product-price"}>Product Price.</Form.Label>
                        <Form.Control id={"product-price"} type={"text"} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label id={"description-label"} htmlFor={"product-description"}>Product Description.</Form.Label>
                        <Form.Control as="textarea" rows={3} id={"product-description"} />
                    </Form.Group>
                </div>

            </Form>
        </>);
}

export default AddProduct;