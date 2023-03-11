<template>
  <div>
    <slot></slot>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/goods">逛一逛</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Field, Form, Button } from "vant";
import { getUserInfo, getRequest } from "@/api/user";

class Person {
  constructor(name, age, address) {
    this.username = name;
    this.age = age;
    this.address = address;
  }
}
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
  },
  data() {
    return {
      active: 0,
      userInfo: {},
      name: "jack",
      address: "CN",
      request: false,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const person = new Person("张三", 18, "北京");
      getUserInfo(person).then((res) => {
        this.userInfo = res;
      });
    },
    getRequest() {
      const data = {
        name: this.name,
        address: this.address,
      };
      getRequest(data).then(() => {
        this.request = true;
        setTimeout(() => {
          this.request = false;
        }, 3000);
      });
    },
  },
};
</script>
<style lang='less' scoped>
.head {
  font-size: 37.5px;
}
</style>