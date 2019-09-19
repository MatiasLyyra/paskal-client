export function indentText(
  code: string,
  pos: number,
  amount: number
): [string, number] {
  let spacesAdded = 0;
  let firstSplit = code.substring(0, pos);
  const secondSplit = code.substring(pos, code.length);

  let lineLength = firstSplit.length;
  const lastNewLine = firstSplit.lastIndexOf("\n");
  if (lastNewLine !== -1) {
    lineLength -= lastNewLine + 1;
    if (lastNewLine + 1 === pos && amount < 0) {
      return [code, 0];
    }
  }
  let spacesToAdd = lineLength % amount;
  if (amount < 0) {
    const spacesToRemove = -amount - spacesToAdd;
    const deindented = firstSplit.substring(
      0,
      Math.max(firstSplit.length - spacesToRemove, lastNewLine + 1)
    );
    const remainder = firstSplit
      .substring(deindented.length, firstSplit.length)
      .trimEnd();
    firstSplit = deindented + remainder;
    spacesAdded = -spacesToRemove + remainder.length;
  } else {
    firstSplit += " ".repeat(amount - spacesToAdd);
    spacesAdded = amount - spacesToAdd;
  }

  return [firstSplit + secondSplit, spacesAdded];
}
