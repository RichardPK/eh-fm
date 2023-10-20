import { useState, useEffect } from "react";

export const useMixcloudData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mixcloudFeed, setMixcloudFeed] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const mixcloudResponse = await fetch(
          "https://api.mixcloud.com/ehfm/feed/"
        );
        const mixcloudData = await mixcloudResponse.json();
        setMixcloudFeed(mixcloudData.data);
        setLoading(false);
        setError("");
      } catch (err) {
        setMixcloudFeed([]);
        setLoading(false);
        setError("Something went wrong");
      }
    })();
  }, []);

  return {
    loading,
    error,
    mixcloudFeed,
  };
};

export default useMixcloudData;
