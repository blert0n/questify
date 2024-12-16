export const optionsChart = (showLegend = true) => ({
  responsive: true,
  plugins: {
    legend: {
      display: showLegend,
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
});
