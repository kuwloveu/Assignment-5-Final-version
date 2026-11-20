export function splitEqually(amountCents: number, participants: string[]): Map<string, number> {
  const shares = new Map<string, number>();
  if (!Number.isInteger(amountCents) || amountCents <= 0) {
    throw new Error("Amount must be a positive integer number of cents.");
  }
  const seen = new Set<string>();
  for (const name of participants) {
    const key = name.toLowerCase();
    if (seen.has(key)) {
      throw new Error(`Duplicate participant name: "${name}".`);
    }
    seen.add(key);
  }
  if (participants.length === 0) {
    return shares;
  }
  const base = Math.floor(amountCents / participants.length);
  const remainder = amountCents % participants.length;
  participants.forEach((name, index) => {
    const share = index < remainder ? base + 1 : base;
    shares.set(name, share);
  });
  return shares;
}