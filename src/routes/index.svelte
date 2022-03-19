<script>
  import SVGpath from "../stores/SVGpathStore";

  import TheCanva from "../components/TheCanva.svelte";
  import TheSettings from "../components/TheSettings.svelte";
  import TheWidget from "../components/TheWidget.svelte";

  let storedSVGpath;

  //Utiliser mes stores pour attriber leurs valeurs à une variable de ce composant. Si les stores changent, il sont rafraichis automatiquement
  SVGpath.subscribe((dataFromStore) => {
    storedSVGpath = dataFromStore;
  });

  function downloadSVGpath() {
    const pathToString = new XMLSerializer().serializeToString(storedSVGpath);

    var blob = new Blob([pathToString], { type: "image/svg+xml" });

    var a = document.createElement("a");
    a.download = "SVG curve";
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = ["image/svg+xml", a.download, a.href].join(":");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 1500);
  }
</script>




<div class="fullViewportContainer">
  <div class="contentContainer">
    <a href="https://www.google.com/" target="_blank"
      ><div class="linkContainer">
        <p>How this app was made?</p>
        <img src="static\arrow.svg" alt="arrow icon" />
      </div></a
    >

    <TheCanva />
    <TheSettings />

    <button on:click={downloadSVGpath} class="exportButton"
      ><img src="static\export icon.svg" alt="export icon" />Export</button
    >

    <TheWidget />
  </div>
</div>

<style>
  :global(body) {
    margin: 0px;
    font-family: Inter;
    overflow-x: hidden;
    background-color: #fcfcfc;
  }

  :global(p) {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .fullViewportContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: #5863f8;
    text-decoration: none;
    font-size: 12.2px;
    line-height: 16px;
    margin-bottom: 40px;
  }

  .linkContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .linkContainer img {
    margin-left: 4px;
  }

  .exportButton {
    border-radius: 50px;
    cursor: pointer;
    border: none;
    background: linear-gradient(180deg, #6c76f9 -15.62%, #5863f8 112.5%);
    color: #fcfcfc;
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    width: min-content;
    transition: all 150ms linear;
    box-shadow: 0px 7px 7px rgba(88, 99, 248, 0.06),
      0px 4.53704px 4.09954px rgba(88, 99, 248, 0.0455556),
      0px 2.6963px 2.22963px rgba(88, 99, 248, 0.0364444),
      0px 1.4px 1.1375px rgba(88, 99, 248, 0.03),
      0px 0.57037px 0.57037px rgba(88, 99, 248, 0.0235556),
      0px 0.12963px 0.275463px rgba(88, 99, 248, 0.0144444);
  }

  .exportButton img {
    margin-right: 8px;
    transition: all 150ms linear;
  }

  .exportButton:hover {
    opacity: 0.9;
  }

  .exportButton:hover img {
    transform: scale(1.08);
  }

  @media screen and (max-width: 428px) {
    .fullViewportContainer {
      width: 100%;
      height: auto;
    }

    a {
      margin-bottom: 24px;
      margin-top: 56px;
    }

    .exportButton {
      margin-bottom: 128px;
    }
  }
</style>
