var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0 , 600, 400);

    pincel.fillStyle = 'purple';
    pincel.fillRect(0, 0, 150, 200);

    pincel.fillStyle = 'purple';
    pincel.fillRect(450, 200, 150, 200);

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(150, 400);
    pincel.lineTo(450, 400);
    pincel.fill();

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(300, 100, 50, 0, 2 * 3.14);
    pincel.fill();
