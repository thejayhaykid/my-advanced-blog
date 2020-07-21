class Theme {
  static darkMode = () => {
    let prefersDark = window
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

    let localSelection =
      global.localStorage && global.localStorage.getItem("theme")
        ? global.localStorage.getItem("theme")
        : null;

    let retVal = null;
    localSelection
      ? localSelection === "dracula"
        ? (retVal = true)
        : (retVal = false)
      : (retVal = prefersDark);
    return retVal;
  };
}
