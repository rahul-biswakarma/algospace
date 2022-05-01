import { toast } from "react-toastify";

export default async function VisualizerFinisher(containerId, message) {
  let container = document.getElementById(containerId);
  let elements = container.children;

  for (let i = 0; i < elements.length; i++) {
    if (
      document
        .getElementById("function-status")
        .getAttribute("data-func-status") === "0"
    )
      return;
    try {
      elements[i + 1].style.background = "var(--bg-green-3)";
    } catch {}
    elements[i].style.background = "var(--green)";
    elements[i].style.border = "1px solid var(--green)";
    try {
      elements[i - 1].style.background = "var(--bg-green-3)";
    } catch {}
    try {
      elements[i - 2].style.background = "var(--bg-green-2)";
    } catch {}
    await MakeDelay(50);
  }
  elements[elements.length - 1].style.background = "var(--bg-green-2)";
  await MakeDelay(50);
  elements[elements.length - 2].style.background = "var(--bg-green-2)";

  toast(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const MakeDelay = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};
