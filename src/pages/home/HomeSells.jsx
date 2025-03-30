import Select from 'react-select'
import productsJson from '../products/products.json'
import { useState } from "react"
import { toast, Toaster } from "sonner"

export const HomeSells = () => {

    const [products, setProducts] = useState([])

    const options = productsJson.map(p => {
        return {
            value: p.id,
            label: p.nombre
        }
    })

    const handleProductSelect = (productSelected) => {
        setProducts([
            ...products,
            {
                ...productsJson.filter(p => p.id === productSelected.value)[0],
                cantidad: 1
            }
        ])
    }

    const calculateTotal = (products_p) => {
        let total = 0.0
        products_p.forEach(p => {
            total += p.precio
        });
        return total.toFixed(2)
    }

    const sellProducts = () => {
        setProducts([])
        toast.success("Venta exitosa.")
    }

    const revertProduct = (id_p) => {
        setProducts(products.filter(p => p.id !== id_p))
    }

    return (
        <div className="flex flex-col h-full w-ful">
            <div className="w-full mb-3">
                <h1 className="text-2xl font-semibold mb-2">Vender</h1>
                <Select value={null} onChange={handleProductSelect} options={options} />
            </div>
            <h1 className="text-2xl font-semibold">Productos</h1>
            <div className="w-full flex-1 overflow-auto">
                <table className="w-full border-collapse flex-grow">
                    <thead>
                        <tr className="border-b border-gray-300 text-left">
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Cantidad</th>
                            <th className="p-2">Precio Unitario</th>
                            <th className="p-2">Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((p, idx) => (
                                <tr key={idx} className="border-b border-gray-200">
                                    <td className="p-2">{p.nombre}</td>
                                    <td className="p-2">{p.cantidad}</td>
                                    <td className="p-2">{p.precio.toFixed(2)}</td>
                                    <td className="p-2">{p.precio.toFixed(2)}</td>
                                    <td className="p-2">
                                        <button className="bg-red-600 px-2 cursor-pointer text-white rounded-md hover:bg-red-400"
                                            onClick={() => revertProduct(p.id)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-4 text-center text-gray-500">No hay productos seleccionados</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <div className="flex mt-2 p-2 bg-gray-200 rounded-md">
                <h1 className="tex-xl font-semibold">Total: S/. {calculateTotal(products)}</h1>
            </div>
            <hr className="border-t-2 border-gray-300" />
            <div className=" flex w-full justify-center items-center gap-x-2 mt-4">
                <button
                    className="w-20 h-15 bg-green-600 rounded-md text-white cursor-pointer 
               hover:bg-green-400
               disabled:bg-gray-400 disabled:text-gray-200 disabled:border-none 
               disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:text-gray-200"
                    onClick={sellProducts}
                    disabled={products.length === 0}
                >
                    Vender
                </button>
                <button
                    className="w-20 h-15 bg-red-600 rounded-md text-white cursor-pointer
                    hover:bg-red-400
               disabled:bg-gray-400 disabled:text-gray-200 disabled:border-none 
               disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:text-gray-200"
                    onClick={() => setProducts([])}
                    disabled={products.length === 0}
                >
                    Cancelar
                </button>
            </div>
            <Toaster richColors />
        </div>
    );
}
