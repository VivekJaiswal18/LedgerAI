// app/ExampleComponent.tsx
import React from 'react';

const ExampleComponent = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ExampleComponent;
