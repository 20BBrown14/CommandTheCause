import React from 'react';
import { IconButton, Menu, MenuItem, Typography, Grid } from '@mui/material';
import type { NextRouter } from 'next/router';

const LEADERBOARD_HREF = '/members/leaderboard';
const GAME_REPORTING_HREF = '/members/game-reporting';

type MembersNavItemProps = {
  router: NextRouter;
}

function MembersNavItem({
  router
}: MembersNavItemProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Grid item={true}>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-controls="members-menu"
          onClick={handleMenu}
        >
          <Typography variant="h5">
            Members
          </Typography>
        </IconButton>
        <Menu
        id="members-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted={true}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => router.push(LEADERBOARD_HREF) }>
          <Typography>
            Leaderboard
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => router.push(GAME_REPORTING_HREF) }>
          <Typography>
            Game Reporting
          </Typography>
        </MenuItem>
      </Menu>
    </Grid>
  )
}

export default MembersNavItem;