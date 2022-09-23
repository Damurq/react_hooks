// https://github.com/luismcabrera/useref-react

const refContainer = useRef(initialValue);

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` apunta al elemento de entrada de texto montado
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }