import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async() => {
    // If cart data is in the database, then we must have to use async await
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    const loadedProducts = await fetch(`http://localhost:5000/productsByIds`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    const products = await loadedProducts.json();

    const savedCart = [];

    for(const id in storedCart) {
        const addedProduct = products.find(product => product._id === id);
        if(addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductsLoader;