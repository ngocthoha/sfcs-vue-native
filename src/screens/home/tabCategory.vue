<template>
  <nb-container>
    <nb-tabs :renderTabBar="getScollableTabComp">
      <nb-tab heading="Tab1">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Tab2">
        <tab-two />
      </nb-tab>
      <nb-tab heading="Tab3">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import React from "react";
import { ScrollableTab } from "native-base";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";

export default {
  components: { TabOne, TabTwo, TabThree},
  methods: {
    getScollableTabComp() {
      return <ScrollableTab />;
    }
  }
};

</script>
