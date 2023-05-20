import React, { useState } from 'react'

function AddForm({ fetchData, setFormActive }) {

    const [form, setForm] = useState({

        name: "",
        description: "",
        stock: 0,
        price: 0,


    });

    const createProduct = async (event) => {

        const dataForm = Object.values(form);

        const isEmpty = dataForm.every( (e) => {
            
            return e && true;

        });

        if( !isEmpty){


            console.log("no llegue")


            
            return "";

        }


        event.preventDefault();

        await fetch("http://localhost:8080/product", {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(form),

        });

        fetchData();

        setFormActive(false);


    }



    const setValueForm = (e, name) => {

        setForm({ ...form, [name]: e.target.value });

    }

    const cancelButton = () =>{
        
        const cancelConfirm = confirm("estas seguro de cancelar?");

        if( !cancelConfirm ){

            return "";
        }

        setFormActive(false);

    }

    return (

        <div className="form-container">
            <div className="container">

            <h2 className="title">Agregar producto</h2>

            <form className="form">
                <label className="form__name">Nombre</label>
                <input className="input" type="text" required onChange={(e) => setValueForm(e, "name")}></input>

                <label className="form__name">Descripcion</label>
                <textarea className="input" rows={5} required onChange={(e) => setValueForm(e, "description")}></textarea>
                <label className="form__name prueba">stock</label>
                <input className="input" type="text" required onChange={(e) => setValueForm(e, "stock")}></input>

                <label className="form__name">precio</label>
                <input className="input" type="text" required onChange={(e) => setValueForm(e, "price")}></input>

                <div className="flex gap-4">

                    <input className="button-primary" type="submit" value="Enviar" onClick={createProduct}></input>
                    <button className="button-primary" onClick={ cancelButton }>Cancelar</button>

                </div>
            </form>
            </div>

        </div>

    )
}

export default AddForm