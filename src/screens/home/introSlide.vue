<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
      <nb-card>
        <nb-card-item cardBody>
          <image
            :source="cardImage"
            class="card-item-image"
            :style="stylesObj.cardItemImage"
          />
        </nb-card-item>
      </nb-card>
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
.card-item-image {
  flex: 1;
  height: 200;
}
</style>
