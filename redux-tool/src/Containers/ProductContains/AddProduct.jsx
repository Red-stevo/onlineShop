import {Form} from "react-bootstrap";


const AddProduct = () => {
    return(<>
            <Form >
                <Form.Group>
                    <Form.Label htmlFor={"product-image"}>Product image.</Form.Label>
                    <Form.Control id={"product-image"} type={"file"}  />
                </Form.Group>
                <div id={"product-text-input"}>
                  <Form.Group>
                      <Form.Label htmlFor={"title"}>Product Title.</Form.Label>
                      <Form.Control id={"title"} type={"text"} />
                  </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor={"product-price"}>Product Price.</Form.Label>
                        <Form.Control id={"product-price"} type={"text"} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor={"product-description"}>Product Description.</Form.Label>
                        <Form.Control id={"product-description"} type={"text"} />
                    </Form.Group>
                </div>

            </Form>
        </>);
}

export default AddProduct;