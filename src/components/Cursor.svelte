<script>
  import CursorValues from "../stores/CursorValuesStore";

  export let minIconPath;
  export let maxIconPath;
  export let minValue;
  export let maxValue;
  export let initialValue;
  export let cursorSetting; //Each instance of cursor have this unique ID provided by an attribute in the parent


  let cursorValue = initialValue; //For init progress bar position

  $: progressBarWidth = (cursorValue*80) / maxValue;


  //Update store relatively to the ID
  function udpateStore() {
    switch (cursorSetting) {
      case "amplitudeValue" : 
        CursorValues.update((dataFromStore) => {
          return {...dataFromStore, amplitudeValue : cursorValue};
        });
        break;
      case "lengthValue" : 
        CursorValues.update((dataFromStore) => {
          return {...dataFromStore, lengthValue : cursorValue};
        });
        break;
      case "phaseValue" : 
        CursorValues.update((dataFromStore) => {
          return {...dataFromStore, phaseValue : cursorValue};
        });
        break;
      case "strokeValue" : 
        CursorValues.update((dataFromStore) => {
          return {...dataFromStore, strokeValue : cursorValue};
        });
        break;
    }
  }


</script>



<div class="mainContainerCursor">

  <img style="margin-right: 8px;" src={minIconPath} alt="min icon" />
  <input type="range" min={minValue} max={maxValue} bind:value={cursorValue} on:input={udpateStore} id="cursor" />
  <label for="cursor">label (hidden)</label>
  <div class="progressBar" style="width: {progressBarWidth}px"></div>
  <img style="margin-left: 8px;" src={maxIconPath} alt="max icon" />


</div>

<style>

  img {
    width: 24px;
    height: 24px;
  }

  label {
    display: none;
  }

  .mainContainerCursor {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 80px;
    margin: 0px;
    
  }


  /***** Track Styles *****/
  /***** Chrome, Safari, Opera, and Edge Chromium *****/
  input[type="range"]::-webkit-slider-runnable-track {
    background: rgba(0, 0, 0, 0.1);
    height: 4px;
    border-radius: 50px;
    z-index: 2;
  }


  /******** Firefox ********/
  input[type="range"]::-moz-range-track {
    background: rgba(0, 0, 0, 0.1);
    height: 4px;
    border-radius: 50px;
  }
  input[type=range]::-moz-range-progress {
    background-color: #5863F8;
    height: 4px;
  }


  /***** Thumb Styles *****/
  /***** Chrome, Safari, Opera, and Edge Chromium *****/
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -6px; /* Centers thumb on the track */
    background-color: white;
    height: 16px;
    width: 16px;
    border-radius: 100px;
    box-shadow: 0px 26px 80px rgba(0, 0, 0, 0.15),
      0px 10.8622px 33.4221px rgba(0, 0, 0, 0.107828),
      0px 5.80744px 17.869px rgba(0, 0, 0, 0.0894161),
      0px 3.2556px 10.0172px rgba(0, 0, 0, 0.075),
      0px 1.72903px 5.32008px rgba(0, 0, 0, 0.0605839),
      0px 0.719487px 2.21381px rgba(0, 0, 0, 0.0421718);
      transition: all 150ms linear;
  }
  /***** Thumb Styles *****/
  /***** Firefox *****/
  input[type="range"]::-moz-range-thumb {
      border: none; /*Removes extra border that FF applies*/
      border-radius: 100px; /*Removes default border-radius that FF applies*/
      background-color: white;
      height: 16px;
      width: 16px;
      transition: all 150ms linear;
  }

  .mainContainerCursor:hover input[type="range"]::-webkit-slider-thumb {
    transform: scale(1.2);
  }

  .mainContainerCursor:hover input[type="range"]::-moz-range-thumb {
    transform: scale(1.2);
  }


  .progressBar {
    height: 4px;
    border-radius: 50px;
    position: absolute;
    background-color: #5863F8;
    top: 10px;
    left: 32px;
    z-index: 0;
  }

</style>
