import React from "react";
import { DONKI } from './DONKI';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const AboutUs = () => (
    <Grid 
        container={true} 
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mt:'2rem' }}
    >
        <Grid 
        xs={12} 
        sm={8} 
        md={8}>
        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant="h4" sx={{ pb:'1rem' }}>
            <FormattedMessage id="apod.title" />
            </Typography>
            <Typography variant="body1">
            <FormattedMessage id="apod.desc" />
            </Typography>
        </Grid>

        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant="h4" sx={{ pb:'1rem' }}>
            <FormattedMessage id="neo.title" />
            </Typography>
            <Typography variant="body1">
            <FormattedMessage id="neo.desc" />
            </Typography>
        </Grid>

        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant="h4" sx={{ pb:'1rem' }}>
            <FormattedMessage id="mro.title" />
            </Typography>
            <Typography variant="body1">
                <FormattedMessage id="mro.desc" />
            </Typography>
        </Grid>

        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant="h4" sx={{ pb:'1rem' }}>
            <FormattedMessage id="mission.title" />
            </Typography>
            <Typography variant="body1">
                <FormattedMessage id="mission.desc" />
            </Typography>
        </Grid>

        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant="h4" sx={{ pb:'1rem' }}>
            <FormattedMessage id="joinus.title" />
            </Typography>
            <Typography variant="body2">
                <FormattedMessage id="joinus.desc" />
            </Typography>
            <Typography variant="body1" sx={{ py: '1rem' }}>
                <FormattedMessage id="joinus.closure" />
            </Typography>
        </Grid>

        </Grid>
        <DONKI />
    </Grid>
);