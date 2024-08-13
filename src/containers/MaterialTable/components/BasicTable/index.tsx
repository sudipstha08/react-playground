import { useEffect, useMemo, useRef } from 'react'
import {
  MaterialReactTable,
  MRT_TableInstance,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { simpleTableData } from '../../utils'

export type Person = {
  id: number
  name: {
    firstName: string
    lastName: string
  }
  address: string
  city: string
  state: string
}

export const BasicTable = () => {
  const tableRef = useRef<MRT_TableInstance<Person> | null>(null)
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
        enableSorting: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
        enableSorting: true,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
        enableSorting: false,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
      {
        header: 'Actions',
        size: 100,
        Cell: ({ row }) => (
          <button
            onClick={() => handleDelete(row.original.id)}
            key={row.original.id}
            style={{
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 10px',
            }}
          >
            Delete
          </button>
        ),
      },
    ],
    [],
  )

  const handleDelete = (id: number) => {
    // eslint-disable-next-line no-console
    console.log(id)
    // setData(prevData => prevData.filter(row => row.id !== id))
    // tableRef?.current && tableRef.current.resetRowSelection()
    // const selectedRowCount = table.getSelectedRowModel().rows.length
  }

  const table = useMaterialReactTable({
    columns,
    enableFilters: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false,
    // getRowId: row => String(row.id),
    enableRowSelection: true,
    enableBatchRowSelection: false,
    enableSelectAll: false,
    enableMultiRowSelection: false,
    // onRowSelectionChange: handleRowSelection,
    data: simpleTableData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  })

  useEffect(() => {
    if (table && tableRef) {
      tableRef.current = table
    }
  }, [table])

  return <MaterialReactTable table={table} />
}
