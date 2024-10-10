const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const english = [
  "A",
  "B",
  "J",
  "D",
  "R",
  "S",
  "X",
  "T",
  "E",
  "G",
  "K",
  "L",
  "Z",
  "N",
  "H",
  "U",
  "V",
];
const arabic = [
  "ا",
  "ب",
  "ح",
  "د",
  "ر",
  "س",
  "ص",
  "ط",
  "ع",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ى",
];

// Convert from English letters/numbers to Arabic
export const useArabicConverter = (str) => {
  if (str == null) return ""; // Handle null or undefined

  // Convert the input to a string
  str = String(str);

  const letterMapping = english.reduce((acc, letter, index) => {
    acc[letter] = arabic[index];
    return acc;
  }, {});

  // Replace numbers and then letters
  let result = str.replace(/\d/g, (d) => arabicNumbers[d]);
  result = result.replace(
    /[A-Za-z]/g,
    (letter) => letterMapping[letter.toUpperCase()] || letter
  );

  return result;
};

// Convert from Arabic letters/numbers to English
export const useEnglishConverter = (str) => {
  const reverseLetterMapping = arabic.reduce((acc, letter, index) => {
    acc[letter] = english[index];
    return acc;
  }, {});

  // Replace Arabic numbers and then letters
  let result = str.replace(/[٠-٩]/g, (d) => arabicNumbers.indexOf(d));
  result = result.replace(
    /[ا-ى]/g,
    (letter) => reverseLetterMapping[letter] || letter
  );
  console.log(result);

  return result;
};
