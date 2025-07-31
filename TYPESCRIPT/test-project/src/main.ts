import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Holaaas</h1>
    <button id="btnMagia">Magaiaa!</button>
  </div>
`
const btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;

console.log(btnDOM);


// hACER QUE ESTE BOTON RELICE UN ALERT QUE DIGA CHAUCHIS