import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { BasicTable } from './components'
import { TableContextProvider } from './store'

export const MaterialTable: FC = () => {
  const [value, setValue] = useState('1')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1', padding: 2 }}>
      <TableContextProvider>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Simple Table" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BasicTable />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </TableContextProvider>
    </Box>
  )
}
