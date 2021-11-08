import * as React from 'react';

export default function CustomPage({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
    </div>
  );
}
