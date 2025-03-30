import DataTable from 'react-data-table-component';
import productsJson from './products.json'

export const ProductsView = () => {

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'Categoría',
            selector: row => row.categoria,
            sortable: true,
        },
        {
            name: 'Marca',
            selector: row => row.marca,
            sortable: true,
        },
        {
            name: 'Precio Unitario',
            selector: row => row.precio.toFixed(2),
            sortable: true,
        },
    ];

    const data = productsJson

    return (
        <div className="flex flex-col h-full w-ful overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-2">Productos</h1>
            <DataTable
                columns={columns}
                data={data}
                pagination
                responsive
                dense
                noDataComponent="Aún no hay productos."
                noHeader
            />
        </div>
    )
}