import type { AppProps } from 'next/app';
import '@/styles/utilities.css';
import '@/styles/homepage.css';
import '@/styles/404-not-found.css';
import '@/styles/checkout.css';
import '@/styles/complete-checkout.css';
import '@/styles/detail.css';
import '@/styles/edit-profile.css';
import '@/styles/navbar-log-in.css';
import '@/styles/overview.css';
import '@/styles/sidebar.css';
import '@/styles/sign-in.css';
import '@/styles/sign-up-photo-success.css';
import '@/styles/sign-up-photo.css';
import '@/styles/sign-up-success.css';
import '@/styles/sign-up.css';
import '@/styles/transactions-detail.css';
import '@/styles/transactions.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
