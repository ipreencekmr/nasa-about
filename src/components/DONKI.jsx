import React from "react";
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import Grid from '@mui/material/Grid';
import donki from '../resources/donki.json';

export const DONKI = () => (
    <Grid 
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    xs={12} 
    sm={4} 
    md={4} >
        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
        <Typography variant="h5" sx={{ pb:'1rem' }}>
            <FormattedMessage id="donki.title" />
        </Typography>
        <Typography variant="body2">
            <FormattedMessage id="donki.desc" />
        </Typography>
        </Grid>
        {
            donki.map(item => (
                <Grid 
                    key={item.title} 
                    item={true} 
                    sx={{ px: '1rem', py: '1rem' }}>
                    <Typography variant="h6" sx={{ pb:'1rem' }}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.desc}
                    </Typography>
                </Grid>
            ))
        }
    </Grid>
);