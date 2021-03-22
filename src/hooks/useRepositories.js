import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch("http://192.168.100.18:5000/api/repositories");
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories().then();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
