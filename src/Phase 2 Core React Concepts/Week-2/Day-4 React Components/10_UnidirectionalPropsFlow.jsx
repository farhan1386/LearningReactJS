function ProductCard({ product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
        </div>
    );
}

function ProductList() {

    const product = {
        name: "Laptop",
        price: 50000
    };

    return (
        <ProductCard product={product} />
    );
}