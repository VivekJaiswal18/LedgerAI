// 'use client'
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(false);


  
//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://formula1.us.gaianet.network/v1/chat/completions',
//         {
//           messages: [
//             { role: 'system', content: "You are an expert in Formula 1, with deep knowledge of race history, driver statistics, and team strategies. Provide brief and accurate answers to questions about F1. Pay special attention to formatting—use bullet points, bolding, and line breaks to make the text easier to read." },
//             { role: 'user', content: input },
//           ],
//         },
//         {
//           headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const assistantMessage = response.data.choices[0].message;

//       setMessages((prev) => [...prev, assistantMessage]);

//       setInput('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
// <div className='mt-28 mx-5'>
//   <h1 className='text-3xl font-bold text-amber-700 mb-5'>Chat with EinsteinAI</h1>
//  <div className=' justify-center items-center flex flex-col bg-yellow-50 p-5'>

//   <div className='bg-white mb-4 rounded-lg shadow-lg p-4 w-full md:w-2/3 lg:w-1/2' style={{ maxHeight: '400px', overflowY: 'auto' }}>
//     {messages.map((message, index) => (
//       <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//         <strong className={message.role === 'user' ? 'text-blue-600' : 'text-amber-700'}>
//           {message.role === 'user' ? 'You' : 'Einstein'}:
//         </strong>
//         <span className={`ml-2 ${message.role === 'user' ? 'text-gray-700' : 'text-gray-900'}`}>
//           {message.content}
//         </span>
//       </div>
//     ))}
//     {loading && <p className='text-gray-500'>Loading...</p>}
//   </div>

//   <form onSubmit={handleChatSubmit} className='mb-4 bottom-0 fixed w-full md:w-2/3 lg:w-1/2 flex items-center'>
//     <input
//       type='text'
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       placeholder='Ask a question...'
//       className='flex-grow border text-gray-900 border-gray-300 rounded-lg py-2 px-4'
//     />
//     <button type='submit' className='ml-2'>
//     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO2ZaYhWZRiGrynHsGWkpBLClh8aRWUL1BAGEbSMP1KCyqYxpQzyhxghRWiofyomKjIIpaDFNCrIJGqiQosg0qLJJmm1xjDJ0poiGxybuePN+9jr8Xxb863wPXCY+d7tee7z7O+BJjWpSU2qBxLMEFxNo5LgJMErAgn+pBFJ0CHYaRDh2UMjkWC84JkIQJ//fkujkGBaENiC/yW4R3Cpf2+i3kkwTvCYYMRCfyg4RzDHJhbGeqhnElws+NLCDgmWGFhw8vcFXZ5bQz2SYIxNZ8iCbhVcJGg1iL8F5wsWen4F9UaCswUfW8ARm9VREQgJHvXa5f69jHohwRGCRYJBC7ctOLjnEhA7/bR5fIXXLqQeSHC6YGMUVp8THJcC0SPYIpgV7Vvr9V01BWBhbhH8YYF+ElwbzSUgXre23hW0RPNvel9HLQGcLFgfaeElwYQcIE4V7BKclTpjs/deUisQNwp2W4h9QSup+QTEq4KxgucF92eckyTIKdUGcILghUgLHwh6BV9kgFhnEJcLvhccnfEykvA8oZogQhb+0YyDT9we23sOEK3OITOiNUcKugX9Pms4jFUDwLGCVVGJEZ6ZGesOAeGxkBRfS62b7Qg2xWf9Wq1Cb5sZhvxwt6BTcF4RIIKD/yI4I+Pc0+w/la18nYm7rXa5pHg6ywSyQHg8jC3x/52pPb2Rr22uFIgLoj5BBjBJ8HY6cRnEugwQ0wVfhRfi3zdl8OmoSOXrQm9xFEkGXQt9kmP9ISAEtwqWuroNYfXKAvzmlL3yFZzpPiEu9OblWX+YJgSTndkfELyYZ+/EUDS6uQr8Hi8HgBbBAsFeH7pdcEWBPVkgPnMb+45D8yl59vcJHhGsNM/lowUxyYwTXwi99PjUms4ifWK9w+pbgruK4D1RsGHUla/gBsGAD9qVlRfSTpoLhOdCp7fDmhlTBP8+m+HoKl/Bb5E/zHMZ0ZtnfS5NnBtySjAlnzWtBBl6LMP00QCZKfguMqthR6y5aUAFNDFf8JTgoRCmS5Rhk3m3/28gPmisHT1RcfJ0JYAKgAjz17j+CuZ5Yon8vylr5Ss4xrcbic+M+Lk+AtGasW+14F5n/TscPD4tgt/XqRdX3so3HOiyJInvcmRpzbH+snBn6+Yo9Otrig2lOlABD1e08rXjPhtdIBwEIrg5CcnuTfbZT8KN4Q/W7pMhaxfx0lTxytdvbKuZzc+x5sFIc/utvfsEnydNlLP8XPvigmjv5Krd+QquM7PgzONSIXdq6Ao9/3PK5sP6h10U7nHyW+Znqve3V7TyzShfPjLDRSnz2pJ8DnBku8pa2ZECNWBQaw1kteA2V8fVu/MNX5LMMDRIbTaTJ/z7YOXqDnKVwbdb+O0ZmhpwVTG76ne+gvfMdKnNZLdzSBibFcp1999tqX35QA2WrfItsd0NTH93tEmcfMjtbH8RvUcuUIurBsSCvGHG3dZCkmP+NakSz2oxqDtDCK+c1NnML3S23+uWVwZ3mEnVPQleTtn5UCGTqkvSgXuo/RGQlTQq6b8vsv3JZ4OGJMHxoZUNGbrWsjSJGtM/r1LjDHT7Kf8AAAAASUVORK5CYII="/>
//     </button>
//   </form>
// </div> 
// </div>

