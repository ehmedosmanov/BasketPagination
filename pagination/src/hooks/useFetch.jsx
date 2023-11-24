import { useState,useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  const fetchData = async () => {
    try {
      await fetch(url)
        .then((x) => x.json())
        .then((items) => setData(items));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return {data, loading, error, setData};
};

export default useFetch;
