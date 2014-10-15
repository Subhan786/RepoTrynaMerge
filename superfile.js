var projection = d3.geo.albers()
    .scale(270)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(.1);