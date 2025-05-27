import React from "react";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import Box from "@mui/material/Box";
const rows = [
  {
    id: 1,
    username: "@MUI",
    age: 38,
    desk: "D-456",
  },
  {
    id: 2,
    username: "@MUI-X",
    age: 25,
    desk: "D-042",
  },
];
const columns1 = [
  {
    field: "first",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
  {
    field: "last",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
];
const rows1 = [
  {
    id: 1,
    first: "Jane",
    last: "Carter",
  },
  {
    id: 2,
    first: "Jack",
    last: "Smith",
  },
  {
    id: 3,
    first: "Gill",
    last: "Martin",
  },
];
export default function Column_def() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 20,
    maxColumns: 20,
  });

  return (
    <>
      <Header />
      <Container>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Colummn Visible
        </Typography>
        <div style={{ height: 250, width: "100%" }}>
          <DataGrid
            columns={[
              { field: "username", hideable: false },
              { field: "age", hideable: false },
              { field: "desk" },
            ]}
            rows={rows}
            showToolbar
          />
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Commodity dataset
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            {...data}
            loading={loading}
            initialState={{
              ...data.initialState,
              columns: {
                ...data.initialState?.columns,
                columnVisibilityModel: {
                  id: false,
                  brokerId: false,
                  status: false,
                },
              },
            }}
          />
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Colummn Styling basic
        </Typography>
        <div style={{ height: 250, width: "100%" }}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              "& .super-app-theme--header": {
                backgroundColor: "rgba(255, 7, 0, 0.55)",
              },
            }}
          >
            <DataGrid rows={rows1} columns={columns1} />
          </Box>
        </div>
      </Container>
    </>
  );
}
