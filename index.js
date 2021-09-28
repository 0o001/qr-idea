import bwipjs from 'bwip-js';
import terminalImage from 'terminal-image';

bwipjs.toBuffer({ bcid:'qrcode', text:'1' }, (err, png) => {
    if (err) {
        return;
    }

    terminalImage.buffer(png).then(text => console.log(text))
});