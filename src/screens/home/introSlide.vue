<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-content padder>
      <nb-card>
        <nb-card-item cardBody>
          <image
            :source="cardImage"
            class="card-item-image"
            :style="stylesObj.cardItemImage"
          />
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import cardImage from "../../../assets/bklast1.png";
export default {
  data() {
    return {
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "contain"
        }
      }
    };
  }
};
</script>

<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  flex: 1;
  height: 200;
}
</style>
