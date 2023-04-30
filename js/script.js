const body = document.querySelector('body');

// TODO: Использовать Modules 

const html = `
    <main class="container">
        <div class="keyboard">
            <section class="keyboard-input">
                <input class="keyboard-input__area"/>
            </section>
            <section class="keyboard-desk">
                <div class="keyboard-desk__shape">
                    <button class="tilda">~</button>
                    <button class="one">1</button>
                    <button class="two">2</button>
                    <button class="three">3</button>
                    <button class="four">4</button>
                    <button class="five">5</button>
                    <button class="six">6</button>
                    <button class="seven">7</button>
                    <button class="eight">8</button>
                    <button class="nine">9</button>
                    <button class="null">0</button>
                    <button class="minus">-</button>
                    <button class="equal">=</button>
                    <button class="backspace">Backspace</button>
                    <button class="tab">Tab</button>
                    <button class="q">Q</button>
                    <button class="w">W</button>
                    <button class="e">E</button>
                    <button class="r">R</button>
                    <button class="t">T</button>
                    <button class="y">Y</button>
                    <button class="u">U</button>
                    <button class="i">I</button>
                    <button class="o">O</button>
                    <button class="p">P</button>
                    <button class="bracket-left">'['</button>
                    <button class="bracket-right">']'</button>
                    <button class="backslash">'\'</button>
                    <button class="del">Del</button>
                    <button class="caps">Caps Lock</button>
                    <button class="a">A</button>
                    <button class="s">S</button>
                    <button class="d">D</button>
                    <button class="f">F</button>
                    <button class="g">G</button>
                    <button class="h">H</button>
                    <button class="j">J</button>
                    <button class="k">K</button>
                    <button class="l">L</button>
                    <button class="semicolon">';'</button>
                    <button class="quote">"'"</button>
                    <button class="enter">Enter</button>
                    <button class="shift-left">Shift</button>
                    <button class="backslash-left">'\'</button>
                    <button class="z">Z</button>
                    <button class="x">X</button>
                    <button class="c">C</button>
                    <button class="v">V</button>
                    <button class="b">B</button>
                    <button class="n">N</button>
                    <button class="m">M</button>
                    <button class="period">.</button>
                    <button class="comma">,</button>
                    <button class="slash">/</button>
                    <button class="arrow-up">ArrowUp</button>
                    <button class="shift-right">Shift</button>
                    <button class="ctrl-left">Ctrl</button>
                    <button class="win">Win</button>
                    <button class="alt-left">Alt</button>
                    <button class="space">Space</button>
                    <button class="alt-right">Alt</button>
                    <button class="ctrl-right">Ctrl</button>
                    <button class="arrow-left">ArrowLeft</button>
                    <button class="arrow-down">ArrowDown</button>
                    <button class="arrow-right">ArrowRight</button>
                </div>
            </section>
        </div>
    </main>
`;

body.insertAdjacentHTML('afterbegin', html);