<template>
  <div>
    <p>{{ JSON.stringify(props) }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  propA: Number,                       // Number
  propB: [String, Number],             // String hoặc Number
  propC: {
    type: String,
    required:true,                    // đúng là “required”
  },
  propD: {
    type: Number,
    default: 100,
  },
  propE: {
    type: Object,
    default: () => ({}),
  },
  propF:{
    type:String,
    validator(value){
      return ["success","warning","error"].includes(value);
    },
  },
  propG:{
    type:Function,
  },
  disable:Boolean,
});
props.propG()
</script>

<style scoped >

</style>
