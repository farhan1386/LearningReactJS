import { useState, useMemo } from 'react';

const HeavyCalculation = ({ items = [] }) => {
  const [filterText, setFilterText] = useState('');

  const complexFilteredList = useMemo(() => {
    return items.filter(item => item.includes(filterText));
  }, [items, filterText]);

  return <input value={filterText} onChange={e => setFilterText(e.target.value)} />;
};

export default HeavyCalculation;
