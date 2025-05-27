import React from 'react'
import Header from '../components/Header';
import Box from '@mui/material/Box';
import  Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
// นิยาม Column
function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  )
}
const GridCellExpand = React.memo(function GridCellExpand(props){
  const {width, value} = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);
  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };
  const handleMouseLeave = () => {
    setShowFullCell(false);
  }
  React.useEffect(() => {
    if(!showFullCell) {
      return undefined;
    }
    function handleKeyDown(nativeEvent) {
      if(nativeEvent.key === 'Escape') {
        setShowFullCell(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);
  return (
    <Box 
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%', 
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
    <Box 
    ref={cellDiv}
    sx={{
      height: '100%',
      width,
      display: 'block',
      position: 'absolute',
      top: 0,
    }}
    />
    <Box
      ref={cellValue}
      sx={{ whiteSpace: 'nowrap', overflow: 'hidden',  textOverflow: 'ellipsis'}}
    >
      {value}
    </Box>
    {showPopper && (
      <Popper
        open={showFullCell && anchorEl !== null}
        anchorEl = {anchorEl}
        style={{width, marginLeft: -17}}
      >
       <Paper
        elevation={1}
        style={{ minHeight: wrapper.current.offsetHeight - 3}}
       >
        <Typography variant='body2' style={{padding: 8}}>
          {value}
        </Typography>
       </Paper>
      </Popper>
    )}
    </Box>
  );
 
});
 function renderCellExpand(params) {
    return (
      <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
    );
  }
const columns = [
  { field: 'col1', headerName: 'Column 1', width: 80, renderCell: renderCellExpand },
  {
    field: 'col2',
    headerName: 'Column 2',
    width: 100,
    renderCell: renderCellExpand,
  },
  {
    field: 'col3',
    headerName: 'Column 3',
    width: 150,
    renderCell: renderCellExpand,
  },
];
const rows = [
  {
    id: 1,
    col1: 'Hello',
    col2: 'World',
    col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
  },
  {
    id: 2,
    col1: 'DataGridPro',
    col2: 'is Awesome',
    col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    id: 3,
    col1: 'MUI',
    col2: 'is Amazing',
    col3: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    id: 4,
    col1: 'Hello',
    col2: 'World',
    col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.',
  },
  {
    id: 5,
    col1: 'DataGridPro',
    col2: 'is Awesome',
    col3: 'Typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    id: 6,
    col1: 'MUI',
    col2: 'is Amazing',
    col3: 'Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];
// การเปลี่ยนสถานะ admin



export default function Column_def() {

  
 const initialRows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: 'Spain',
    discount: '',
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'France',
    discount: '',
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'Brazil',
    discount: 'junior',
  },
];
 const [rows1, setRows1] = React.useState(initialRows);
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows1((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const toggleAdmin = React.useCallback(
    (id) => () => {
      setRows1((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      );
    },
    [],
  );

  const duplicateUser = React.useCallback(
    (id) => () => {
      setRows1((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id);
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );

  const columns1 = React.useMemo(
    () => [
      { field: 'name', type: 'string' },
      { field: 'age', type: 'number' },
      { field: 'dateCreated', type: 'date', width: 130 },
      { field: 'lastLogin', type: 'dateTime', width: 180 },
      { field: 'isAdmin', type: 'boolean', width: 120 },
      {
        field: 'country',
        type: 'singleSelect',
        width: 120,
        valueOptions: [
          'Bulgaria',
          'Netherlands',
          'France',
          'United Kingdom',
          'Spain',
          'Brazil',
        ],
      },
      {
        field: 'discount',
        type: 'singleSelect',
        width: 120,
        editable: true,
        valueOptions: ({ row }) => {
          if (row === undefined) {
            return ['EU-resident', 'junior'];
          }
          const options = [];
          if (!['United Kingdom', 'Brazil'].includes(row.country)) {
            options.push('EU-resident');
          }
          if (row.age < 27) {
            options.push('junior');
          }
          return options;
        },
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  );

  return (
    <>
      <Header/>
      <Container>
        <Typography sx={{fontSize: "20px", fontWeight: 'bold', marginTop: "2rem"}}>นิยาม Column</Typography>
         <div style={{ height: 300, width: '100%', marginTop: '2rem' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
        <Typography sx={{fontSize: "20px", fontWeight: 'bold', marginTop: "2rem"}}>การเปลี่ยนสถานะ admin</Typography>
        <div style={{ height: 300, width: '100%', marginTop: '2rem' }}>
            <DataGrid rows={rows1} columns={columns1} />
        </div>
      </Container>
    </>
  )
}

