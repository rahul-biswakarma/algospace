import { toast } from "react-toastify";

export default async function VisualizerFinisher(containerId, message) {
  let container = document.getElementById(containerId);
  let elements = container.children;

  for (let i = 0; i < elements.length; i++) {
    try {
      elements[i + 1].style.background = "var(--bg-green-3)";
    } catch {}
    elements[i].style.background = "var(--green)";
    try {
      elements[i - 1].style.background = "var(--bg-green-3)";
    } catch {}
    try {
      elements[i - 2].style.background = "var(--bg-green)";
    } catch {}
    await MakeDelay(50);
  }
  elements[elements.length - 1].style.background = "var(--bg-green)";
  await MakeDelay(50);
  elements[elements.length - 2].style.background = "var(--bg-green)";

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
