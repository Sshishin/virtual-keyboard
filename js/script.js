import htmlRU from './keyboardRU.js';
import htmlEN from './keyboardEN.js';

const body = document.querySelector('body');

const inputArea = `
    <main class="container">
        <div class="keyboard">
            <section class="keyboard-input">
                <textarea autofocus class="keyboard-input__area"></textarea>
            </section>
        </div>
    </main>
`;

body.insertAdjacentHTML('afterbegin', inputArea);

const keyboardInput = document.querySelector('.keyboard-input');

const mouseListeners = () => {
  const keyboardParent = document.querySelector('.keyboard-desk__shape');

  keyboardParent.addEventListener('mousedown', (e) => {
    if (e.target.className !== 'keyboard-desk__shape') {
      const currentMouse = document.querySelector(`.${e.target.className}`);
      currentMouse.classList.add('active');
      const input = document.querySelector('.keyboard-input__area');
      input.value += currentMouse.innerHTML;
    }
  });

  keyboardParent.addEventListener('mouseup', (e) => {
    const currentMouse = document.getElementById(`${e.target.id}`);
    currentMouse.classList.remove('active');
  });
};

const changeLang = () => {
  if (localStorage.getItem('lang') === 'ru') {
    const lang = document.querySelector('.keyboard-desk');
    if (lang) {
      lang.remove();
      keyboardInput.insertAdjacentHTML('afterend', htmlRU);
    } else {
      keyboardInput.insertAdjacentHTML('afterend', htmlRU);
    }
  } else {
    const lang = document.querySelector('.keyboard-desk');
    if (lang) {
      lang.remove();
      keyboardInput.insertAdjacentHTML('afterend', htmlEN);
    } else {
      keyboardInput.insertAdjacentHTML('afterend', htmlEN);
    }
  }

  mouseListeners();
};

changeLang();

document.addEventListener('keydown', (e) => {
  const addActive = () => {
    const current = document.querySelector(`[data="${e.code}"]`);
    current.classList.add('active');
  };

  if (e.altKey && e.code === 'ShiftLeft') {
    e.preventDefault();
    if (localStorage.getItem('lang') === 'ru') {
      localStorage.setItem('lang', 'en');
      changeLang();
    } else {
      localStorage.setItem('lang', 'ru');
      changeLang();
    }
  }

  const unprintedCharacters = () => {
    if (e.code === 'Space') {
      addActive();
      const input = document.querySelector('.keyboard-input__area');
      input.value += ' ';
    } else if (e.code === 'Enter') {
      addActive();
      const input = document.querySelector('.keyboard-input__area');
      input.value += '\n';
    } else if (e.code === 'Backspace' || e.code === 'Delete') {
      addActive();
    } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
      addActive();
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      addActive();
    } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      addActive();
    } else if (e.code === 'MetaLeft') {
      addActive();
    } else if (e.code === 'Tab') {
      e.preventDefault();
      addActive();
      const input = document.querySelector('.keyboard-input__area');
      input.value += '  ';
    } else if (e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowDown' || e.code === 'ArrowUp') {
      addActive();
    } else if (e.code === 'CapsLock') {
      addActive();
      if (localStorage.getItem('case')) {
        localStorage.removeItem('case');
      } else {
        localStorage.setItem('case', 'lower');
      }
    }
  };

  unprintedCharacters();

  const printedCharacters = () => {
    if (e.code !== 'Space'
      && e.code !== 'Enter'
      && !(e.altKey && e.code === 'ShiftLeft')
      && e.code !== 'AltRight'
      && e.code !== 'AltLeft'
      && e.code !== 'Space'
      && e.code !== 'Backspace'
      && e.code !== 'ShiftLeft'
      && e.code !== 'ShiftRight'
      && e.code !== 'Delete'
      && e.code !== 'ControlLeft'
      && e.code !== 'ControlRight'
      && e.code !== 'Tab'
      && e.code !== 'CapsLock'
      && e.code !== 'MetaLeft'
      && e.code !== 'ArrowLeft'
      && e.code !== 'ArrowRight'
      && e.code !== 'ArrowUp'
      && e.code !== 'ArrowDown') {
      e.preventDefault();
      const current = document.querySelector(`[data="${e.code}"]`);
      current.classList.add('active');
      const input = document.querySelector('.keyboard-input__area');
      if (localStorage.getItem('case') === 'lower') {
        input.value += current.innerHTML.toLowerCase();
      } else {
        input.value += current.innerHTML;
      }
    }
  };

  printedCharacters();
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  const current = document.querySelector(`[data="${e.code}"]`);
  if (current.classList.contains('active')) {
    current.classList.remove('active');
  }
});
