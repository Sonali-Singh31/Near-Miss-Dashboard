import _ from 'lodash';

export const processNearMissData = (data) => {
  if (!data || !data.length) return null;

  return {
    total: data.length,
    
    // Mapping Levels 3 and 4 to Critical/High Priority
    highPriority: data.filter(d => d.severity_level >= 3).length,
    
    // Counting Resolved Cases (Assuming Level 0/1 are lower risk/resolved)
    // Or based on your data, showing Total - Open issues
    resolvedCases: data.filter(d => d.severity_level < 2).length,

    // 1. Category Bar Chart Data
    byCategory: _.chain(data)
      .groupBy(d => d.primary_category || "Uncategorized")
      .map((val, key) => ({ name: key, value: val.length }))
      .orderBy(['value'], ['desc'])
      .value(),

    // 2. Severity Pie Chart Data
    bySeverity: _.chain(data)
      .groupBy(d => `Level ${d.severity_level || 0}`)
      .map((val, key) => ({ name: key, value: val.length }))
      .value(),

    // 3. Trend Line Data (YYYY-MM format for sorting)
    trend: _.chain(data)
      .groupBy(d => `${d.year}-${String(d.month).padStart(2, '0')}`)
      .map((val, key) => ({ date: key, count: val.length }))
      .sortBy('date')
      .value(),

    // 4. Status Radar Data
    statusData: _.chain(data)
      .groupBy(d => d.unsafe_condition_or_behavior || "General")
      .map((val, key) => ({ 
        subject: key, 
        A: val.length, 
        fullMark: data.length 
      }))
      .value()
  };
};