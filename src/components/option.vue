<template>
    <input type="radio"  value="{{val1}}" v-model="val2" />
    <label for="one">{{val3}}</label>
</template>

<script>
export default {
    name: "option",
    props: ['val1','val2','val3'],

}
</script>