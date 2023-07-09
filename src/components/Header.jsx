import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Header = () => (
    <Grid 
        item={true}
        sx={{ px: '1rem', my: '2rem' }}
        >
        <Typography 
        variant="h3" 
        sx={{ pb:'1rem' }}>
            <FormattedMessage id="welcome.title" />
        </Typography>
        <Typography variant="body1">
          <FormattedMessage id="welcome.desc" />
        </Typography>
    </Grid>
)