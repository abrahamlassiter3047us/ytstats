export default function formatNumber(count: number) {
  if (count >= 100_000_000_000) {
    return `${count.toString().slice(0, 3)}B`;
  } else if (count >= 10_000_000_000) {
    return `${count.toString().slice(0, 2)}B`;
  } else if (count >= 1_000_000_000) {
    return `${count.toString().slice(0, 1)}B`;
  } else if (count >= 100_000_000) {
    return `${count.toString().slice(0, 3)}M`;
  } else if (count >= 10_000_000) {
    return `${count.toString().slice(0, 2)}M`;
  } else if (count >= 1_000_000) {
    return `${count.toString().slice(0, 1)}M`;
  } else if (count >= 100_000) {
    return `${count.toString().slice(0, 3)}K`;
  } else if (count >= 10_000) {
    return `${count.toString().slice(0, 2)}K`;
  } else if (count >= 1_000) {
    return `${count.toString().slice(0, 1)}K`;
  } else {
    return count;
  }
}
