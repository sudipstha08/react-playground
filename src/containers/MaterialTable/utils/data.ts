import { Person } from 'src/containers/MaterialTable/components'

//nested data is ok, see accessorKeys in ColumnDef below
export const simpleTableData: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Mike',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Pokhara',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Luke',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Kathmnadu',
    state: 'Bagmati',
  },
]
