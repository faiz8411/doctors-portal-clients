import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';

const Blogs = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{ color: 'Info.main' }}>
                Our Blog
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ backgroundColor: 'gray' }}>
                            i love blogs
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography>
                            i love blogs
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography>
                            i love blogs
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Blogs;