export default function colorMath() {
    const qq = document.querySelectorAll('.item')
qq[0].style.backgroundColor = `${get_rand_color()}`
qq[1].style.backgroundColor = `${get_rand_color()}`
qq[2].style.backgroundColor = `${get_rand_color()}`
qq[3].style.backgroundColor = `${get_rand_color()}`
qq[4].style.backgroundColor = `${get_rand_color()}`
// qq.setAttribute('style', `background-color: ${get_rand_color()} ;`)
function get_rand_color(){
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}
}