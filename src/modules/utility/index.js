/* Выполнить функции при загрузке документа */
const ready = (fns) => {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fns.forEach((fn)=>{fn()})
    } else {
      document.addEventListener('DOMContentLoaded', () => {fns.forEach((fn)=>{fn()})});
    }
  }

export { ready }