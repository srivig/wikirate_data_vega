$(document).ready(function(){
  vg.parse.spec("viz_spec.json", function(chart){ chart({el:"#chart", renderer: "svg"}).update()})
})
