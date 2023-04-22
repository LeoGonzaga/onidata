import { useCallback, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@components/Avatar';
import TablePagination from '@mui/material/TablePagination';
import Center from '@components/Center';
import { v4 as uuidv4 } from 'uuid';

interface IRow {
  avatar: string;
  name: string;
  price: number;
  brand: string;
  stock: number;
  sales: number;
}

export function TableCustom({ data }: any) {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage + 1);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Marca</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Qtn. Vendas</TableCell>
            <TableCell align="right">Qtn. estoque</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: IRow) => (
            <TableRow
              key={uuidv4()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                <Center>
                  <Avatar url={row.avatar} />
                  {row.name}
                </Center>
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">R$ {row.price}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[15]}
          component="div"
          count={data.length}
          rowsPerPage={15}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={() => console.log('hiasuhd')}
        />
      </Table>
    </TableContainer>
  );
}
