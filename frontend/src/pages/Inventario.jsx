import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { toast } from "react-hot-toast";
import { createInv, deleteInv, getAllInv, updateInv } from "../api/inventario-api";
import { getAllLote } from "../api/lotes-api";
import "./Inventario.css"

export function Inventario(){

    //PARA CARGAR LOS DATOS DE LA API

    const [p, setp] = useState([]);

    useEffect(() =>{
        async function loadP() {
            const res = await getAllInv();
            setp(res.data);
        }
        loadP();
    }, [])

    //PARA CREAR O REGISTRAR DATOS EN LA API

    const {
        register, 
        handleSubmit, 
        formState:{errors}
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (productData) => {
        const formData = new FormData();
        
        // Agregar los campos del producto al FormData
        Object.keys(productData).forEach((key) => {
            formData.append(key, productData[key]);
        });
    
        // Asegurarse de que la imagen se agregue como archivo
        if (productData.imagen && productData.imagen[0]) {
            formData.append("imagen", productData.imagen[0]);
        } else {
            toast.error("Por favor, selecciona una imagen.");
            return;
        }
    
        try {
            await createInv(formData);
            toast.success('Producto Creado');
            setTimeout(() => {
                navigate(0);
            }, 800);
        } catch (error) {
            toast.error('Error al crear el producto. Verifica los datos.');
            console.error(error);
        }
    });

     //PARA EDITAR - ABRIR MODAL

    const [selected, setSelected] = useState(null)

    const handleSelectedClick = (p) =>{
        setSelected(p)
    }

    //EXTRAS SLIDE DE REGISTRO O IMPORT

    const [visible, setVisible] = useState(false)
    const [visibleI, setVisibleI] = useState(false)

    const slide = () => {
        setVisible(!visible);
        if(visibleI){
            setVisibleI(!visibleI)
        }
    }

    const slideI = () => {
        setVisibleI(!visibleI);
        if(visible){
            setVisible(!visible)
        }
    }

    return(
        <div className="inventario">
            <h3>INVENTARIO DE PRODUCTOS</h3>

            <div className="crear">
                <h2 onClick={slide} style={{cursor:'pointer'}}>REGISTRAR NUEVO PRODUCTO</h2>
                {(visible &&
                <form onSubmit={onSubmit}>
                    <div className="f1">
                        <div className="rp-nombre">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="nombre" className="form-control" id="nombre"
                                {...register("nombre", {required: true})}
                            />
                            {errors.nombre && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div> 
                        <div className="rp-marca">
                            <label htmlFor="marca">Marca:</label>
                            <input type="text" name="marca" className="form-control" id="marca"
                                {...register("marca", {required: true})}
                            />
                            {errors.marca && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div>
                        <div className="rp-tipo">
                            <label htmlFor="tipo">Tipo:</label>
                            <select name="tipo" id="tipo" className="form-control"
                                {...register("tipo", {required: true})}>
                                <option value="">Seleccionar...</option>
                                <option value="gaseosa">Gaseosa</option>
                                <option value="alcoholica">Alcohólica</option>
                                <option value="alcoholica">Agua</option>
                            </select>
                            {errors.tipo && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div>

                        <div className="rp-imagen">
                            <label htmlFor="imagen">Imagen del Producto:</label>
                            <input
                                type="file"
                                name="imagen"
                                className="form-control"
                                id="imagen"
                                {...register("imagen", { required: true })}
                            />
                            {errors.imagen && <span className="validacion1">Este campo es requerido</span>}
                        </div>
                    </div>
                    <div className="f2">
                        
                        <div className="rp-volumen">
                            <label htmlFor="volumen">Volumen (ml):</label>
                            <input type="number" name="volumen" className="form-control" id="volumen"
                                {...register("volumen", {required: true})}
                            />
                            {errors.volumen && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div>
                        <div className="rp-contenido_alcoholico">
                            <label htmlFor="contenido_alcoholico">% de Alcohol:</label>
                            <input type="number" name="contenido_alcoholico" className="form-control" id="contenido_alcoholico" step="0.01"
                                {...register("contenido_alcoholico", {required: true})}
                            />
                            {errors.contenido_alcoholico && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div>
                        <div className="rp-descripcion">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea name="descripcion" id="descripcion" className="form-control" 
                            {...register("descripcion", {required: true})}></textarea>
                            {errors.descripcion && <span className="validacion1" >Este campo es requerido!!</span>}
                        </div>
                        
                    </div>
                    <div className="btn-guardar ">
                        <button className="hover:bg-teal-500">Guardar</button>
                    </div>
                </form>
                )}
            </div>

            <div className="mostrar">
                    <h2> LISTA DE PRODUCTOS </h2>
                    <table className="min-w-ful ">
                        <thead>
                            <tr >
                                <th className="p-id">ID</th>
                                <th className="p-nombre">NOMBRE</th>
                                <th className="p-marca">MARCA</th>
                                <th className="p-tipo">TIPO</th>
                                <th className="p-volumen">VOLUMEN</th>
                                <th className="p-c-alcohol">CANTIDAD</th>
                                <th className="p-opciones">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {p.map((producto) => (
                                <tr key={producto.id} className="border-b border-gray-500 hover:bg-emerald-100">
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.marca}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.volumen}</td>
                                    <td>{producto.contenido_alcoholico}</td>
                                    <td className="m-btn">
                                        <div className="edit">
                                            <button className="edit-btn hover:bg-teal-500" onClick={() => handleSelectedClick(producto)} key={producto.id}>EDITAR</button> 
                                        </div>
                                        <div className="delete">
                                            <button onClick={async() => {
                                                const accepted = window.confirm('Estas seguro de eliminar este Producto')
                                                if(accepted){
                                                    await deleteInv(producto.id)
                                                    toast.success('Producto Eliminado');
                                                    setTimeout(() =>{
                                                        navigate(0)
                                                    }, 500)
                                                }
                                            }} id="eliminarprod" name="eliminarprod" value="" className="delete-btn hover:bg-red-400">ELIMINAR</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        
                    </table>
                    
                </div>

                {selected &&(
                <EditarProd prod={selected} onClose={() =>setSelected(null)} />
                )}
        </div>

    )
}


function EditarProd({prod, onClose}){

    const [formValues, setFormValues] = useState({
        nombre: prod.nombre,
        marca: prod.marca,
        tipo: prod.tipo,
        volumen: prod.volumen,
        contenido_alcoholico: prod.contenido_alcoholico,
        descripcion: prod.descripcion,
        imagen:null
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const handleFileChange = (e) => {
        setFormValues({
            ...formValues,
            imagen: e.target.files[0]
        });
    };

    const handleSubmit2 = async () => {
        // Crear un FormData para manejar tanto los campos de texto como la imagen
        const updatedData = new FormData();
        Object.keys(formValues).forEach((key) => {
            // Si es una imagen, verificar que sea un archivo antes de agregarlo
            if (key === "imagen" && formValues[key] instanceof File) {
                updatedData.append(key, formValues[key]);
            } else {
                updatedData.append(key, formValues[key]);
            }
        });

        try {
            await updateInv(prod.id, updatedData);
            toast.success('Editado con éxito');
            onClose();
            setTimeout(() => {
                window.location.reload();
            }, 700);
        } catch (error) {
            toast.error('Error al actualizar el producto');
            console.error(error);
        }
    };

    return(
        <div className="modal">
            <div className="detalle-prod">
                <h2>EDITAR PRODUCTO</h2>
                <form onSubmit={(e) => e.preventDefault()}>

                    <div className="ep-nombre">
                        <label htmlFor="nombre">Nombre:</label><br/>
                        <input type="text" name="nombre" className="form-control" id="nombre" value={formValues.nombre} onChange={handleInputChange}/>
                    </div> 
                    <div className="ep-marca">
                        <label htmlFor="marca">Marca:</label><br/>
                        <input type="text" name="marca" className="form-control" id="marca" value={formValues.marca} onChange={handleInputChange}/>
                    </div> 
                    <div className="ep-tipo">
                        <label htmlFor="tipo">Tipo:</label><br/>
                        <select name="tipo" id="tipo" className="form-control" value={formValues.tipo} onChange={handleInputChange}>
                            <option value="">Seleccionar...</option>
                            <option value="gaseosa">Gaseosa</option>
                            <option value="alcoholica">Alcohólica</option>
                            <option value="alcoholica">Agua</option>
                        </select>
                    </div>
                    <div className="ep-volumen">
                        <label htmlFor="volumen">Volumen:</label><br/>
                        <input type="number" name="volumen" className="form-control" id="volumen" value={formValues.volumen} onChange={handleInputChange}/>
                    </div> 
                    <div className="ep-contenido_alcoholico">
                        <label htmlFor="contenido_alcoholico">% de Alcohol:</label><br/>
                        <input type="text" name="contenido_alcoholico" className="form-control" id="number" step="0.01" value={formValues.contenido_alcoholico} onChange={handleInputChange}/>
                    </div> 
                    <div className="ep-descripcion">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea name="descripcion" id="descripcion" className="form-control" 
                            value={formValues.descripcion} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="ep-imagen">
                        <label htmlFor="imagen">Imagen del Producto:</label><br />
                        <input type="file" name="imagen" className="form-control" id="imagen" onChange={handleFileChange} />
                    </div>
                    
                    <div className="ep-btn">
                        <button className="edit-btn hover:bg-teal-500" type="button" onClick={handleSubmit2}>GUARDAR CAMBIOS</button>
                        <button className="cerrar-btn hover:bg-gray-300" onClick={onClose}>CERRAR</button> 
                    </div>
                    
                </form>
            </div>
        </div>
    )
}