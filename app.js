var p = document.getElementById("p");
var btn = document.getElementById("btn");
var img = document.getElementById("img");

var ramen = {
    imagesrc:"https://78.media.tumblr.com/579541d93657a59525c309d6a85984c7/tumblr_otvnxtq8T51vv1g70o1_500.gif",
    name:"Ramen",
    verb:"You should eat ramen",
    adjective:"delicious",
};
var pancake = {
    imagesrc:"http://goboiano.com/wp-content/uploads/2017/02/tumblr_ob72uia7xb1u6xtrco1_500.gif",
    name:"Pancake",
    verb:"You should eat pancake",
    adjective:"sweet",
};
var omurice = {
    imagesrc:"http://25.media.tumblr.com/24abff553f986d537cea4f8b48c8a44e/tumblr_mtwz6eJ9az1s4uarco1_500.gif",
    name:"Omurice",
    verb:"You should eat omurice",
    adjective:"umami",
};
var takoyaki = {
    imagesrc:"http://files.57gif.com/webgif/0/0/27/8b29e4201bf7db80e3aff4ba0d736.gif",
    name:"takoyaki",
    verb:" You should eat takoyaki",
    adjective:"yummy",
};
var pizza = {
    imagesrc:"https://media.giphy.com/media/jtsOt094TjdWE/giphy.gif",
    name:"Pizza",
    verb:"You should eat pizza",
    adjective:"fatty",
};

var z = [ramen, pancake, omurice, takoyaki, pizza];


btn.addEventListener("click", function(){
    var x = Math.floor(Math.random() * 5 + 0);
    var imgchooser = z[x].imagesrc;
    img.src = imgchooser;
    p.innerHTML = z[x].verb + " because it's " + z[x].adjective;
});