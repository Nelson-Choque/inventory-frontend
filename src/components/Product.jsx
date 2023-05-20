import React, { useState } from 'react'
import EditForm from './EditForm';

const Product = (props) => {

    const [editFormActive, setEditFormActive] = useState(false);


    const handleProduct = async () => {


        if (!(event.target.id == 'product-button-delete')) {
            return "";
        }

        const confirmDelete = confirm("estas seguro de eliminar este producto?");

        if (!confirmDelete) {
            return "";
        }


        await fetch(`http://localhost:8080/product/${props.id}`, {
            method: 'DELETE',
        });

        props.fetchData();




    }

    const handleEditProduct = async () => {

        setEditFormActive(true);

    }



    return (

        <>
            <article className="bg-slate-700 p-4 rounded-lg flex flex-col gap-4 w-full max-w-xs" onClick={handleProduct}>

                <p className="text-sm"> id: {props.id} </p>

                <h3 className="text-xl font-semibold capitalize"> {props.name} </h3>

                <p className=""> {props.description} </p>

                <p className=""><strong>stock: </strong>{props.stock} </p>

                <p className=""> s/{props.price} </p>

                <div className="flex gap-4 flex-wrap">
                    <button id="product-button-edit" className="button-secundary" onClick={handleEditProduct} >Editar</button>
                    <button id="product-button-delete" className="button-secundary" >Eliminar</button>
                </div>

            </article>

            {editFormActive && <EditForm {...props} setEditFormActive={setEditFormActive} fetchData={props.fetchData} />}
        </>


    )
}

export default Product