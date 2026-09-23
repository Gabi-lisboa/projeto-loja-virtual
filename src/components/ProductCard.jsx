function ProductCard ({id,image,title,category,rating,price}){
    <div className="product-card">
        <img src={image} alt={title} />
        <p className="product=card">
            {category}
        </p>
        <h3>{title}</h3>
        <p className="product-rating">
            ({rating.rate})
        </p>
        <p className="product-pride">
            R${price}

        </p>
        <button className="btn-secondary">
            Adicionar ao carrinho
        </button>
    </div>
}

export default ProductCard