<template>
  <v-container fluid>
    <v-row class="d-flex justify-space-around align-center">
      <Header />
    </v-row>
    <v-row>
      <v-col class="px-0">
        <AttendenceFormT />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AttendenceFormT from "@/components/AttendenceFormT";
import Header from "@/components/Header";
export default {
  name: "AttendenceListT",
  components: {
    AttendenceFormT,
    Header,
  },
};
</script>
