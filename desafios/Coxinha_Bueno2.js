var num = new Array("10", "840", "1");
var media = new Array();
var t = 0;

do {
  if (num[0] == 10) {
    media[0] = parseFloat(10 / 90).toFixed(2);
    console.log(media[0]);
    t++;
    num[0]++;
      }else if (num[1] == 840) {
        media[1] = parseFloat(840 / 11).toFixed(2);
        console.log(media[1]);
        t++;
        num[1]++;
          }else if (num[2] == 1) {
            media[2] = parseFloat(1 / 50).toFixed(2);
            console.log(media[2]);
            t++;
            }
  media.shift();
}while (t != 3)