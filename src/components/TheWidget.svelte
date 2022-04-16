<script>
  import { onMount, afterUpdate } from "svelte/internal";
  import anime from "animejs";

  const enableWidget = true;
  let showOverlay = false;

  //Get html elements for animations
  let widget;
  let overlay;
  let modal;

  onMount(() => {
    let widgetBreathAnimation = anime({
      targets: '.mainContainerWidget',
      translateY: 12,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 3000
    });
  });

  function switchModal() {
    if (!showOverlay) {
      let overlayIn = anime({
        targets: overlay,
        opacity: [0, 0.6],
        duration: 300,
        easing: "easeInOutQuad",
      });
      if (window.screen.width > 430) {
        //animate modal in for desktop
        let modalIn = anime({
          targets: modal,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 2000,
        });
      } else {
        //animate modal in for mobile
        let modalInMobile = anime({
          targets: modal,
          translateY: [500, 0],
          opacity: [0, 1],
          easing: "spring(1, 100, 20, 0)",
        });
      }
      showOverlay = true;
      overlay.style.pointerEvents = "auto";
      modal.style.pointerEvents = "auto";
    } else if (showOverlay) {
      let overlayOut = anime({
        targets: overlay,
        opacity: [0.6, 0],
        duration: 300,
        easing: "easeInOutQuad",
      });
      if (window.screen.width > 430) {
        //animate modal out for desktop
        let modalOut = anime({
          targets: modal,
          translateY: [-50],
          opacity: [1, 0],
          duration: 2000,
        });
      } else {
        //animate modal out for mobile
        let modalOutMobile = anime({
          targets: modal,
          translateY: [0, 500],
          opacity: [1, 0],
          easing: "spring(1, 100, 20, 0)",
        });
      }
      showOverlay = false;
      overlay.style.pointerEvents = "none";
      modal.style.pointerEvents = "none";
    }
  }
</script>

