const generateRandomNumber = (
  generatedRandomNumberList,
  selectedGrid,
  totalBoxNumber
) => {
  for (let index = 0; index < Number(selectedGrid); index++) {
    const randomNumber = Math.floor(Math.random() * Number(totalBoxNumber));
    const isTheNumberGeneratedBefore = generatedRandomNumberList.includes(
      randomNumber
    );
    if (isTheNumberGeneratedBefore) {
      return generateRandomNumber(
        generatedRandomNumberList,
        selectedGrid,
        totalBoxNumber
      );
    }

    return randomNumber;
  }
};
export default generateRandomNumber;