//   );
// };

// export default ChatApp;




// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://formula1.us.gaianet.network/v1/chat/completions',
//         {
//           messages: [
//             { role: 'system', content: "You are an expert in Formula 1, with deep knowledge of race history, driver statistics, and team strategies. Provide brief and accurate answers to questions about F1. Pay special attention to formatting—use bullet points, bolding, and line breaks to make the text easier to read." },
//             { role: 'user', content: input },
//           ],
//         },
//         {
//           headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const assistantMessage = response.data.choices[0].message;

//       setMessages((prev) => [...prev, assistantMessage]);

//       setInput('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='mt-28 mx-5'>
//       <h1 className='text-3xl font-bold text-red-600 mb-5'>Chat with Formula 1 Expert</h1>
//       <div className='flex flex-col bg-gray-800 p-5 rounded-lg shadow-lg'>
//         <div className='mb-4 rounded-lg shadow-lg p-4 w-screen ' style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
//                 <strong>{message.role === 'user' ? 'You' : 'Einstein'}:</strong>
//                 <span className='ml-2'>{message.content}</span>
//               </div>
//             </div>
//           ))}
//           {loading && <p className='text-gray-500'>Loading...</p>}
//         </div>

//         <form onSubmit={handleChatSubmit} className='mb-4 flex items-center w-full md:w-2/3 lg:w-1/2'>
//           <input
//             type='text'
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder='Ask a question...'
//             className='flex-grow border border-red-600 rounded-lg py-2 px-4 text-gray-900'
//           />
//           <button type='submit' className='ml-2'>
//           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO2ZaYhWZRiGrynHsGWkpBLClh8aRWUL1BAGEbSMP1KCyqYxpQzyhxghRWiofyomKjIIpaDFNCrIJGqiQosg0qLJJmm1xjDJ0poiGxybuePN+9jr8Xxb863wPXCY+d7tee7z7O+BJjWpSU2qBxLMEFxNo5LgJMErAgn+pBFJ0CHYaRDh2UMjkWC84JkIQJ//fkujkGBaENiC/yW4R3Cpf2+i3kkwTvCYYMRCfyg4RzDHJhbGeqhnElws+NLCDgmWGFhw8vcFXZ5bQz2SYIxNZ8iCbhVcJGg1iL8F5wsWen4F9UaCswUfW8ARm9VREQgJHvXa5f69jHohwRGCRYJBC7ctOLjnEhA7/bR5fIXXLqQeSHC6YGMUVp8THJcC0SPYIpgV7Vvr9V01BWBhbhH8YYF+ElwbzSUgXre23hW0RPNvel9HLQGcLFgfaeElwYQcIE4V7BKclTpjs/deUisQNwp2W4h9QSup+QTEq4KxgucF92eckyTIKdUGcILghUgLHwh6BV9kgFhnEJcLvhccnfEykvA8oZogQhb+0YyDT9we23sOEK3OITOiNUcKugX9Pms4jFUDwLGCVVGJEZ6ZGesOAeGxkBRfS62b7Qg2xWf9Wq1Cb5sZhvxwt6BTcF4RIIKD/yI4I+Pc0+w/la18nYm7rXa5pHg6ywSyQHg8jC3x/52pPb2Rr22uFIgLoj5BBjBJ8HY6cRnEugwQ0wVfhRfi3zdl8OmoSOXrQm9xFEkGXQt9kmP9ISAEtwqWuroNYfXKAvzmlL3yFZzpPiEu9OblWX+YJgSTndkfELyYZ+/EUDS6uQr8Hi8HgBbBAsFeH7pdcEWBPVkgPnMb+45D8yl59vcJHhGsNM/lowUxyYwTXwi99PjUms4ifWK9w+pbgruK4D1RsGHUla/gBsGAD9qVlRfSTpoLhOdCp7fDmhlTBP8+m+HoKl/Bb5E/zHMZ0ZtnfS5NnBtySjAlnzWtBBl6LMP00QCZKfguMqthR6y5aUAFNDFf8JTgoRCmS5Rhk3m3/28gPmisHT1RcfJ0JYAKgAjz17j+CuZ5Yon8vylr5Ss4xrcbic+M+Lk+AtGasW+14F5n/TscPD4tgt/XqRdX3so3HOiyJInvcmRpzbH+snBn6+Yo9Otrig2lOlABD1e08rXjPhtdIBwEIrg5CcnuTfbZT8KN4Q/W7pMhaxfx0lTxytdvbKuZzc+x5sFIc/utvfsEnydNlLP8XPvigmjv5Krd+QquM7PgzONSIXdq6Ao9/3PK5sP6h10U7nHyW+Znqve3V7TyzShfPjLDRSnz2pJ8DnBku8pa2ZECNWBQaw1kteA2V8fVu/MNX5LMMDRIbTaTJ/z7YOXqDnKVwbdb+O0ZmhpwVTG76ne+gvfMdKnNZLdzSBibFcp1999tqX35QA2WrfItsd0NTH93tEmcfMjtbH8RvUcuUIurBsSCvGHG3dZCkmP+NakSz2oxqDtDCK+c1NnML3S23+uWVwZ3mEnVPQleTtn5UCGTqkvSgXuo/RGQlTQq6b8vsv3JZ4OGJMHxoZUNGbrWsjSJGtM/r1LjDHT7Kf8AAAAASUVORK5CYII="/>
//           </button>
//         </form>
//       </div>
//      </div>
//   );
// };

