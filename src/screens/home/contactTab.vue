<template>
  <nb-container :style="{ backgroundColor: '#fff', height: '100%' }">
    <nb-view class="view">
      <image
        :source="accountImage"
        class="account-image"
      /> 
      <nb-text>username</nb-text>
    </nb-view>
    <nb-content padder>
      <nb-list>
        <nb-list-item v-for="item in listItemArr" :key="item">
          <nb-left>
            <nb-text>
              {{ item }}
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import accountImage from "../../../assets/bklogo.png";
export default {
  data() {
    return {
      accountImage,
      listItemArr: [
        "Setting",
        "Coupon",
        "Payment",
        "Transaction",
        "Notification",
        "Log out"
        ]
    };
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
.account-image {
    width: 90;
    height: 90;
}
.view {
  background-color: #fff;
  align-items: center;
  height: 120;
}
</style>
