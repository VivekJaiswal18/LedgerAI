// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function GET() {
//   try {
//     // Uniswap data fetching function
//     const fetchUniSwapData = async () => {
//       const query = `{
//         uniswapDayDatas (first: 10) {
//           feesUSD
//           tvlUSD
//           volumeETH
//           txCount
//           volumeUSDUntracked
//           volumeUSD
//           date
//         }
//       }`;
//       const graphapi = process.env.GRAPH_API
//       const response = await axios.post(
//         `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//         { query }
//       );
//       return response.data.data.uniswapDayDatas;
//     };

//     // Llama insights fetching function
//     const fetchLlamaInsights = async (data: any[]) => {
//       const dataString = data
//         .map(
//           (d) => `On ${d.date}, Fees in USD: ${d.feesUSD}, Transaction Value in USD: ${d.tvlUSD}, Volume in ETH: ${d.volumeETH}, Transactions: ${d.txCount}, Untracked Volume in USD: ${d.volumeUSDUntracked}, Tracked Volume in USD: ${d.volumeUSD}`
//         )
//         .join('\n');

//       const prompt = `Here's the data from Uniswap: ${dataString}. Please provide me insights about this data?`;

//       const response = await axios.post(
//         'https://llama.us.gaianet.network/v1/chat/completions',
//         {
//           model: 'llama',
//           messages: [
//             {
//               role: 'system',
//               content: 'You are a helpful assistant that analyzes Uniswap data and provides insights.',
//             },
//             { role: 'user', content: prompt },
//           ],
//         }
//       );

//       return response.data.choices[0].message.content;
//     };

//     // Run the app
//     const data = await fetchUniSwapData();
//     const insights = await fetchLlamaInsights(data);

//     return NextResponse.json({ data, insights });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }


// app/api/route.ts
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// // Fetch data from Uniswap
// const fetchUniSwapData = async () => {
//   const query = `{
//     uniswapDayDatas(first: 10) {
//       feesUSD
//       tvlUSD
//       volumeETH
//       txCount
//       volumeUSD
//       date
//     }
//   }`;
//   const graphapi = process.env.GRAPH_API;
//   const response = await axios.post(
//     `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//     { query }
//   );
//   return response.data.data.uniswapDayDatas;
// };

// // Fetch data from CryptoPunks
// const fetchCryptoPunksData = async () => {
//   const query = `{
//     cryptoPunks(first: 10) {
//       id
//       punkIndex
//       owner
//       value
//     }
//   }`;
//   const response = await axios.post(
//     `https://gateway.thegraph.com/api/{api-key}/subgraphs/id/7V2NGQUTQKNoYMpnQcTYTAz9GZFmoC4Sij4xPXxk7kMC`,
//     { query }
//   );
//   return response.data.data.cryptoPunks;
// };

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const protocol = searchParams.get('protocol') || 'Uniswap';

//     let data;
//     if (protocol === 'Uniswap') {
//       data = await fetchUniSwapData();
//     } else if (protocol === 'CryptoPunks') {
//       data = await fetchCryptoPunksData();
//     }

//     return NextResponse.json({ data });
//   } catch (error) {
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }




// app/api/data/route.ts
// import { NextResponse } from 'next/server'; 
// import axios from 'axios';

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const protocol = searchParams.get('protocol') || 'uniswap'; // Default to Uniswap if no protocol is selected

//   try {
//     let data;

//     if (protocol === 'uniswap') {
//       data = await fetchUniSwapData();
//     } else if (protocol === 'cryptopunks') {
//       data = await fetchCryptoPunksData();
//     } else {
//       return NextResponse.json({ error: 'Unsupported protocol' }, { status: 400 });
//     }

//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }

// const fetchUniSwapData = async () => {
//   const query = `{
//     uniswapDayDatas (first: 10) {
//       feesUSD
//       tvlUSD
//       volumeETH
//       txCount
//       volumeUSDUntracked
//       volumeUSD
//       date
//     }
//   }`;
//   const graphapi = process.env.GRAPH_API;
//   const response = await axios.post(
//     `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//     { query }
//   );
//   return response.data.data.uniswapDayDatas;
// };

// const fetchCryptoPunksData = async () => {
//   const query = `{
//     accounts(first: 5) {
//       id
//       punks {
//         id
//       }
//     }
//     punks(first: 5) {
//       id
//       owner {
//         id
//       }
//       wrapped
//       bid {
//         id
//       }
//     }
//   }`;
//   const response = await axios.post(
//     'https://gateway.thegraph.com/api/{api-key}/subgraphs/id/7V2NGQUTQKNoYMpnQcTYTAz9GZFmoC4Sij4xPXxk7kMC',
//     { query }
//   );
//   return response.data.data;
// };




// app/api/data/route.ts
// import { NextResponse } from 'next/server'; 
// import axios from 'axios';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const protocol = searchParams.get('protocol');

//   try {
//     let data;

//     if (protocol === 'uniswap') {
//       const fetchUniSwapData = async () => {
//         const query = `{
//           uniswapDayDatas (first: 10) {
//             feesUSD
//             tvlUSD
//             volumeETH
//             txCount
//             volumeUSDUntracked
//             volumeUSD
//             date
//           }
//         }`;
//         const graphapi = process.env.GRAPH_API; 
//         const response = await axios.post(
//           `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//           { query }
//         );
//         return response.data.data.uniswapDayDatas;
//       };
      
