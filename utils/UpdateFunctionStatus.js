export default function updateFunctionStatus(statusCode) {
  try {
    console.log("Sheesh");
    document
      .getElementById("function-status")
      .setAttribute("data-func-status", statusCode);
  } catch {}
}
