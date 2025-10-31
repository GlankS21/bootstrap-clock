import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { DateTime } from 'luxon'

const timeContent = document.getElementById("timeContent");
setInterval(() => {
  timeContent.textContent = DateTime.local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
}, 1000);
