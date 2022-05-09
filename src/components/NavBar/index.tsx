import {AppBar, Toolbar, Grid} from '@mui/material';
import MembersNavItem from './MembersNavItem';
import {makeStyles} from '@mui/styles';
import HomeNavItem from './HomeNavItem';
import type { NextRouter } from 'next/router';

const useStyles = makeStyles({
  appBar: {
    background: 'black',
    color: 'var(--CtC_Purple)',
    alignItems: 'center',
  }
});

type NavBarProps = {
  router: NextRouter;
}

function NavBar({
  router
}: NavBarProps) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Grid container={true} spacing={2}>
          <HomeNavItem router={router} />
          <MembersNavItem router={router} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;