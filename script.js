function updateColor(id, colorComponent) {
    const range = document.getElementById(id);
    const colorBox = document.getElementById('color-' + colorComponent);
    const hexText = document.getElementById('hex-' + colorComponent);
    
    range.addEventListener('input', () => {
        const value = parseInt(range.value).toString(16).padStart(2, '0');
        let colorCode;

        if (colorComponent === 'verde') {
            // Cambia solo el componente verde
            colorCode = `#00${value}00`;
        } else if (colorComponent === 'rojo') {
            // Cambia solo el componente rojo
            colorCode = `#${value}0000`;
        }

        colorBox.style.backgroundColor = colorCode;
        hexText.textContent = colorCode.toUpperCase();
    });
}

// Inicializar los deslizadores para verde y rojo
updateColor('verde', 'verde');
updateColor('rojo', 'rojo');
