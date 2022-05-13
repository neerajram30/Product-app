import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import {useStore} from '../store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp