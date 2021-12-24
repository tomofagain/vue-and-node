<template>
  <svg :class="className" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "svg-icon",
    },
    color: {
      type: String,
      default: "#333",
    },
  },
  setup(props) {
    const { className, name } = props;
    const iconName = computed(() => `#icon-${name}`);
    const svgClass = computed(() => {
      if (className) {
        return className;
      } else {
        return "svg-icon";
      }
    });
    return { iconName };
  },
});
</script>