// export default ChatApp;




// 'use client';  used
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://formula1.us.gaianet.network/v1/chat/completions',
//         {
//           messages: [
//             { role: 'system', content: "You are an expert in Formula 1, with deep knowledge of race history, driver statistics, and team strategies. Provide brief and accurate answers to questions about F1. Pay special attention to formatting—use bullet points, bolding, and line breaks to make the text easier to read." },
//             { role: 'user', content: input },
//           ],
//         },
//         {
//           headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const assistantMessage = response.data.choices[0].message;

//       setMessages((prev) => [...prev, assistantMessage]);

//       setInput('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='mt-28 mx-5 '>
//       <h1 className='text-3xl font-bold text-red-600 mb-5'>Chat with Formula 1 Expert...</h1>
//       <div className='flex flex-col bg-gray-800 p-5 rounded-lg shadow-lg justify-center items-center'>
//         <div className='bg-gray-800 mb-4 rounded-lg shadow-lg p-4 w-full ' style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           {messages.map((message, index) => (
//             <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
//               <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
//                 <strong>{message.role === 'user' ? 'You' : 'TurboTalk'}:</strong>
//                 <span className='ml-2'>{message.content}</span>
//               </div>
//             </div>
//           ))}
//           {loading && <p className='text-gray-500'>Loading...</p>}
//         </div>

