function Card ({category,icon,title}){
    return(
        <div className="category-card">
            <span className="card-icon">{icon}

            </span>
            <p className="name-card">{title}
                
            </p>
        </div>
    

    )
}