export default function calculateCount(count: number) {
  const thresholds = [
    100, 1_000, 10_000, 100_000, 1_000_000, 5_000_000, 10_000_000, 50_000_000,
    100_000_000, 500_000_000, 1_000_000_000, 10_000_000_000, 100_000_000_000,
    500_000_000_000,
  ];

  for (const threshold of thresholds) {
    if (count < threshold) {
      return threshold;
    }
  }

  return 0;
}
