// atividade08/public/js/virtual-keyboard.js
document.addEventListener('DOMContentLoaded', () => {
    const keyboardContainer = document.getElementById('virtualKeyboard');
    const passwordInput = document.getElementById('password');

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()'.split('');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createKeyboard() {
        keyboardContainer.innerHTML = '';
        const shuffledChars = shuffle([...chars]);

        shuffledChars.forEach(char => {
            const button = document.createElement('button');
            button.textContent = char;
            button.type = 'button';
            button.classList.add('keyboard-button');
            button.addEventListener('click', () => {
                passwordInput.value += char;
            });
            keyboardContainer.appendChild(button);
        });

        const clearButton = document.createElement('button');
        clearButton.textContent = 'Limpar';
        clearButton.type = 'button';
        clearButton.classList.add('keyboard-button', 'clear-button');
        clearButton.addEventListener('click', () => {
            passwordInput.value = '';
        });
        keyboardContainer.appendChild(clearButton);
    }

    createKeyboard();
});