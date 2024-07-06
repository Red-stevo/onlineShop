import {useParams} from "react-router-dom";
import {FetchProduct} from "../BackendUtils/FetchProduct.js";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectProduct} from "../../redux/actions/productsActions.js";
import {useEffect} from "react";
import {Card, Spinner} from "react-bootstrap";
import "./../../Styling/ViewProduct.css";
import { RiPriceTagLine } from "react-icons/ri";

const ProductDetails = () => {
    const product = useSelector((state) => state.productState.product);
    const {title, price, description, image} = product;
    const { productId} = useParams();
    const dispatch = useDispatch();

    const fetchProduct = () => {
        FetchProduct(`https://fakestoreapi.com/products/${productId}`).then((response) => {
            dispatch(selectProduct(response.data));
        }).catch((error) => {
            console.log("error", error.response.data);
        });
    }

    useEffect(() => {
        if(productId && productId !== "")
            fetchProduct();
        return() => {
            console.log("clean up")
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return(<div>
        {
            product.length === 0 ?<><h2>Loading...</h2><Spinner animation={"border"}/></>:
                <Card id={"view-card"}>
                    <div>
                        <Card.Img src={image} id={"product-image"} />
                    </div>
                    <Card.Body>
                        <Card.Title id={"product-title"}>{title}</Card.Title>
                        <Card.Text id={'price-tag'}>
                            ${price}<RiPriceTagLine fontSize={40} />
                        </Card.Text>
                        <Card.Text id={"description"}>
                            {description}
                        </Card.Text>
                        {/* <Card.Text>
                        {rating.rate}
                        {rating.count}
                        </Card.Text>*/}
                    </Card.Body>
                </Card>
        }
        </div>);
}

export default ProductDetails;