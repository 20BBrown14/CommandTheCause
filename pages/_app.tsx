import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import {AppBar, Toolbar, IconButton} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar';

const theme = createTheme();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavBar router={router} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
