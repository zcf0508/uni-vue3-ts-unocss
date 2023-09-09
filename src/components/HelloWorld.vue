<template>
  <view class="px-3">
    <view class="text-center">
      <view class="i-ri:home-2-line h-4 w-4 mr-2 align-text-bottom"></view>
      <text>{{ msg }}</text>
    </view>

    <view class="leading-6">
      Recommended IDE setup:
      <text class="text-green-500">VSCode</text>
      +
      <text class="text-green-500"> Vetur </text>
      or
      <text class="text-green-500">Volar</text>
      (if using
      <text class="bg-gray-200 rounded"> {{ "&lt;" }} script setup {{ "&gt;" }} </text>
      )
    </view>

    <text class="leading-6">See <text class="bg-gray-200 rounded">README.md</text> for more information.</text>

    <view class="text-center">
      <text class="text-green-500"> Vite Docs </text>
      |
      <text class="text-green-500">Vue 3 Docs</text>
    </view>

    <view class="text-center" @click="plus">count is: {{ count }}</view>
    <view class="flex items-center justify-center my-2 px-8">
      <input class="flex-grow pl-2 border border-gray-100 appearance-none focus:outline-none" v-model="number" />
      <button class="h-6 leading-6 ml-2 px-2 bg-green-500 text-white rounded" @click="add">ADD</button>
    </view>
    <text class="leading-6">
      Edit
      <text class="bg-gray-200 rounded">components/HelloWorld.vue</text> to test hot module replacement.
    </text>
  </view>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const data = reactive({
      number: 0,
    });
    const count = computed(() => counterStore.count);

    function plus() {
      counterStore.increment();
    }

    function add() {
      counterStore.add(Number(data.number));
    }

    return { ...toRefs(data), count, plus, add };
  },
});
</script>

<style></style>