{#if enableWidget}
  <div data-splitbee-event="Click widget" bind:this={widget} class="mainContainerWidget" on:click={switchModal}>
    <img height="24" width="24" src="me.png" alt="me" />
    <p style="overflow:hidden; color : #333333; display : flex; flex-direction: row; justify-content:start align-items:center">Make your app more <img style="margin-left : 4px;" src="pop.png" alt="pop icon" height="16px"></p>
  </div>
{/if}

<div bind:this={overlay} class="overlay" on:click={switchModal} />

<div bind:this={modal} class="modalContainer">
  <div class="contentContainer">
    <div class="topBar">
      <div class="notchBar" />
    </div>

    <div class="mainContainer">
      <div class="headContainer">
        <p class="title">1:1 design review of <br /> what you build</p>
        <div class="hugoContainer">
          <img height="40" width="40" src="me.png" alt="me" />
          <div class="rightContainer">
            <a href="https://dribbble.com/HugoDuprez/shots" target="_blank"
              >Hugo Duprez</a
            >
            <div class="starsContainer">
              <img
                class="starImage"
                width="12"
                height="12"
                src="star icon.svg"
                alt="star icon"
              />
              <img
                class="starImage"
                width="12"
                height="12"
                src="star icon.svg"
                alt="star icon"
              />
              <img
                class="starImage"
                width="12"
                height="12"
                src="star icon.svg"
                alt="star icon"
              />
              <img
                class="starImage"
                width="12"
                height="12"
                src="star icon.svg"
                alt="star icon"
              />
              <img
                class="starImage"
                width="12"
                height="12"
                src="star icon.svg"
                alt="star icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="featuresContainer">
        <ul>
          <li>
            <img class="checkIcon" src="check icon.svg" alt="check icon" />
            <p style="color: #333333">Visual design audit with a fresh eye.</p>
          </li>
          <li>
            <img class="checkIcon" src="check icon.svg" alt="check icon" />
            <p style="color: #333333">Spot tiny design missings.</p>
          </li>
          <li>
            <img class="checkIcon" src="check icon.svg" alt="check icon" />
            <p style="color: #333333">Tips & improvement suggestions.</p>
          </li>
          <li>
            <img class="checkIcon" src="check icon.svg" alt="check icon" />
            <p style="color: #333333">Includes a redesign of one view.</p>
          </li>
          <li style="margin-bottom: 0px;">
            <p>All packed in a Notion report</p>
          </li>
        </ul>
      </div>

      <div class="priceContainer">
        <div class="totalPriceContainer">
          <p>Total price</p>
          <p
            style="font-size: 24px; line-height: 32px; font-weight: bold; color: #333333;"
          >
            $250
          </p>
        </div>
        <a href="https://buy.stripe.com/3cs6qy9XW3b77ja6op" class="startButton"
          >Get started</a
        >
        <p style="text-align: center; margin-top: 8px;">
          duprez.hugo@gmail.com
        </p>
      </div>
    </div>

    <div class="testimonialsContainer">
      <p style="font-weight: bold; color: #333333">
        “He knows exactly what he's doing when <br /> he's doing it.”
      </p>
      <p style="margin-top: 8px;">Elliot HALLER - Rock Don’t Stock</p>
    </div>
  </div>
</div>

<style>
  a {
    font-family: Inter;
    font-size: 12.8px;
    line-height: 16px;
    color: #333333;
  }

  .title {
    font-family: Inter;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
  }

  p {
    font-family: Inter;
    line-height: 16px;
    font-size: 12.8px;
    color: #6f6f6f;
  }

  .startButton {
    text-decoration: none;
    margin-top: 24px;
    border-radius: 16px;
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
    justify-content: center;
    padding: 12px 24px;
    transition: all 150ms linear;
    box-shadow: 0px 7px 7px rgba(88, 99, 248, 0.06),
      0px 4.53704px 4.09954px rgba(88, 99, 248, 0.0455556),
      0px 2.6963px 2.22963px rgba(88, 99, 248, 0.0364444),
      0px 1.4px 1.1375px rgba(88, 99, 248, 0.03),
      0px 0.57037px 0.57037px rgba(88, 99, 248, 0.0235556),
      0px 0.12963px 0.275463px rgba(88, 99, 248, 0.0144444);
  }

  .startButton:hover {
    opacity: 0.9;
  }

  .totalPriceContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  .checkIcon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }

  ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 16px;
  }

  .featuresContainer {
    margin-top: 24px;
  }

  .starImage {
    margin-right: 2px;
  }

  .starsContainer {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .rightContainer {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .hugoContainer {
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }

  .headContainer {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    padding: 48px;
  }

  .testimonialsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 40px;
  }

  .overlay {
    pointer-events: none;
    opacity: 0;
    width: 100vw;
    height: 200vh;
    background-color: #2d2f53;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainContainerWidget {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 8px 8px 8px;

    position: fixed;
    position: -webkit-fixed;
    right: 5%;
    bottom: 8%;

    background: white;
    border-radius: 50px;

    box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.03),
      0px 7.51997px 33.4221px rgba(0, 0, 0, 0.0215656),
      0px 4.02054px 17.869px rgba(0, 0, 0, 0.0178832),
      0px 2.25388px 10.0172px rgba(0, 0, 0, 0.015),
      0px 1.19702px 5.32008px rgba(0, 0, 0, 0.0121168),
      0px 0.498106px 2.21381px rgba(0, 0, 0, 0.00843437);

    font-family: Inter;
    font-weight: bold;
    font-size: 12.2px;
    line-height: 16px;
  }

  img {
    margin-right: 8px;
  }

  .modalContainer {
    opacity: 0;
    pointer-events: none;
    z-index: 4;
    background-color: white;
    position: fixed;
    margin-right: auto;
    margin-left: auto;
    bottom: 50%;
    margin-bottom: -312px;
    border-radius: 40px;
    box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.03),
      0px 7.51997px 33.4221px rgba(0, 0, 0, 0.0215656),
      0px 4.02054px 17.869px rgba(0, 0, 0, 0.0178832),
      0px 2.25388px 10.0172px rgba(0, 0, 0, 0.015),
      0px 1.19702px 5.32008px rgba(0, 0, 0, 0.0121168),
      0px 0.498106px 2.21381px rgba(0, 0, 0, 0.00843437);
  }

  @media screen and (max-width: 428px) {
    .contentContainer {
      position: relative;
      padding-top: 0px;
      padding-left: 48px;
      padding-right: 48px;
      padding-bottom: 48px;
    }

    .mainContainerWidget {
      bottom: 4%;
      right: 4%;
    }

    .modalContainer {
      width: 100vw;
      box-sizing: border-box;
      bottom: 0;
      margin-bottom: 0px;
      border-radius: 40px 40px 0px 0px;
      overflow: scroll;
      height: 440px;
    }

    .topBar {
      margin-bottom: 16px;
      height: 32px;
      position: sticky;
      background: linear-gradient(
        180deg,
        #ffffff 8.85%,
        rgba(255, 255, 255, 0) 100%
      );
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
    }

    .notchBar {
      width: 48px;
      height: 6px;
      background-color: rgb(177, 177, 177);
      margin-top: 8px;
      border-radius: 50px;
    }
  }
</style>
