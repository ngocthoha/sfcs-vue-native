<template>
  <nb-content padder :style="{ marginTop: 0 }">
    <nb-card :style="{ flex: 0 }">
      <nb-card-item>
        <image square :source="logo" class="thumnail" />
        <nb-body :style="{marginLeft: 10}">
          <nb-h2>Xôi mặn</nb-h2>
          <nb-h3>15.000đ</nb-h3>
          <nb-text>
            Ngon bổ rẻ.
          </nb-text>
        </nb-body>
      </nb-card-item>
    </nb-card>

    <nb-card :style="{ flex: 0 }">
      <nb-card-item>
        <image square :source="logo" class="thumnail" />
        <nb-body :style="{marginLeft: 10}">
          <nb-h2>Xôi mặn</nb-h2>
          <nb-h3>15.000đ</nb-h3>
          <nb-text>
            Ngon bổ rẻ.
          </nb-text>
        </nb-body>
      </nb-card-item>
    </nb-card>
  </nb-content>
</template>
<script>
import logo from "../../../../assets/images/xoi.jpg";
export default {
  data() {
    return {
      logo
    }
  }
}
</script>
<style>
.thumnail {
  width: 90;
  height: 90;
}
</style>