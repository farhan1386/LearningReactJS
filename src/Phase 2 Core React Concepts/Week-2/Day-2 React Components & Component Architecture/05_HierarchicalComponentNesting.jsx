function Logo() {
    return <img src="/logo.png" alt="Logo" />;
}

function Header() {
    return (
        <header>
            <Logo />
            <h1>My Store</h1>
        </header>
    );
}

function ProductCard() {
    return (
        <div>
            <h3>Laptop</h3>
            <p>₹50,000</p>
        </div>
    );
}

function ProductList() {
    return (
        <section>
            <ProductCard />
            <ProductCard />
        </section>
    );
}