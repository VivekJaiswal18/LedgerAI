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
/* eslint-disable @typescript-eslint/no-explicit-any */
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
/* eslint-enable @typescript-eslint/no-explicit-any */
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