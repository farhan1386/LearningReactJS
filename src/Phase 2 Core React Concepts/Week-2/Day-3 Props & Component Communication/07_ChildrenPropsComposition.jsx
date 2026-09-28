function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

<Card>
    <h2>Product Details</h2>
    <p>Laptop - ₹50,000</p>
</Card>
