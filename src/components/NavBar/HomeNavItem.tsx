import { IconButton, Typography, Grid } from "@mui/material";
import type { NextRouter } from 'next/router';

const HREF = '/';

type HomeNavItemProps = {
  router: NextRouter;
}

function HomeNavItem({
  router
}: HomeNavItemProps) {
  return (
    <Grid item={true}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => router.push(HREF)}
      >
        <Typography variant="h5">
          Home
        </Typography>
      </IconButton>
    </Grid>
  )
}

export default HomeNavItem;