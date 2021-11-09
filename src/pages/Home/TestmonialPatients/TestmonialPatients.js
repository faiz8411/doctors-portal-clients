import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import peopl1 from '../../../images/people-1.png'
import peopl2 from '../../../images/people-2.png'
import peopl3 from '../../../images/people-3.png'

const TestmonialPatients = () => {
    return (
        <Container>
            <Grid item xs={8} md={5} sx={{ my: 3, textAlign: 'left' }}>
                <Typography sx={{ color: 'info.main' }}>
                    TestiMonial
                </Typography>
                <Typography variant="h3">
                    Whats Our Patients Says
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300 }}>
                <Grid item xs={8} md={4}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Possimus laboriosam hic quae omnis sapiente error autem vero modi quod, voluptate rem veritatis atque, labore quaerat neque officiis odio in quidem?
                    </Typography>
                    <Box sx={{ display: 'flex', my: 5, color: 'black' }}>
                        <img style={{ width: '50px', }} src={peopl1} alt="" />
                        <Box>
                            <Typography variant="h6" sx={{ color: 'info.main' }} style={{ my: 3, }}>
                                Winson Herry
                            </Typography>
                            <Typography style={{ color: 'gray' }}>
                                california
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, exercitationem laudantium libero corrupti sed pariatur adipisci ullam ratione nobis assumenda suscipit commodi? Dolor ducimus dicta quae omnis suscipit, laborum accusantium?
                    </Typography>
                    <Box sx={{ display: 'flex', my: 5, color: 'black' }}>
                        <img style={{ width: '50px' }} src={peopl2} alt="" />
                        <Box>
                            <Typography variant="h6" sx={{ color: 'info.main' }} style={{ my: 3, }} >
                                Harry Potter
                            </Typography>
                            <Typography sx={{ color: 'gray' }}>
                                california
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={8} md={4}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, exercitationem laudantium libero corrupti sed pariatur adipisci ullam ratione nobis assumenda suscipit commodi? Dolor ducimus dicta quae omnis suscipit, laborum accusantium?
                    </Typography>
                    <Box sx={{ display: 'flex', my: 5, color: 'black' }}>
                        <img style={{ width: '50px' }} src={peopl3} alt="" />
                        <Box>
                            <Typography variant="h6" style={{ my: 3 }} sx={{ color: 'info.main' }}>
                                ung jhon kung
                            </Typography>
                            <Typography sx={{ color: 'gray' }}>
                                California
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TestmonialPatients;