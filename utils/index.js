export const MakeDelay = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};
