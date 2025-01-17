import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const[categories,setCategories]=useState([]);
  

    useEffect(() => {
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCategories(data))
        
    },[])
    return (
        <div className="space-y-2">
            <h2 className="text-3xl">All categories</h2>
            {
                categories.map(category =><Link className="block p-2 ml-4 text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;