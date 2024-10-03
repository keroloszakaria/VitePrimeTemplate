/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary_light)",
        },
        font: {
          DEFAULT: "#333333",
          light: "#424662",
          dark: "#F3F4F6",
        },

        title: "var(--title)",

        label: "var(--label)",
        "border-color": "var(--border-color)",
        "input-focus": "var(--input-focus)",
        "btn-disabled": "var(--btn-disabled)",
        "btn-disabled-text": "var(--btn-disabled-text)",
        white: "var(--white)",
        charts: "var(--charts)",
        green: "var(--green)",
        sideItem: "var(--sideItem)",
        invert: "var(--invert)",
        "on-surface": "var(--on-surface)",
        // Alert
        error: "var(--error)",
        error_light: "var(--error_light)",
        success: "var(--success)",
        warning: "var(--warning)",
        info: "var(--info)",

        // Text
        text_400: "var(--text_400)",
        text_500: "var(--text_500)",
        text_600: "var(--text_600)",
        text_700: "var(--text_700)",
        text_800: "var(--text_800)",

        // Specific Color
        background: "var(--background)",
        invert_bg: "var(--invert_bg)",
        //
        sidebar_bg: "var(--sidebar_bg)",
        sidebar_border: "var(--sidebar_border)",
        sidebar_list_bg: "var(--sidebar_list_bg)",
        sidebar_list_item: "var(--sidebar_list_item)",
        input_bg: "var(--input_bg)",
        input_border: "var(--input_border)",
      },
      fontFamily: {
        primary: "var(--font_primary)",
      },
    },
  },
  plugins: [],
};
