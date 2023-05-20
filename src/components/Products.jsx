import { useEffect, useState } from "react";
import Product from "./product";
import Form from "./AddForm";
import EditForm from "./EditForm";

function Products(){

    const [data,setData] = useState([]);
    const [formActive,setFormActive] = useState(false);


    useEffect( ()=>{


        fetchData();


    },[])


    const fetchData = async () =>{

        try {
            
            const response = await fetch("http://localhost:8080/product");

            const jsonData = await response.json();

            setData(jsonData);

        } catch (error) {

            console.log("error: "+ error)
            
        }

        
    }






    return <>

        <div className="p-4 section-products">

            <h2 className="text-2xl font-bold">Productos</h2>

            <p>todos nuestros productos disponibles</p>

            <button className="button-primary" onClick={ ()=> setFormActive(true)} >agregar</button>

            <section className="flex gap-4 flex-wrap my-4 ">
                {
                    data.map( (product)=>(

                        <Product id={product.id_product} name={product.name} description={product.description} stock={product.stock} price={product.price} fetchData={fetchData} />
                        
                    )

                        
                    )
                }

            </section>

            { formActive && <Form fetchData={fetchData} setFormActive = {setFormActive} />}

        </div>


    </>


};




export default Products;