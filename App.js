import { useEffect, useState } from 'react';
import MainStack from './stacks/MainStack';
import Loading from './screens/Loading';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  if (!loading) {
    return <Loading />;
  } else {
    return <MainStack />;
  }
}
