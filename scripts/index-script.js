document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const animationContainer = document.getElementById('animation-container');

    const equations = [
        {latex: "E = mc^2", size: "1.5vw", position: {top: '10%', left: '10%'}},
        {latex: "\\frac{d}{dx}e^x = e^x", size: "2vw", position: {top: '20%', left: '70%'}},
        {latex: "F = ma", size: "2.75vw", position: {top: '27.5%', left: '17.5%'}},
        {latex: "\\int_0^\\infty e^{-x} dx = 1", size: "1vw", position: {top: '40%', left: '80%'}},
        {latex: "\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}", size: "2.5vw", position: {top: '50%', left: '10%'}},
        {latex: "i\\hbar\\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi", size: "1vw", position: {top: '65%', left: '20%'}},
        {latex: "PV = nRT", size: "1.25vw", position: {top: '67.5%', left: '30%'}},
        {latex: "\\vec{F}_{12} = G \\frac{m_1 m_2}{r^2} \\hat{r}_{12}", size: "1.5vw", position: {top: '80%', left: '50%'}},
        {latex: "\\frac{1}{c^2}\\frac{\\partial^2 \\psi}{\\partial t^2} = \\nabla^2 \\psi", size: "1.8vw", position: {top: '90%', left: '40%'}},
        {latex: "E = -\\frac{13.6 \\text{eV}}{n^2}", size: "1.5vw", position: {top: '5%', left: '20%'}},
        {latex: "a^2 + b^2 = c^2", size: "1.5vw", position: {top: '10%', left: '80%'}},
        {latex: "\\gamma = \\frac{1}{\\sqrt{1-\\frac{v^2}{c^2}}}", size: "1.8vw", position: {top: '15%', left: '30%'}},
        {latex: "\\frac{\\Delta p \\Delta x}{\\hbar} \\geq \\frac{1}{2}", size: "1.2vw", position: {top: '20%', left: '60%'}},
        {latex: "R = \\frac{V}{I}", size: "1.2vw", position: {top: '27.5%', left: '35%'}},
        {latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}", size: "1.8vw", position: {top: '20%', left: '85%'}},
        {latex: "c = \\lambda \\nu", size: "1.5vw", position: {top: '35%', left: '70%'}},
        {latex: "U = -G \\frac{m_1 m_2}{r}", size: "1.8vw", position: {top: '37.5%', left: '27.5%'}},
        {latex: "pV^\\gamma = c", size: "1.2vw", position: {top: '90%', left: '87.5%'}},
        {latex: "\\Phi = \\oint \\mathbf{E} \\cdot d\\mathbf{A}", size: "2vw", position: {top: '50%', left: '80%'}},
        {latex: "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}", size: "1.8vw", position: {top: '90%', left: '5%'}},
        {latex: "\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u", size: "1.5vw", position: {top: '60%', left: '70%'}},
        {latex: "\\frac{d^2 x}{dt^2} + \\omega^2 x = 0", size: "1.2vw", position: {top: '65%', left: '40%'}},
        {latex: "V = IR", size: "1.2vw", position: {top: '70%', left: '50%'}},
        {latex: "\\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q}{\\varepsilon_0}", size: "1.5vw", position: {top: '75%', left: '7.5%'}},
        {latex: "\\oint \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I", size: "1.8vw", position: {top: '37.5%', left: '45%'}},
        {latex: "\\frac{\\partial \\mathbf{B}}{\\partial t} + \\nabla \\times \\mathbf{E} = 0", size: "1.8vw", position: {top: '37.5%', left: '2.5%'}},
        {latex: "U = QV", size: "1.2vw", position: {top: '90%', left: '60%'}},
        {latex: "P = \\frac{F}{A}", size: "1.5vw", position: {top: '10%', left: '30%'}},
        {latex: "\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}", size: "1.8vw", position: {top: '15%', left: '45%'}},
        {latex: "\\nabla \\cdot \\mathbf{B} = 0", size: "2vw", position: {top: '70%', left: '80%'}},
        {latex: "\\mathbf{F} = q\\mathbf{E}", size: "1.2vw", position: {top: '60%', left: '90%'}},
        {latex: "E = hf", size: "1.2vw", position: {top: '35%', left: '90%'}},
        {latex: "\\frac{dW}{dt} = P", size: "1.5vw", position: {top: '77.5%', left: '90%'}},
        {latex: "f = \\frac{1}{T}", size: "1.8vw", position: {top: '37.5%', left: '60%'}},
        {latex: "I = \\frac{\\Delta Q}{\\Delta t}", size: "1.2vw", position: {top: '30%', left: '80%'}},
        {latex: "\\tau = I \\alpha", size: "1.5vw", position: {top: '17.5%', left: '7.5%'}},
        {latex: "\\mathbf{F} = q \\mathbf{E} + q \\mathbf{v} \\times \\mathbf{B}", size: "1.8vw", position: {top: '60%', left: '50%'}},
        {latex: "L = I \\omega", size: "1.2vw", position: {top: '72.5%', left: '60%'}},
        {latex: "\\int \\mathbf{A} \\cdot d\\mathbf{l} = 0", size: "1.5vw", position: {top: '77.5%', left: '25%'}},
        {latex: "\\mathbf{F} = -k \\mathbf{x}", size: "1.5vw", position: {top: '60%', left: '30%'}},
        {latex: "U = mgh", size: "2.5vw", position: {top: '82.5%', left: '70%'}},
        {latex: "\\Delta x = v_0 t + \\frac{1}{2} a t^2", size: "1.8vw", position: {top: '85%', left: '15%'}},
        {latex: "\\mathbf{p} = m \\mathbf{v}", size: "1.2vw", position: {top: '22.5%', left: '17.5%'}},
        {latex: "K = \\frac{1}{2} mv^2", size: "1.5vw", position: {top: '10%', left: '60%'}},
        {latex: "v = f\\lambda", size: "1.2vw", position: {top: '15%', left: '20%'}},
        {latex: "T = 2\\pi \\sqrt{\\frac{l}{g}}", size: "1.5vw", position: {top: '27.5%', left: '47.5    %'}},
        {latex: "\\Delta S \\geq 0", size: "1.8vw", position: {top: '65%', left: '5%'}},
        {latex: "\\mathbf{J} = \\sigma \\mathbf{E}", size: "1.2vw", position: {top: '30%', left: '60%'}},
        {latex: "\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}", size: "1.2vw", position: {top: '27.5%', left: '5%'}},
        {latex: "Q = mc \\Delta T", size: "1.5vw", position: {top: '75%', left: '37.5%'}},
        {latex: "c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}", size: "2vw", position: {top: '75%', left: '67.5%'}},
        {latex: "E = hf", size: "1.2vw", position: {top: '85%', left: '40%'}}
    ];

    const colors = [
        "#e2a41a", "#e89d1c", "#d77518", "#cf6316", "#c95615", "#b72810", "#aa090d", "#9a0b17", "#810d28", "#710f32", "#6a0f36", "#5d194d", "#561756"
    ];

    function createEquationElement(equation) {
        const div = document.createElement('div');
        div.className = 'equation';
        div.style.color = colors[Math.floor(Math.random() * colors.length)];
        div.style.top = equation.position.top;
        div.style.left = equation.position.left;
        div.style.fontSize = equation.size;
        katex.render(equation.latex, div, {throwOnError: false});
        return div;
    }

    function createPhraseElement() {
        const div = document.createElement('div');
        div.className = 'animated-phrase';
        div.textContent = 'Explorando la física';
        return div;
    }

    function startAnimation() {
        animationContainer.innerHTML = '';

        let delay = 0;
        if (window.innerWidth > 639) {
            equations.forEach((equation) => {
                const equationElement = createEquationElement(equation);
                animationContainer.appendChild(equationElement);
                setTimeout(() => {
                    equationElement.style.opacity = 1;
                }, delay);
                delay += 25; // Adjust delay between equations
            });
        }

        const phraseElement = createPhraseElement();
        animationContainer.appendChild(phraseElement);
        setTimeout(() => {
            phraseElement.style.opacity = 1;
        }, delay);
        
        // setTimeout(() => {
        //     phraseElement.style.opacity = 0;
        //     equations.forEach((_, index) => {
        //         const equationElement = animationContainer.children[index];
        //         equationElement.style.opacity = 0;
        //     });
        // }, delay + 2000); // Time before fading out

        // setTimeout(startAnimation, delay + 3000); // Restart animation after a delay
    }

    startAnimation();

    window.addEventListener('resize', startAnimation);

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
        if (menu.classList.contains('show')) {
            menu.classList.remove('hide');
        } else {
            menu.classList.add('hide');
        }
    });
});
