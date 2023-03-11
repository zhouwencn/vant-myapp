<template>
  <Main>
    <div>
      <div class="head">heads</div>
      <div>
        {{ userInfo.username }}
        {{ userInfo.age }}
        {{ userInfo.address }}
      </div>
      <van-form @submit="getRequest">
        <van-field v-model="name" label="姓名" placeholder="请输入用户名" />
        <van-field
          v-model="address"
          label="你来自哪里"
          placeholder="请输入地名"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <div v-if="request">
        get request result: hello i am {{ name }}, from {{ address }}
      </div>
    </div>
  </Main>
</template>

<script>
import { getUserInfo, getRequest } from "@/api/user";
import Main from "_c/main";
class Person {
  constructor(name, age, address) {
    this.username = name;
    this.age = age;
    this.address = address;
  }
}
export default {
  components: {
    Main
  },
  data() {
    return {
      active: 0,
      userInfo: {},
      name: "jack",
      address: "CN",
      request: false
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
        address: this.address
      };
      getRequest(data).then(() => {
        this.request = true;
        setTimeout(() => {
          this.request = false;
        }, 3000);
      });
    }
  }
};
</script>
<style lang="less"></style>
<style lang="less" scoped>
.head {
  font-size: 37.5px;
}
</style>