//       data = await fetchUniSwapData();
//     } else if (protocol === 'cryptopunks') {
//       const fetchCryptoPunksData = async () => {
//         const query = `{
//           accounts(first: 5) {
//             id
//             punks {
//               id
//             }
//           }
//           punks(first: 5) {
//             id
//             owner {
//               id
//             }
//             wrapped
//             bid {
//               id
//             }
//           }
//         }`;
//         const graphapi = process.env.GRAPH_API; 
//         const response = await axios.post(
//           `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/7V2NGQUTQKNoYMpnQcTYTAz9GZFmoC4Sij4xPXxk7kMC`,
//           { query }
//         );
//         return response.data.data;
//       };

//       data = await fetchCryptoPunksData();
//     }

//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }


// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';
// import { createClient, gql } from 'urql';

// const uniswapQuery = gql`
//   {
//     uniswapDayDatas(first: 10) {
//       feesUSD
//       tvlUSD
//       volumeETH
//       txCount
//       volumeUSDUntracked
//       volumeUSD
//       date
//     }
//   }
// `;

// const cryptoPunksQuery = gql`
//   {
//     accounts(first: 5) {
//       id
//       punks {
//         id
//       }
//     }
//     punks(first: 5) {
//       id
//       owner {
//         id
//       }
//       wrapped
//       bid {
//         id
//       }
//     }
//   }
// `;

// const fetchGraphData = async (protocol: string) => {
//   const graphApiKey = process.env.GRAPH_API;
//   let client;
//   let query;

//   if (protocol === 'uniswap') {
//     client = createClient({
//         url: `https://gateway.thegraph.com/api/${graphApiKey}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
//         exchanges: []
//     });
//     query = uniswapQuery;
//   } else if (protocol === 'cryptopunks') {
//     client = createClient({
//         url: `https://gateway.thegraph.com/api/${graphApiKey}/subgraphs/id/7V2NGQUTQKNoYMpnQcTYTAz9GZFmoC4Sij4xPXxk7kMC`,
//         exchanges: []
//     });
//     query = cryptoPunksQuery;
//   } else {
//     throw new Error('Invalid protocol');
//   }

//   const result = await client.query(query).toPromise();
//   if (result.error) throw new Error(result.error.message);
//   return result.data;
// };

// const analyzeLlama = async (data: any) => {
//   const dataString = JSON.stringify(data);
//   const prompt = `Here's the data from ${data.uniswapDayDatas ? 'Uniswap' : 'CryptoPunks'}: ${dataString}. Please provide insights about this data.`;
  
//   const response = await axios.post(
//     'https://llama.us.gaianet.network/v1/chat/completions',
//     {
//       model: 'llama',
//       messages: [
//         {
//           role: 'system',
//           content: 'You are a helpful assistant that analyzes crypto data and provides insights.',
//         },
//         { role: 'user', content: prompt },
//       ],
//     }
//   );
  
//   return response.data.choices[0].message.content;
// };

// export async function GET(request: NextRequest) {
//   const protocol = request.nextUrl.searchParams.get('protocol');
  
//   if (!protocol) {
//     return NextResponse.json({ error: 'Protocol not specified' }, { status: 400 });
//   }

//   try {
//     const data = await fetchGraphData(protocol);
//     const insights = await analyzeLlama(data);
//     return NextResponse.json({ data, insights });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  try {
    const protocol = request.nextUrl.searchParams.get('protocol') || 'cryptopunks';

    if (protocol !== 'uniswap' && protocol !== 'cryptopunks') {
      return NextResponse.json({ error: 'Invalid protocol' }, { status: 400 });
    }

    const data = await fetchProtocolData(protocol);
    const insights = await fetchLlamaInsights(data, protocol);

    return NextResponse.json({ data, insights });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}

const fetchProtocolData = async (protocol: string) => {
  const graphapi = process.env.GRAPH_API;
  let query, subgraphId;

  if (protocol === 'uniswap') {
    query = `{
      uniswapDayDatas(first: 10) {
        feesUSD
        tvlUSD
        volumeETH
        txCount
        volumeUSDUntracked
        volumeUSD
        date
      }
    }`;
    subgraphId = '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV';
  } else {
    query = `{
      accounts(first: 5) {
        id
        punks {
          id
        }
      }
      punks(first: 5) {
        id
        owner {
          id
        }
        wrapped
        bid {
          id
        }
      }
    }`;
    subgraphId = '7V2NGQUTQKNoYMpnQcTYTAz9GZFmoC4Sij4xPXxk7kMC';
  }

  const response = await axios.post(
    `https://gateway.thegraph.com/api/${graphapi}/subgraphs/id/${subgraphId}`,
    { query }
  );

  return protocol === 'uniswap' ? response.data.data.uniswapDayDatas : response.data.data;
};

const fetchLlamaInsights = async (data: any, protocol: string) => {
  let dataString;

  if (protocol === 'uniswap') {
    dataString = data
      .map(
        (d: any) => `On ${d.date}, Fees in USD: ${d.feesUSD}, Transaction Value in USD: ${d.tvlUSD}, Volume in ETH: ${d.volumeETH}, Transactions: ${d.txCount}, Untracked Volume in USD: ${d.volumeUSDUntracked}, Tracked Volume in USD: ${d.volumeUSD}`
      )
      .join('\n');
  } else {
    dataString = JSON.stringify(data, null, 2);
  }

  const prompt = `Here's the data from ${protocol.charAt(0).toUpperCase() + protocol.slice(1)}: ${dataString}. Please provide insights about this data.`;

  const response = await axios.post(
    'https://llama.us.gaianet.network/v1/chat/completions',
    {
      model: 'llama',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that analyzes ${protocol.charAt(0).toUpperCase() + protocol.slice(1)} data and provides insights.`,
        },
        { role: 'user', content: prompt },
      ],
    }
  );

  return response.data.choices[0].message.content;
};