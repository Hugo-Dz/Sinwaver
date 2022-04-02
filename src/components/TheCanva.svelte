<script>
  import CursorValues from "../stores/CursorValuesStore";
  import SVGpath from "../stores/SVGpathStore";

  import { beforeUpdate, onMount } from "svelte";
  import { afterUpdate } from "svelte";
  import C2S from "canvas2svg";

  const debugMode = false;
  const canvasSize = {
    width : 1560,
    height : 804,
  };

  let storedValues;

  //Utiliser mon store pour attriber ses valeurs à une variable de ce composant. Si le store change, il est rafraichi automatiquement
  CursorValues.subscribe((dataFromStore) => {
    storedValues = dataFromStore;
  });

  onMount(() => {
    setDefaultStrokeWidth();
  });

  function setDefaultStrokeWidth() {
    if (window.innerWidth < 428) {
      CursorValues.update((dataFromStore) => {
        return {...dataFromStore, strokeValue : 16};
      })
    } else {
      return;
    }
  }
  

  //DRAWING LOGIC
  
  let canvas; //On créer la var canvas que l'on va binder dans le canvas html (uniquement pour le dessins pixels)
  let strokeColor = "#333333";

  //Each time data store refreshed:
  afterUpdate(() => {
    deleteOldCurve();
    drawCurve();
    caluclateSVG();
  });

  function drawCurve() {
    let context = canvas.getContext("2d");

    const width = canvasSize.width - 20; //Offset to not go into border
    const height = canvasSize.height;

    //Stroke properties
    context.beginPath();
    context.lineWidth = storedValues.strokeValue;
    context.strokeStyle = strokeColor;
    context.lineCap = "round";
    context.lineJoin = "round";

    var x = storedValues.phaseValue;
    var y = 0;
    var amplitude = storedValues.amplitudeValue;
    var frequency = storedValues.lengthValue;

    while (x < width) {
      y = height / 2 + amplitude * Math.sin(x / frequency);
      context.lineTo(x, y);
      x = x + 1;
    }
    context.stroke();
  }

  //Path will be stored to let home page access it
  function caluclateSVG() {
    let context = new C2S(canvasSize.width, canvasSize.height);

    const width = canvasSize.width - 20; //offset
    const height = canvasSize.height;

    //Stroke properties
    context.beginPath();
    context.lineWidth = storedValues.strokeValue;
    context.strokeStyle = strokeColor;
    context.lineCap = "round";
    context.lineJoin = "round";

    var x = storedValues.phaseValue;
    var y = 0;
    var amplitude = storedValues.amplitudeValue;
    var frequency = storedValues.lengthValue;

    while (x < width) {
      y = height / 2 + amplitude * Math.sin(x / frequency);
      context.lineTo(x, y);
      x = x + 1;
    }
    context.stroke();

    var mySerializedSVG = context.getSerializedSvg();

    var svg = context.getSvg();

    SVGpath.update((dataFromStore) => {
      return svg;
    });
  }

  function deleteOldCurve() {
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
  }

</script>




<div class="canvasContainer">
  <canvas id="canvas" bind:this={canvas} width={canvasSize.width} height={canvasSize.height} />
</div>

<!--DEBUG MODE ONLY-->

{#if debugMode}
  <div class="tempoInfos">
    <p style="margin-bottom: 8px; font-style: italic;">
      Canva component data from store:
    </p>

    <p>
      Cursor Amplitude value: <strong>{storedValues.amplitudeValue}</strong>
    </p>
    <p>Cursor Length value: <strong>{storedValues.lengthValue}</strong></p>
    <p>Cursor Phase value: <strong>{storedValues.phaseValue}</strong></p>
    <p style="margin-bottom: 24px;">
      Cursor Stroke width value: <strong>{storedValues.strokeValue}</strong>
    </p>
  </div>
{/if}

<style>
  .canvasContainer {
    margin-bottom: 32px;
  }

  canvas {
    width: 780px;
    height: 402px;
    box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.03),
      0px 7.51997px 33.4221px rgba(0, 0, 0, 0.0215656),
      0px 4.02054px 17.869px rgba(0, 0, 0, 0.0178832),
      0px 2.25388px 10.0172px rgba(0, 0, 0, 0.015),
      0px 1.19702px 5.32008px rgba(0, 0, 0, 0.0121168),
      0px 0.498106px 2.21381px rgba(0, 0, 0, 0.00843437);
    border-radius: 48px;
    box-sizing: border-box;
    background-color: white;
    padding: 40px;
  }

  .tempoInfos {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  p {
    color: #5863f8;
    font-size: 12.2px;
    line-height: 16px;
    text-align: left;
  }

  @media screen and (max-width: 428px) {

    .canvasContainer {
      margin-bottom: 24px;
    }

    canvas {
      width: 272px;
      height: 176px;
      
      border-radius: 32px;
      padding: 24px;
    }

  }
</style>
