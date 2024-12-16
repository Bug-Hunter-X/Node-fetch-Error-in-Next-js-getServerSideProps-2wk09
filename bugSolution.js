```javascript
// pages/about.js
import fetch from 'node-fetch';

export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { data: null, error: error.message } };
  }
}

export default function About({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```