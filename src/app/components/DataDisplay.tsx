// import React, { useState } from 'react';
// import { useQuery } from 'react-query';

// const fetchData = async (protocol: string) => {
//   const response = await fetch(`/api/fetchData?protocol=${protocol}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const DataDisplay: React.FC = () => {
//   const [protocol, setProtocol] = useState<'uniswap' | 'cryptopunks'>('uniswap');

//   const { data, isLoading, error } = useQuery(['cryptoData', protocol], () => fetchData(protocol), {
//     enabled: !!protocol,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {(error as Error).message}</div>;

//   return (
//     <div>
//       <div className="mb-4">
//         <label htmlFor="protocol" className="mr-2">Choose Protocol:</label>
//         <select
//           id="protocol"
//           value={protocol}
//           onChange={(e) => setProtocol(e.target.value as 'uniswap' | 'cryptopunks')}
//           className="border p-2"
//         >
//           <option value="uniswap">Uniswap</option>
//           <option value="cryptopunks">CryptoPunks</option>
//         </select>
//       </div>
      
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold">Data:</h2>
//         <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
//           {JSON.stringify(data?.data, null, 2)}
//         </pre>
//       </div>
      
//       <div>
//         <h2 className="text-xl font-semibold">Insights:</h2>
//         <p className="whitespace-pre-wrap">{data?.insights}</p>
//       </div>
//     </div>
//   );
// };

// export default DataDisplay;


import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchData = async (protocol: string) => {
  const response = await fetch(`/api/fetchData${protocol ? `?protocol=${protocol}` : ''}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DataDisplay: React.FC = () => {
  const [protocol, setProtocol] = useState<'uniswap' | 'cryptopunks'>('uniswap');

  const { data, isLoading, error } = useQuery(['cryptoData', protocol], () => fetchData(protocol), {
    enabled: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="protocol" className="mr-2">Choose Protocol:</label>
        <select
          id="protocol"
          value={protocol}
          onChange={(e) => setProtocol(e.target.value as 'uniswap' | 'cryptopunks')}
          className="border p-2 text-black"
        >
          <option value="uniswap">Uniswap</option>
          <option value="cryptopunks">CryptoPunks</option>
        </select>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Data:</h2>
        <pre className="bg-black p-4 rounded overflow-auto max-h-60">
          {JSON.stringify(data?.data, null, 2)}
        </pre>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold">Insights:</h2>
        <p className="whitespace-pre-wrap">{data?.insights}</p>
      </div>
    </div>
  );
};

export default DataDisplay;