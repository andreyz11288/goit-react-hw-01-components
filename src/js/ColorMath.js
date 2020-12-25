export default function colorMath() {
  const qq = document.querySelectorAll('.item');
  qq.forEach(qq => (qq.style.backgroundColor = `${get_rand_color()}`));
  function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = '0' + color;
    }
    return '#' + color;
  }
}
