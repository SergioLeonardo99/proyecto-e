<template>
    <div :key="claveekisde" class="hello" ref="chartdiv">
    </div>
  </template>
  
  <script>
  import * as am5 from '@amcharts/amcharts5';
  import * as am5xy from '@amcharts/amcharts5/xy';
  import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
  
  
  export default {
    name: 'graficoBarras',
    data() {
        return {
          claveekisde: ''
        }
      },
    props: {
        arrayData: Array
    },
    methods:{
      crearGrafico(){
        let root = am5.Root.new(this.$refs.chartdiv);
        
      root.setThemes([am5themes_Animated.new(root)]);
  
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      ); 
  
      // Define data 
      var data = this.arrayData
      
       
      
     // console.log(this.arrayData)
  
      // Create Y-axis 
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );
  
      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);
  
      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
      series1.data.setAll(data);
  
  
      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);
  
      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));
  
      this.root = root;
      
      
      },

    },
    mounted() {
      this.crearGrafico()
      this.claveekisde='helouder'
      
      
    },
  
    beforeDestroy() {
      if (this.root) {
        this.root.dispose();
      }
    },
    updated() {
    if (this.root) {
      this.crearGrafico()
      
      
      
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