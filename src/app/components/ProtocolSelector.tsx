
import { FC } from 'react';

interface ProtocolSelectorProps {
  selectedProtocol: string;
  onSelect: (protocol: string) => void;
}

const ProtocolSelector: FC<ProtocolSelectorProps> = ({ selectedProtocol, onSelect }) => {
  const protocols = ['Uniswap', 'CryptoPunks'];

  return (
    <select value={selectedProtocol} onChange={(e) => onSelect(e.target.value)}>
      {protocols.map((protocol) => (
        <option key={protocol} value={protocol}>
          {protocol}
        </option>
      ))}
    </select>
  );
};

export default ProtocolSelector;
