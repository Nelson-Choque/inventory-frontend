import React, { useState } from 'react'

function EditForm({id,name,description,stock,price,setEditFormActive,fetchData}) {

    
    const [form, setForm] = useState({

        name,
        description,
        stock,
        price,


    });

    const setValueForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });
        

    }

    const handleSubmit = async (e)=>{

        e.preventDefault();

        await fetch( `http://localhost:8080/product/${id}`,{


            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',

            body: JSON.stringify(form)

            

        } )

        fetchData();
        
        setEditFormActive(false)



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

                <h2 className="text-2xl font-bold title">Editar producto</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <label className="form__name">Nombre</label>
                    <input className="input" name="name" type="text" required value={form.name} onChange={setValueForm}></input>

                    <label className="form__name">Descripcion</label>
                    <textarea className="input" name="description" rows={5} required value={form.description} onChange={setValueForm}></textarea>

                    <label className="form__name">stock</label>
                    <input className="input" name="stock" type="text" required value={form.stock} onChange={setValueForm}></input>

                    <label className="form__name">precio</label>
                    <input className="input" name="price" required value={form.price} onChange={setValueForm}></input>

                    <div className="flex gap-4">

                        <input className="button-primary" type="submit" value="Enviar" ></input>
                        <button className="button-primary" onClick={ cancelButton }>Cancelar</button>
                    </div>

                </form>
            </div>

        </div>


    )
}

export default EditForm