let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (s) => {
    try {
      if (s.target.innerHTML == '=') {
        string = eval(string);
        document.querySelector('input').value = string;
      } else if (s.target.innerHTML == 'C') {
        string = "";
        document.querySelector('input').value = string;
      } else {
        console.log(s.target);
        let lastChar = string.charAt(string.length - 1);
        let newChar = s.target.innerHTML;
        if ((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '%') && (newChar == '+' || newChar == '*' || newChar == '/' || newChar == '%')) {
          throw new Error('Invalid input');
        }
        string = string + newChar;
        document.querySelector('input').value = string;
      }
    } catch (error) {
      console.error(error);
      string = "";
      document.querySelector('input').value = 'Invalid input';
    }

  });
});
