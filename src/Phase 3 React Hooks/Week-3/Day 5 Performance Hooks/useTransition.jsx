import { useState, useTransition } from 'react';

const SearchFilter = () => {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    startTransition(() => {
      setSearchQuery(e.target.value);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {isPending && <p>Filtering lists in background...</p>}
    </div>
  );
};

export default SearchFilter;
