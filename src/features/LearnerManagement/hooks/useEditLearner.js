import { useEffect } from 'react';
import useFetch from '../hooks/fetch-hook';

function useLearnersData(educationLevel, levelOrder) {
  const { data: response, loading, error, refetch } = useFetch(`http://localhost:4001/E_AAAI?education_level=${educationLevel}&&levelOrder=${levelOrder}`);

  useEffect(() => {
    refetch(); // Call the refetch function whenever the inputs change
  }, [educationLevel, levelOrder]);

  return { response, loading, error };
}

export default useLearnersData;
