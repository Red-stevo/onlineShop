import {Button, Form, Image} from "react-bootstrap";
import "./../../Styling/AddProduct.css"
import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux/actions/productsActions.js";

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({imageFile: {}, productTitle:"", productPrice:"",
                                                    productDescription:""});
    const {productTitle, productPrice, productDescription} = newProduct;
    const [imagePreview, setImagPreview] = useState("");
    const dispatch = useDispatch();

    const handleProductAddition = (event) => {
        event.preventDefault();

       const product =  {
            title:newProduct.productTitle,
                price: newProduct.productPrice,
            description: newProduct.productDescription,
            image: newProduct.imageFile,
            category: 'electronic'
        }

        axios.post("https://fakestoreapi.com/products",product).then((response) => {
            dispatch(setProducts(response.data));
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    return(<>
            <Form id={"product-input-form"} onSubmit={handleProductAddition}>
                <div>
                    <Form.Group id={"product-input-image"}>
                        <Form.Control  type={"file"}
                        onChange={(e) => {
                            setNewProduct({...newProduct, imageFile: URL.createObjectURL(e.target.files[0])})
                            setImagPreview(URL.createObjectURL(e.target.files[0]))
                        }}/>
                        {imagePreview ? <Image src={imagePreview} id={"image-preview"} />: null}
                    </Form.Group>
                </div>
                <div id={"product-text-input"}>
                  <Form.Group>
                      <Form.Label id={"title-label"} htmlFor={"product-title"}>Product Title.</Form.Label>
                      <Form.Control id={"product-title"} type={"text"} value={productTitle}
                      onChange={(e) => {
                          setNewProduct({...newProduct, productTitle:e.target.value})
                      }}/>
                  </Form.Group>

                    <Form.Group>
                        <Form.Label id={"price-label"} htmlFor={"product-price"}>Product Price.</Form.Label>
                        <Form.Control id={"product-price"} type={"text"} value={productPrice}
                      onChange={(e)=>
                      {setNewProduct({...newProduct, productPrice:e.target.value})}
                      }/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label id={"description-label"} htmlFor={"product-description"}>
                            Product Description.</Form.Label>
                        <Form.Control as="textarea" rows={3} id={"product-description"} value={productDescription}
                        onChange={(e) => {setNewProduct({...newProduct,
                            productDescription:e.target.value})}}/>
                    </Form.Group>
                </div>
                <Button type={"submit"} id={"save-button"} >save</Button>
            </Form>
        </>);
}

export default AddProduct;