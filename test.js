window.onload = function() {
  var walls = $$("li");
    alert(walls.length);
    walls[3].observe("mouseover", startClick);
//    for (var i = 0; i < walls.length; i++) {
//        walls[i].observe("mouseover", startClick);
//    }
}
function startClick() {
}