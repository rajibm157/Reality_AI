export const importScript = (url, status = true) => {
  const path = `./assets/js/${url}.js`;
  if (status === true) {
    const script = document.createElement("script");
    script.src = path;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  } else {
    let allsuspects = document.getElementsByTagName("script");
    for (let i = allsuspects.length; i >= 0; i--) {
      if (
        allsuspects[i] &&
        allsuspects[i].getAttribute("src") !== null &&
        allsuspects[i].getAttribute("src").indexOf(`${path}`) !== -1
      ) {
        allsuspects[i].parentNode.removeChild(allsuspects[i]);
      }
    }
  }
};
