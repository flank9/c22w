window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    const progress = document.querySelector('.progress');
    const consoleOutput = document.getElementById('console-output');
    const consoleInput = document.getElementById('console-input');

    // Simulate loading
    setTimeout(() => {
        loaderContainer.style.display = 'none'; // Hide the loader
        startTerminal();
    }, 4000);

    // Terminal functions
    function startTerminal() {
        const prompt = 'User@hacker-zone:~$ ';
        const terminalCommands = [
            'Initializing terminal...',
            'Accessing root...',
            'Decrypting files...',
            'Connection established...'
        ];

        let currentCommand = 0;
        const interval = setInterval(() => {
            if (currentCommand < terminalCommands.length) {
                consoleOutput.innerHTML += `<p>${prompt}${terminalCommands[currentCommand]}</p>`;
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
                currentCommand++;
            } else {
                clearInterval(interval);
                promptUser();
            }
        }, 2000);
    }

    function promptUser() {
        const prompt = 'User@hacker-zone:~$ ';
        consoleOutput.innerHTML += `<p>${prompt}</p>`;
        consoleInput.focus();

        consoleInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = consoleInput.value;
                consoleOutput.innerHTML += `<p>${prompt}${command}</p>`;
                handleCommand(command);
                consoleInput.value = '';
                consoleOutput.scrollTop = consoleOutput.scrollHeight;
            }
        });
    }

    function handleCommand(command) {
        const response = `Executing: ${command}...<br>Command not found!`;
        consoleOutput.innerHTML += `<p>${response}</p>`;
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
});
