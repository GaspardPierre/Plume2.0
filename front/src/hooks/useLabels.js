
import { useState, useEffect } from "react";
import api from '../api'

const useLabels = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    api
      .get("/label")
      .then((response) => {
        const transformedLabels = response.data.map((label) => ({
          id: label.id,
          name: label.tag,
        }));
        setLabels(transformedLabels);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des labels:",
          error
        );
      });
  }, []);

  return labels;
};

export default useLabels