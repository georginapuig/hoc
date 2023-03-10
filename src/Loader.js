import React from 'react';
import { useState } from 'react';

export default function Loader(WrappedComponent) {
  const [loading, setLoading] = useState(true);

  return (props) => {
    setInterval(() => {
      setLoading(false);
    }, 2000);

    return (
      <div>{loading ? <p>loading...</p> : <WrappedComponent {...props} />}</div>
    );
  };
}
