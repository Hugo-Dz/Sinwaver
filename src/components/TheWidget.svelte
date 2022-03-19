<script>

  const enableWidget = false;

</script>



{#if enableWidget}
  <div class="mainContainerWidget">
    <img height="24" src="static\me.png" alt="me" />
    <p>How to sell more design?</p>
  </div>
{/if}



<style>
  .mainContainerWidget {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px 8px 8px;

    position: fixed;
    position: -webkit-fixed;
    right: 5%;
    bottom: 8%;

    background: #171d1c;
    border-radius: 50px;

    font-family: Inter;
    font-size: 12.2px;
    line-height: 16px;
    color: white;
  }

  img {
    margin-right: 8px;
  }

  @media screen and (max-width: 428px) {
    .mainContainerWidget {
      bottom: 4%;
      right: 4%;
    }
  }
</style>
