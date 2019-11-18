
//https://twitter.com/Carlillo/status/1196082010785288192
//lectura de fileN.json  promses

export const pointInPolygon2=(e)=>{
    alert("point")
  return 1
}   
export const func1=(e)=>{
    //alert(e)
   /// alert("func1  "+e)
   alert('pnpoly(2)')
    return e
    //return {a:1,b:e}
}

export const pointInPolygon=(p,poly)=>{
   // alert("poly")
//var chacao={"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-66.86648285220637,10.547065812599794],[-66.85106526213166,10.534706725606188],[-66.84499798628454,10.535777779305338],[-66.84723508822026,10.533705752425973],[-66.84771313574767,10.525801551983824],[-66.84598901355122,10.521770577285338],[-66.84902305253324,10.498507164212297],[-66.84440981668895,10.491634051146493],[-66.84452567135637,10.480287837919786],[-66.84798971439658,10.481516877004744],[-66.85470212388573,10.479155828975298],[-66.8572430940725,10.480048808159482],[-66.86195818975469,10.483072828611846],[-66.86997459035034,10.485250815734428],[-66.86994547759159,10.493149972906204],[-66.86689262126768,10.500595090939822],[-66.86204546594162,10.508173241950711],[-66.86327173368704,10.519100400660978],[-66.86904566288901,10.528349545158989],[-66.87063874499933,10.53307857187393],[-66.8711089771884,10.54229174772203],[-66.86648285220637,10.547065812599794]]]},"properties":{"PARROQUIA":"Chacao","MUNICIPIO":"Chacao","ESTADO":"Miranda"}}
// poly=chacao.geometry 
//  p= {"type":"Point","coordinates":[-66.8562648285220637,10.61065812599794]}

 //var poly=PA.features[0].geometry
    var coords = (poly.type == "Polygon") ? [ poly.coordinates ] : poly.coordinates
    //var coords=poly.coordinates;
    var insideBox = false
    var insidePoly = false
    for (var i = 0; i < coords.length; i++) {
       // alert(this.pointInBoundingBox(p,coords[i]))
       // alert(this.boundingBoxAroundPolyCoords(coords[i]))
        if (pointInBoundingBox(p, boundingBoxAroundPolyCoords(coords[i]))) insideBox = true
            //alert(insideBox)
    }
   // alert(insideBox)
    if (insideBox) {
    for (var i = 0; i < coords.length; i++) {
          if (pnpoly(p.coordinates[1], p.coordinates[0], coords[i])){ 
            //alert("inside")
            insidePoly = true
          }
       }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>
   return insidePoly;
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

}
function      pointInBoundingBox(point, bounds) {
    //alert(JSON.stringify(point))
    //alert(JSON.stringify(bounds))
  return !(point.coordinates[1] < bounds[0][0] || point.coordinates[1] > bounds[1][0] || point.coordinates[0] < bounds[0][1] || point.coordinates[0] > bounds[1][1]) 
}
function boundingBoxAroundPolyCoords (coords) {
    
    //alert(JSON.stringify(coords))
    var xAll = [], yAll = []
    for (var i = 0; i < coords[0].length; i++) {
      xAll.push(coords[0][i][1])
      yAll.push(coords[0][i][0])
    }
    xAll = xAll.sort(function (a,b) { return a - b })
    yAll = yAll.sort(function (a,b) { return a - b })
    //alert("a")
    //alert([ [xAll[0], yAll[0]], [xAll[xAll.length - 1], yAll[yAll.length - 1]] ])
    return [ [xAll[0], yAll[0]], [xAll[xAll.length - 1], yAll[yAll.length - 1]] ]
  }
  function pnpoly (x,y,coords) {
    var vert = [ [0,0] ]
    for (var i = 0; i < coords.length; i++) {
      for (var j = 0; j < coords[i].length; j++) {
        vert.push(coords[i][j])
      }
    vert.push(coords[i][0])
      vert.push([0,0])
    }
    var inside = false
    for (var i = 0, j = vert.length - 1; i < vert.length; j = i++) {
      if (((vert[i][0] > y) != (vert[j][0] > y)) && (x < (vert[j][1] - vert[i][1]) * (y - vert[i][0]) / (vert[j][0] - vert[i][0]) + vert[i][1])) inside = !inside
    }
    return inside
  }
 