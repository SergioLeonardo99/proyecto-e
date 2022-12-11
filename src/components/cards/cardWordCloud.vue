<template>
    <div class="hello" ref="chartdiv">
    </div>
  </template>
  
  <script>
  import * as am5 from '@amcharts/amcharts5';
  import * as am5wc from "@amcharts/amcharts5/wc";
  import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
  
  
  
  export default {
    name: 'GraficoPalabras',
    props: {
        textuki: String
    },
    updated() {
    if (this.root) {
      // Update chart based on props
      var series = root.container.children.push(
        am5wc.WordCloud.new(root, {
            text: this.textuki,
        })
        );
    }
  },
    mounted() {
      let root = am5.Root.new(this.$refs.chartdiv);
  
      root.setThemes([am5themes_Animated.new(root)]);
  
      var series = root.container.children.push(
        am5wc.WordCloud.new(root, {
            text: this.textuki,
            excludeWords: ["en","el","esta","no","de","la","si","va","al","un","que","lo","y","000","10"],
        })
        );
  
      this.root = root;
    },
  
    beforeDestroy() {
      if (this.root) {
        this.root.dispose();
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .hello {
    width: 100%;
    height: 500px;
  }
  </style>