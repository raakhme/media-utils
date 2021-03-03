export function createMediaBreakpoints<T = Record<string, any>>(
  mediaValue: T
): Record<keyof T, (...args: any) => string> {
  type Media = Record<keyof T, (...args: any) => string>;
  const mediaKeys = Object.keys(mediaValue);

  return mediaKeys.reduce<Media>((acc, size, index) => {
    const sizeValue = mediaValue[size];
    const prevValue = mediaValue[mediaKeys[index - 1]];
    const nextValue = mediaValue[mediaKeys[index + 1]];
    acc[size] = (...args: any) => `
@media ${
      !prevValue
        ? `(max-width: ${sizeValue}px)`
        : nextValue
        ? `(min-width: ${prevValue + 1}px) and (max-width: ${sizeValue}px)`
        : `(min-width: ${sizeValue}px)`
    } {
${args}
}
      `;

    return acc;
  }, {} as Media);
}
