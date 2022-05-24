import React from 'react';
import { Typography } from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  banner: {
    position: 'relative',
    background: 'black',
    color: 'white',
    height: '20%',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  text: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    margin: 'auto',
    height: '100px',
    width: 'auto',
  },
  typography: {
    //fontFamily: 'Montserrat',
    fontWeight: '700',
    display: 'inline',
  },
  lastWord: {
    color: 'var(--color-sweetFlag)',
  }
})

type BannerProps = {
  text: string;
}

function Banner({
  text,
}: BannerProps) {
  const classes = useStyles();

  const textToRender = React.useMemo(() => {
    if(!text) {
      return {
        text: '',
        lastWord: '',
      };
    }
    const splitWords = text.split(' ');

    if(!splitWords?.length) {
      return {
        text: '',
        lastWord: '',
      };
    }

    if(splitWords.length === 1) {
      return {
        text: '',
        lastWord: text,
      };
    }

    const lastWord = splitWords.pop();

    if(!lastWord) {
      return {
        text: splitWords.join(' '),
        lastWord: '',
      };
    }

    return {
      text: splitWords.join(' '),
      lastWord: lastWord,
    }
  }, [text])

  return (
    <div className={classes.banner}>
      <div className={classes.text}>
      {textToRender.text && <Typography variant="h2" className={classes.typography}>
        {`${textToRender.text} `}
      </Typography>}
      {textToRender.lastWord && <Typography variant="h2" className={`${classes.lastWord} ${classes.typography}`}>
        {textToRender.lastWord}
      </Typography>}
      </div>
      
    </div>
  )
}

export default Banner;