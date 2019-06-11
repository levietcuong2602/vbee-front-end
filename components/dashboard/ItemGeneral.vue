<template>
  <b-col
    sm="6"
    lg="6"
    class="pb-2"
  >
    <div class="item-content">
      <div
        class="left-content"
        :style="{ backgroundColor: leftColor }"
      >
        <span><i :class="icon"></i></span>
      </div>
      <div
        class="right-content"
        :style="{ backgroundColor: rightColor }"
      >
        <h5>{{ number }}</h5>
        <p>{{ title }}</p>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'ItemGeneral',
  props: {
    number: String,
    title: String,
    icon: {
      type: String,
      default: 'icon-question'
    },
    leftColor: {
      type: String,
      default: "#406eac"
    },
    rightColor: {
      type: String,
      default: "#74a3e1"
    }
  }
}
</script>
<style scoped>
.item-content {
  display: flex;
  align-items: center;
  height: 100%;
  color: black;
  padding: 0px;
  /* margin-bottom: 15px; */
}
.left-content {
  padding-top: 28px;
  padding-bottom: 28px;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #406eac; */
}
.right-content {
  text-align: left;
  height: 100%;
  padding-left: 25px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* background: #74a3e1; */
}
</style>


