
export function addArticle(word: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(word[0].toLowerCase()) ? `an ${word}` : `a ${word}`
}