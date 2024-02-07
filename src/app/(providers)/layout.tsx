import { AuthProvider } from '@/app/(providers)/_contexts/auth.context';
import { Provider } from 'react-redux';

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
