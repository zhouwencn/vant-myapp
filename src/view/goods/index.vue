<template>
  <Main> 逛一逛 </Main>
</template>

<script>
import Main from "_c/main";
export default {
  components: {
    Main
  },

  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },

  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },

    onClickCart() {
      this.$router.push("cart");
    },

    sorry() {
      this.$toast("暂无后续逻辑~");
    }
  }
};
</script>
<style lang="less" scoped>
// @pre-primary-color: #f00;
// .wrapper {
//   --pirmary-color: tint(@pre-primary-color, 20%);
//   @primary: var(--pirmary-color);
//   background: @primary;
// }
</style>
<style lang="less" scoped></style>
