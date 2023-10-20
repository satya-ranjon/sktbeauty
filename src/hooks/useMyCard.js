import { useEffect, useState } from "react";
import useAuthentication from "./useAuthentication";

const useMyCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuthentication();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/card/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return [data, loading];
};

export default useMyCard;
