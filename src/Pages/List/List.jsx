import React from 'react'
import Sidebar from '../../Components/Sidebar'
import { useEffect,useState } from 'react';
import { UserService } from '../../services/user.service';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tsToDateTime } from '../../helpers/shared-functions';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditModal from './EditModal'
//Declared columns of table
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'right'},
  {
    id: 'subcategory',
    label: 'Subcategory',
    minWidth: 170,
    align: 'right'
  },
  { id: 'quantity', label: 'Quantity', align: 'right',  minWidth: 30 },
  {
    id: 'supplier',
    label: 'Supplier',
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'Created',
    minWidth: 100,
    align: 'right',
    format: (value) => tsToDateTime(value),
  },
  {
    id: 'updatedAt',
    label: 'Last Updated',
    minWidth: 100,
    align: 'right',
    format: (value) => tsToDateTime(value),
  },
  
  {
    id: 'plu',
    label: 'PLU barCode',
    minWidth: 100,
    align: 'right'
  },
];
const List = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };
  const handleEdit = (editedData) => {
    // Implement your logic to update the data in the list
    console.log('Edited Data:', editedData);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let token = JSON.parse(localStorage.getItem('user')).jwt ;
  useEffect(()=>{
    UserService.getList(token).then((res)=>{
      if (res.status === 201) {
        setList(res.data)
      }
    }).catch((error)=>{
      console.log('error', error)
    })
  },[])
  return (
    <div>        <Sidebar />

<Paper sx={{ width: '75%', overflow: 'hidden',margin :'auto', marginTop :'2rem' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell
                  key={item.id}
                  align={item.align}
                  style={{ minWidth: item.minWidth }}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <Stack direction="row" spacing={2} >
                      <Button variant="contained" onClick={handleEditClick}>
                        Edit
                      </Button>
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </Stack>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    {selectedRow && (
        <EditModal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          rowData={selectedRow}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}

export default List