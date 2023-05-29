import { Breadcrumbs, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
import { Link, useLoaderData } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the About.tsx loader function!";
}


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export function Component() {
    let data = useLoaderData() as string;
    return (
       <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </Typography>
                </CardContent>
            </Card>
            {/* <Typography paragraph>
                <h1>Home</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                quisque non tellus. Convallis convallis tellus id interdum velit
                laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography> */}
       </>
    )
}

Component.displayName = "HomePage";