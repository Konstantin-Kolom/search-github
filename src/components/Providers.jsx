import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const qweryclient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={qweryclient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default Providers;
