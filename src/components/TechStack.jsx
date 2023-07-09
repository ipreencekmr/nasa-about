import React from "react";
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import techstack from '../resources/techstack.json';

export const TechStack = () => (
    <Grid 
        container={true}
        xs={12}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mt:'2rem' }}
        >
        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <Typography variant='h5' sx={{ pb:'1rem' }}>
            <FormattedMessage id="techstack"></FormattedMessage>
            </Typography>
            <Typography variant='body2'>
            <FormattedMessage id="techstack.desc"></FormattedMessage>
            </Typography>
        </Grid>

        <Grid item={true} sx={{ px: '1rem', py: '1rem' }}>
            <List 
            sx={{ 
                width: '100%',
                bgcolor: 'background.paper' 
                }}
            >
                {
                techstack.map((item)=>(
                    <ListItem key={item.title} alignItems="flex-start">
                        <ListItemIcon>
                        <AcUnitOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                                primary={ item.title }
                                primaryTypographyProps={{
                                    color: 'text.primary',
                                    fontWeight: 'medium',
                                    variant: 'body1',
                                    paddingBottom:'0.5rem'
                                }}
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    { item.desc }
                                    </Typography>
                                }
                                />
                    </ListItem>
                ))
                }
            </List>
        </Grid>
    </Grid>
);