//         <form onSubmit={handleChatSubmit} className='mb-4 bottom-0 fixed flex justify-center items-center w-1/2'>
//           <input
//             type='text'
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder='Ask a question...'
//             className='flex-grow border border-red-600 rounded-lg py-2 px-4 text-gray-900'
//           />
//           <button type='submit' className='ml-2'>
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2ZP2hUQRDGXxRNoTZWCgELBQsLC8GkVRSuSXjf91hECJaBpLFLQIto0liIveaaWFilTBotRBBBMBr/IGIpcgQRRDHJmzn1yWqE3MtesneXS27PG9jqbmfmtzM7b3Y3ijrSkY5sKlkUdSk5KsCn1XEzM+ZQFIJkg4P7FJhRMls7hEwVuL0E9EStKktAj5LP8s5XgACiwN0VY45FrSQax6dsumzkfA5EFSiuxPHRqBVEyQVf53OpVVZyOjXm+I4CiE2N9av8Xck7Qn7ziMgPBe5JkpzYGQCylHeqDJy1v2XGHBTgupBfPEB+2iIgwMltBVByfp1DQN/a/2QDAweUvCzkouc+eaBxfHpbAISczTuQAqhaav+ClDxBHpfJM00FUHLKEYGRjeZkhUK3kkMKfKwB5FxTAISccBic9JmbGbP3Dwj5wRckJfu3FEDJYUcEirXosCACXFLgvWcJfmJBbOvSMEBKxo6VmqtHVzY0tGcV5J3n92RBANMQiCZJryMCz+tWaEHGx3dZx5R86wnyyoJnxuyu2dgyecQR4lIjABUg5AUlX3uBAG8kSS7aef5GCoVuIX/lv651rUY1G1HUlcYxbWQ9N/ujmrpfIT/nlWTA4a0CqAAh+4V86pNWmTH7Ix9xhVjIWwqMNTrKwHmXzTJQsGV1k5Qa8wIQ8r7nZqt3XK1m2/ZdAjysAvDSNwLTzQQQ4OtmpdKCOOYt/x8A0uwUAq40O4XW12mgKOSNhgZw7d/Zoq5NTI5GbV9Gs9A/ZMuhtxIK9DmUzQfTzKUAHBGYDaedBkYciqeCOdAIMOkwMBHOkRIoOowNh3OoB+byBu0xM5xrFThqc5L0hnSxVQr6alFCv9xV8oVnzW7N63UN/YEj+Cemtnjkcz6zkotBPbN2pCNtLr8BTJWW5QGr3IMAAAAASUVORK5CYII="
//               alt="Send"
//               className='h-5 w-5'
//             />
//           </button>
//         </form>
//       </div>
//      </div>
//   );
// };

// export default ChatApp;




// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://formula1.us.gaianet.network/v1/chat/completions',
//         {
//           messages: [
//             { role: 'system', content: "You are an expert in Formula 1, with deep knowledge of race history, driver statistics, and team strategies. Provide brief and accurate answers to questions about F1. Pay special attention to formatting—use bullet points, bolding, and line breaks to make the text easier to read." },
//             { role: 'user', content: input },
//           ],
//         },
//         {
//           headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const assistantMessage = response.data.choices[0].message;

//       setMessages((prev) => [...prev, assistantMessage]);

//       setInput('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='mt-28 mx-5 h-screen'> {/* Use full height for the container */}
//       <h1 className='text-3xl font-bold text-red-600 mb-5'>Chat with Formula 1 Expert...</h1>
//       <div className='bg-gray-800 mb-4 rounded-lg shadow-lg p-4 w-full h-full' style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
//         {messages.map((message, index) => (
//           <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
//             <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
//               <strong>{message.role === 'user' ? 'You' : 'TurboTalk'}:</strong>
//               <span className='ml-2'>{message.content}</span>
//             </div>
//           </div>
//         ))}
//         {loading && <p className='text-gray-500'>Loading...</p>}
//       </div>

