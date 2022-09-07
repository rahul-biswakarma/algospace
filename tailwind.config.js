module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bg-1": "#000301",
      "bg-2": "#0e180f",
      "bg-3": "#0f1e1a",
      "bg-4": "#7e7e7e",
      "bg-5": "#484d47",
      "bg-6": "#d2d2d2",
      "border-1": "#1d261d",
      "text-1": "#ddd",
      "text-2": "#46be35",
      red: "#ff483b",
      blue: "#4383ff",
      purple: "#db29e1",
      green: "#1efe5b",
      cyan: "#0dbcb8",
      yellow: "#fef51e",
      "green-bg": "#1b241d",
      "red-bg": "#321819",
      "purple-bg": "#241b24",
      "cyan-bg": "#1b2424",
      "cyan-bg-2": "#121e1e",
      "blue-bg": "#1b2224",
      "green-bg-2": "#111717",
      "green-bg-3": "#00bb00",
      "green-bg-4": "#017501",
    },
    fontFamily: {
      unica: ["Unica One", "monospace"],
      space: ["Space Mono", "monospace"],
    },
    extend: {
      gridTemplateColumns: {
        homeLayout: "22vw auto",
        statsLayout: "50% 25% 25%",
        algoDataLayout: "60% 40%",
      },
      spacing: {
        gap: "0.5rem",
        86: "21rem",
      },
      backgroundImage: {
        graphPattern: "url('/assets/graph-pattern.svg')",
      },
    },
  },
  plugins: [],
};
