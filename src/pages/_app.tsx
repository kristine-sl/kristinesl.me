import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';

const App = ({ pageProps, ...props }: AppProps) => {
  const Component = props.Component as any;
  return (
    <ReduxProvider store={store}>
      <Head>
        <title>Kristine S. Lorentzen</title>
        <meta name="description" content="Curriculum Vitae" />
      </Head>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default App;
