const body = document.querySelector('body');

const html = `
    <main class="container">
        <div class="keyboard">
            <section class="keyboard-input">
                <input class="keyboard-input__area"/>
            </section>
            <section class="keyboard-desk">
                <div class="keyboard-desk__shape"></div>
            </section>
        </div>
    </main>
`;

body.insertAdjacentHTML('afterbegin', html);