import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resourse) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resourse);
  }, [resourse]);
  return resources;
};

export default useResources;
