<template>
  <div id="home">
    <div class="row">
     <div class="col-lg-3"><span class="pull-left">Custom Component from same project:</span></div>
     <div class="col-lg-6"><lead-activity></lead-activity></div>
    </div>
    <div class="row">
      <div class="col-lg-3"><span class="pull-left">Input Component from Library:</span></div>
      <div class="col-lg-6"> <FormInputComponent></FormInputComponent></div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import MyComponent from "form-widget-library";
export default {
  name: "home",
  components: {
    
  }
};
</script>


