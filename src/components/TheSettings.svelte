<script>

  import Cursor from "../components/Cursor.svelte";
  import CursorValues from "../stores/CursorValuesStore";

  let storedValues;

  //Use the store where all the initial value of sliders are stored
  CursorValues.subscribe((dataFromStore) => {
    storedValues = dataFromStore;
  });

</script>



<div class="mainContainerSettings">

  <Cursor cursorSetting="amplitudeValue" initialValue={storedValues.amplitudeValue} minValue={0} maxValue={386} minIconPath='amplitude icon min.svg' maxIconPath="amplitude icon max.svg" />
  <Cursor cursorSetting="lengthValue" initialValue={storedValues.lengthValue} minValue={7} maxValue={300} minIconPath="length icon min.svg" maxIconPath="length icon max.svg" />
  <Cursor cursorSetting="phaseValue" initialValue={storedValues.phaseValue} minValue={20} maxValue={1560} minIconPath="start icon min.svg" maxIconPath="start icon max.svg" />
  <Cursor cursorSetting="strokeValue" initialValue={storedValues.strokeValue} minValue={1} maxValue={40} minIconPath="stroke icon min.svg" maxIconPath="stroke icon max.svg" />

</div>



<style>

  .mainContainerSettings {
    display: flex;
    flex-direction: row;

    padding-left: 40px;
    padding-right: 40px;
    padding-top: 32px;
    padding-bottom: 32px;

    border: 2px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 32px;
    margin-bottom: 40px;

    column-gap: 40px;
  }

  @media screen and (max-width: 428px) {

    .mainContainerSettings {
      flex-direction: column;
      row-gap: 32px;
      width: 272px;
      align-items: center;
      margin-bottom: 32px;
    }

  }

</style>