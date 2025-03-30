import DataTable from 'react-data-table-component';
import sellsJson from './sells.json'

export const SellsView = () => {

    const paginationComponentOptions = {
        rowsPerPageText: "Filas por página:",
        rangeSeparatorText: "de",
        selectAllRowsItemText: "Todo",
    };

    const columns = [
        {
            name: 'Cliente',
            selector: row => row.cliente,
            sortable: true,
        },
        {
            name: 'Precio Total',
            selector: row => row.precio_total.toFixed(2),
            sortable: true,
        },
        {
            name: 'Fecha Venta',
            selector: row => row.fecha_venta,
            sortable: true,
        }
    ];

    const data = sellsJson

    const ExpandedComponent = ({ data }) => (
        <div className="p-2">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-sm">
                        <th className="p-2 text-sm text-gray-600">Producto</th>
                        <th className="p-2 text-sm text-gray-600">Cantidad</th>
                        <th className="p-2 text-sm text-gray-600">Precio Unitario</th>
                        <th className="p-2 text-sm text-gray-600">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {data.detalle.map((item, index) => (
                        <tr key={index}>
                            <td className="p-2 text-sm">{item.producto}</td>
                            <td className="p-2 text-sm">{item.cantidad}</td>
                            <td className="p-2 text-sm">{item.precio_unitario.toFixed(2)}</td>
                            <td className="p-2 text-sm">{item.precio_total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="flex flex-col h-full w-ful overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-2">Ventas</h1>
            <div className="w-full h-full overflow-y-auto">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    responsive
                    dense
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent="No hay datos disponibles"
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    noHeader
                />
            </div>
        </div>
    )
}