//       <form onSubmit={handleChatSubmit} className='mb-4 flex items-center w-full'>
//         <input
//           type='text'
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder='Ask a question...'
//           className='flex-grow border border-red-600 rounded-lg py-2 px-4 text-gray-900'
//         />
//         <button type='submit' className='ml-2'>
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2ZP2hUQRDGXxRNoTZWCgELBQsLC8GkVRSuSXjf91hECJaBpLFLQIto0liIveaaWFilTBotRBBBMBr/IGIpcgQRRDHJmzn1yWqE3MtesneXS27PG9jqbmfmtzM7b3Y3ijrSkY5sKlkUdSk5KsCn1XEzM+ZQFIJkg4P7FJhRMls7hEwVuL0E9EStKktAj5LP8s5XgACiwN0VY45FrSQax6dsumzkfA5EFSiuxPHRqBVEyQVf53OpVVZyOjXm+I4CiE2N9av8Xck7Qn7ziMgPBe5JkpzYGQCylHeqDJy1v2XGHBTgupBfPEB+2iIgwMltBVByfp1DQN/a/2QDAweUvCzkouc+eaBxfHpbAISczTuQAqhaav+ClDxBHpfJM00FUHLKEYGRjeZkhUK3kkMKfKwB5FxTAISccBic9JmbGbP3Dwj5wRckJfu3FEDJYUcEirXosCACXFLgvWcJfmJBbOvSMEBKxo6VmqtHVzY0tGcV5J3n92RBANMQiCZJryMCz+tWaEHGx3dZx5R86wnyyoJnxuyu2dgyecQR4lIjABUg5AUlX3uBAG8kSS7aef5GCoVuIX/lv651rUY1G1HUlcYxbWQ9N/ujmrpfIT/nlWTA4a0CqAAh+4V86pNWmTH7Ix9xhVjIWwqMNTrKwHmXzTJQsGV1k5Qa8wIQ8r7nZqt3XK1m2/ZdAjysAvDSNwLTzQQQ4OtmpdKCOOYt/x8A0uwUAq40O4XW12mgKOSNhgZw7d/Zoq5NTI5GbV9Gs9A/ZMuhtxIK9DmUzQfTzKUAHBGYDaedBkYciqeCOdAIMOkwMBHOkRIoOowNh3OoB+byBu0xM5xrFThqc5L0hnSxVQr6alFCv9xV8oVnzW7N63UN/YEj+Cemtnjkcz6zkotBPbN2pCNtLr8BTJWW5QGr3IMAAAAASUVORK5CYII="
//             alt="Send"
//             className='h-5 w-5'
//           />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatApp;


// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatApp = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://formula1.us.gaianet.network/v1/chat/completions',
//         {
//           messages: [
//             {
//               role: 'system',
//               content:
//                 'You are an expert in Formula 1, with deep knowledge of race history, driver statistics, and team strategies. Provide brief and accurate answers to questions about F1. Pay special attention to formatting—use bullet points, bolding, and line breaks to make the text easier to read.',
//             },
//             { role: 'user', content: input },
//           ],
//         },
//         {
//           headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const assistantMessage = response.data.choices[0].message;

//       setMessages((prev) => [...prev, assistantMessage]);

//       setInput('');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex flex-col h-screen'>
//       <h1 className='text-3xl font-bold text-red-600 mb-5'>Chat with Formula 1 Expert...</h1>
//       <div className='flex-1 bg-gray-800 mb-4 rounded-lg shadow-lg mx-20 p-4 mt-16'>
//         <div className='h-full flex flex-col justify-end' style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
//             >
//               <div
//                 className={`inline-block p-3 rounded-lg ${
//                   message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'
//                 }`}
//               >
//                 <strong>{message.role === 'user' ? 'You' : 'TurboTalk'}:</strong>
//                 <span className='ml-2'>{message.content}</span>
//               </div>
//             </div>
//           ))}
//           {loading && <p className='text-gray-500'>Loading...</p>}
//         </div>
//       </div>

