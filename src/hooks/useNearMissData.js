import { useState, useEffect, useMemo } from 'react';
import { processNearMissData } from '../utils/dataHelpers';

export const useNearMissData = () => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => {
        setRawData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  // Pass rawData into the processor and also return it for the Reports table
  const stats = useMemo(() => processNearMissData(rawData), [rawData]);

  return { stats, rawData, loading };
};