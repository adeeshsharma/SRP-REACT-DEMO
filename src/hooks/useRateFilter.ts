import { useState } from "react";

const useRateFilter = () => {
  const [filterRate, setFilterRate] = useState(1);

  const handleRating = (rate: number) => {
    setFilterRate(rate);
  };

  return { filterRate, handleRating };
}

export default useRateFilter;