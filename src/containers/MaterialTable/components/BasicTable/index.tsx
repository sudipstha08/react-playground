import { useMemo } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { simpleTableData } from '../../utils'

export type Person = {
  name: {
    firstName: string
    lastName: string
  }
  address: string
  city: string
  state: string
}

export const BasicTable = () => {
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
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    enableFilters: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false,
    data: simpleTableData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  })

  return <MaterialReactTable table={table} />
}
