<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-card>
        <nb-card-item cardBody>
          <image
            :source="accountImage"
            class="account-image"
          />
          <nb-text>username</nb-text>
        </nb-card-item>
      </nb-card>
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
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Alberto Moreno"
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
.body {
    height: 50;
}
</style>
