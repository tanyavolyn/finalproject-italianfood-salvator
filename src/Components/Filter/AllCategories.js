import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="all-categories">
            {['Alle Gerichte','PASTA', 'PIZZA', 'FLEISCH', 'FISCH', 'SALATE', 'SUPPEN'].map(category => <Filter key={category.id} category={category}/>)}
        </div>
    )
}

export default AllCategories;