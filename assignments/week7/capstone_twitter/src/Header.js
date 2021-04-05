import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="headline" color="colorSecondary" noWrap>
                    Twitter
                </Typography>
            </Toolbar>
        </AppBar>
    )
}