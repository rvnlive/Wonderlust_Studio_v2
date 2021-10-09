<template>
  <div
    @touchstart="whenTouchStart"
    @touchend="whenTouchEnd"
    @mousedown="whenMouseDown"
    @mousemove="whenMouseMove"
    @mouseup="whenMouseUp"
  >
    <div v-show="bottomSheet">
      <div
        @click="close()"
        :class="[
          'bottom-sheet_overlay',
          animate
            ? `bottom-sheet_overlay--opened`
            : `bottom-sheet_overlay--closed`,
        ]"
        :style="{ backgroundColor: overlayColor }"
      />
      <div
        :class="['bottom-sheet_main', animate ? `opened` : `closed`]"
        :style="[
          {
            bottom: currentY + 'px',
            width: width,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            borderRadius: borderRadius,
            backgroundColor: modalColor,
          },
        ]"
      >
        <!-- Close on swipe down -->
        <b-container fluid v-touch:swipe.bottom="close">
          <!-- Handle bar -->
          <div class="bottom-sheet_main__handle" />
          <!-- Horizontal separator -->
          <hr class="bg-light m-0 ml-3 mr-3 mt-2" />
        </b-container>
        <div class="bottom-sheet_main__content" ref="bottomSheetMainContent">
          <!-- For components being imported and displayed -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomSheet",
  data() {
    return {
      animate: false,

      down: false,
      top: true,
      position: 0,

      topY: 0,
      startY: 0,
      moveY: 0,
      currentY: 0,
    };
  },
  model: {
    prop: "bottomSheet",
    event: "onChange",
  },
  props: {
    bottomSheet: Boolean,
    height: {
      type: String,
      default: "80vh",
    },
    maxHeight: {
      type: String,
      default: "85vh",
    },
    width: {
      type: String,
      default: "100vw",
    },
    maxWidth: {
      type: String,
      default: "100vw",
    },
    modalColor: {
      type: String,
      default: "#FFFFFF",
    },
    overlayColor: {
      type: String,
      default: "#000000AA",
    },
    borderRadius: {
      type: String,
      default: "20px 20px 0 0",
    },
  },
  computed: {
    styles() {
      return {
        height: {
          type: String,
          default: this.height,
        },
        maxHeight: {
          type: String,
          default: this.maxHeight,
        },
        width: {
          type: String,
          default: this.width,
        },
        maxWidth: {
          type: String,
          default: this.maxWidth,
        },
        modalColor: {
          type: String,
          default: this.modalColor,
        },
        overlayColor: {
          type: String,
          default: this.overlayColor,
        },
        borderRadius: {
          type: String,
          default: this.borderRadius,
        },
      };
    },
  },
  mounted() {
    document
      .querySelector(`.bottom-sheet_main`)
      .addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    document
      .querySelector(`.bottom-sheet_main`)
      .removeEventListener("scroll", this.scrollHandler);
  },
  watch: {
    bottomSheet: function (newBottomSheet) {
      if (newBottomSheet) {
        this.open();
      } else if (!newBottomSheet) {
        this.close();
      }
    },
  },
  methods: {
    whenMouseDown(event) {
      this.startY = event.pageY;
      this.down = true;
    },
    whenMouseMove(event) {
      if (this.down) {
        this.moveY = -1 * (event.pageY - this.startY);
        this.currentY = this.moveY + "px";
        if (this.moveY > 0) {
          this.moveY = 0;
          this.currentY = this.moveY + "px";
        }
      }
    },
    whenMouseUp() {
      if (this.moveY < (-1 * window.outerHeight) / 8) {
        this.close();
      } else {
        this.moveY = 0;
        this.currentY = this.moveY + "px";
      }
      this.down = false;
    },
    open() {
      this.animate = true;
      document
        .querySelector(`.bottom-sheet_main__content`)
        .scrollIntoView(true);
      document.body.classList.add("opened");
      this.$emit("onChange", true);
    },
    onClose() {
      this.down = false;
      this.topY = 0;
      this.startY = 0;
      this.moveY = 0;
      this.currentY = 0;
      document.body.classList.remove("opened");
      document.body.classList.add("closed");
      this.$emit("onChange", false);
    },
    close() {
      this.animate = false;
      setTimeout(this.onClose, 200);
    },
    scrollHandler() {
      const content = document.querySelector(`.bottom-sheet_main__content`);
      const bounding = content.getBoundingClientRect().y;
      if (this.topY === 0) {
        this.topY = bounding;
      }
      if (bounding >= this.topY) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
    whenTouchStart(event) {
      this.startY = event.touches[0].pageY;
    },
    // whenTouchMove(event) {
    //   if (this.top) {
    //     this.moveY = -1 * (event.touches[0].pageY - this.startY);
    //     this.currentY = this.moveY + "px";
    //     if (this.moveY > 0) {
    //       this.moveY = 0;
    //       this.currentY = this.moveY + "px";
    //     }
    //   }
    // },
    whenTouchEnd() {
      if (this.moveY < (-1 * window.outerHeight) / 8) {
        this.close();
      } else {
        this.moveY = 0;
        this.currentY = this.moveY + "px";
      }
    },
  },
};
</script>
<style lang="scss">
// BottomSheet
.bottom-sheet {
  &_overlay {
    z-index: 999;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.25s;
    background-color: var(overlayColor);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    &--opened {
      animation-name: overlayOpened;
      animation-duration: 0.2s;
      animation-timing-function: linear;
    }
    &--closed {
      animation-name: overlayClosed;
      animation-duration: 0.25s;
      animation-timing-function: linear;
    }
  }
  &_main {
    box-sizing: border-box;
    z-index: 9999;
    display: block;
    position: fixed;
    height: var(height);
    width: var(width);
    max-height: var(maxHeight);
    max-width: var(maxWidth);
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: var(borderRadius);
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
    background-color: var(modalColor);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    &__handle {
      display: inline-block;
      position: sticky fixed;
      width: 50px;
      height: 3px;
      border-radius: 14px;
      margin: 1em auto 0 auto;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.3);
    }
    &__content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 2vh 2vw;
    }
  }
}
.bottom-sheet_main::-webkit-scrollbar {
  display: none;
}

// Animations
.opened {
  animation-name: opening;
  animation-duration: 0.3s;
  animation-timing-function: ease;
}
.closed {
  animation-name: closing;
  animation-duration: 0.35s;
  animation-timing-function: ease;
}

// Animation Keyframes
@keyframes opening {
  0% {
    bottom: -100vh;
  }
  100% {
    bottom: 0%;
  }
}
@keyframes closing {
  0% {
    bottom: var(currentY);
  }
  100% {
    bottom: -100vh;
  }
}
@-webkit-keyframes opening {
  0% {
    bottom: -100vh;
  }
  100% {
    bottom: 0%;
  }
}
@-webkit-keyframes closing {
  0% {
    bottom: var(currentY);
  }
  100% {
    bottom: -100vh;
  }
}

@keyframes overlayOpened {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes overlayClosed {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes overlayOpened {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes overlayClosed {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>