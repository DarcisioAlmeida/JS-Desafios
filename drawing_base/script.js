/*
    # Logica para desenhar #
    Passo a passo para desenhar no canvas:
        - Quando o click do mouse ABAIXAR, ative o modo desenho.(mousedown)
        - Quando o mouse se MOVER, se o modo desenho estiver ativado, desenhe.(mousemove)
        - Quando o click do mouse LEVANTAR, desative o modo desenho. (mouseup)
*/

// Initial Data
    let currentColor = 'black';
    let canDraw = false;
    let mouseX = 0;
    let mouseY = 0;

    let screen = document.querySelector('#tela');
    let ctx = screen.getContext('2d'); // contexto 

    

// Events
    document.querySelectorAll('.colorArea .color').forEach(item => {
        item.addEventListener('click', colorClickEvent);
    });
    screen.addEventListener('mousedown', mouseDownEvent);
    screen.addEventListener('mousemove', mouseMoveEvent);
    screen.addEventListener('mouseup', mouseUpEvent);
    document.querySelector('.clear').addEventListener('click', clearScreen);

// Functions 
    function colorClickEvent(e) {
        let color = e.target.getAttribute('data-color');
        currentColor = color;

        document.querySelector('.color.active').classList.remove('active');
        e.target.classList.add('active');
    }

    function mouseDownEvent(e) {
        canDraw = true;
        mouseX = e.pageX - screen.offsetLeft;
        mouseY = e.pageY - screen.offsetTop;
    }

    function mouseMoveEvent(e) {
        if(canDraw) {
          draw(e.pageX, e.pageY);  
        }
    }

    function mouseUpEvent() {
        canDraw = false;
    }

    function draw(x, y) {
        let pointX = x - screen.offsetLeft; // offsetLeft = posição do elemento em relação página esquerda
        let pointY = y - screen.offsetTop; // offsetTop = posição do elemento em relção ao top da página

        ctx.beginPath(); // definição linha - inicio
        ctx.lineWidth = 5; // grossura da linha
        ctx.lineJoin = "round"; // formato bordas arredondadas
        ctx.moveTo(mouseX, mouseY); // movimento da linha
        ctx.lineTo(pointX, pointY); // faça linha para
        ctx.closePath(); // fecha o contexto
        ctx.strokeStyle = currentColor; // define cor da linha
        ctx.stroke(); // finaliza o processo

        mouseX = pointX;
        mouseY = pointY;
    }

    function clearScreen() {
        ctx.setTransform(1, 0, 0, 1, 0, 0) // limpa posição geral do cursor e processo do desenho
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // limpa todas as porpriedades do zero até o final da largura do canvas.
    }

    /* 
        // entendendo movimento do mouse // 
        function mouseMoveEvent(e) {
            if(canDraw) {
                let pointX = e.pageX - screen.offsetLeft;
                let pointY = e.pageY - screen.offsetTop;

                console.log(pointX, pointY)
            }
        }
    */