//       <form onSubmit={handleChatSubmit} className='flex items-center p-4 bg-gray-800 border-t border-gray-700'>
//         <input
//           type='text'
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder='Ask a question...'
//           className='flex-grow border border-red-600 rounded-lg py-2 px-4 text-gray-900'
//         />
//         <button type='submit' className='ml-2'>
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2ZP2hUQRDGXxRNoTZWCgELBQsLC8GkVRSuSXjf91hECJaBpLFLQIto0liIveaaWFilTBotRBBBMBr/IGIpcgQRRDHJmzn1yWqE3MtesneXS27PG9jqbmfmtzM7b3Y3ijrSkY5sKlkUdSk5KsCn1XEzM+ZQFIJkg4P7FJhRMls7hEwVuL0E9EStKktAj5LP8s5XgACiwN0VY45FrSQax6dsumzkfA5EFSiuxPHRqBVEyQVf53OpVVZyOjXm+I4CiE2N9av8Xck7Qn7ziMgPBe5JkpzYGQCylHeqDJy1v2XGHBTgupBfPEB+2iIgwMltBVByfp1DQN/a/2QDAweUvCzkouc+eaBxfHpbAISczTuQAqhaav+ClDxBHpfJM00FUHLKEYGRjeZkhUK3kkMKfKwB5FxTAISccBic9JmbGbP3Dwj5wRckJfu3FEDJYUcEirXosCACXFLgvWcJfmJBbOvSMEBKxo6VmqtHVzY0tGcV5J3n92RBANMQiCZJryMCz+tWaEHGx3dZx5R86wnyyoJnxuyu2dgyecQR4lIjABUg5AUlX3uBAG8kSS7aef5GCoVuIX/lv651rUY1G1HUlcYxbWQ9N/ujmrpfIT/nlWTA4a0CqAAh+4V86pNWmTH7Ix9xhVjIWwqMNTrKwHmXzTJQsGV1k5Qa8wIQ8r7nZqt3XK1m2/ZdAjysAvDSNwLTzQQQ4OtmpdKCOOYt/x8A0uwUAq40O4XW12mgKOSNhgZw7d/Zoq5NTI5GbV9Gs9A/ZMuhtxIK9DmUzQfTzKUAHBGYDaedBkYciqeCOdAIMOkwMBHOkRIoOowNh3OoB+byBu0xM5xrFThqc5L0hnSxVQr6alFCv9xV8oVnzW7N63UN/YEj+Cemtnjkcz6zkotBPbN2pCNtLr8BTJWW5QGr3IMAAAAASUVORK5CYII="
//             alt="Send"
//             className='h-5 w-5'
//           />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatApp;




// pages/index.tsx
// 'use client'
// import { useState, useEffect } from 'react';
// import ProtocolSelector from '../components/ProtocolSelector';

// const Chat = () => {
//   const [selectedProtocol, setSelectedProtocol] = useState('Uniswap');
//   const [data, setData] = useState<any>(null);

//   const fetchData = async () => {
//     const response = await fetch(`/api?protocol=${selectedProtocol}`);
//     const result = await response.json();
//     setData(result.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [selectedProtocol]);

//   return (
//     <div>
//       <h1>Data from {selectedProtocol}</h1>
//       <ProtocolSelector selectedProtocol={selectedProtocol} onSelect={setSelectedProtocol} />
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Chat;



// app/page.tsx
// app/page.tsx
// 'use client'
// import React, { useState, useEffect } from 'react';
// import ExampleComponent from '../components/ExampleComponent';

// export default function Page() {
//   const [protocol, setProtocol] = useState('uniswap');
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`/api/data?protocol=${protocol}`);
//       const result = await response.json();
//       setData(result.data);
//     };

//     fetchData();
//   }, [protocol]);

//   return (
//     <div>
//       <h1>Select a Protocol</h1>
//       <select onChange={(e) => setProtocol(e.target.value)} value={protocol}>
//         <option value="uniswap">Uniswap</option>
//         <option value="cryptopunks">CryptoPunks</option>
//       </select>
//       <div>
//         <h2>Data:</h2>
//         {data ? <ExampleComponent data={data} /> : 'Loading...'}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import DataDisplay from '../components/DataDisplay';

// const queryClient = new QueryClient();

// export default function Home() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="container mx-auto p-4 text-black">
//         <h1 className="text-2xl font-bold mb-4">Crypto Data Analyzer</h1>
//         <DataDisplay />
//       </div>
//     </QueryClientProvider>
//   );
// }


'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DataDisplay from '../components/DataDisplay';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Crypto Data Analyzer</h1>
        <DataDisplay />
      </div>
    </QueryClientProvider>
  );
}


