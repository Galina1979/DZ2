
const butbut = document.querySelector('.butbut');
butbut.onclick = () => {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const answer = document.querySelector('.answer');
  if (!q1 || !q2 || !q3) {
    alert('Пожалуйста, ответьте на все вопросы.');
    return;
  }
  let a = 0;
  let one = parseInt(q1.value);
  let two = parseInt(q2.value);
  let three = parseInt(q3.value);
  switch (one) {
    case 1:
      a = a + 2;
      break;
    case 2:
      a = a + 0;
      break;
    case 3:
      a = a + 0;
      break;
    default:
      alert('No');
  }
  let b = 0;
  switch (three) {
    case 1:
      b = b + 0;
      break;
    case 2:
      b = b + 2;
      break;
    case 3:
      b = b + 0;
      break;
    default:
      alert('No');
  }
  let c = 0;
  switch (two) {
    case 1:
      c = c + 0;
      break;
    case 2:
      c = c + 2;
      break;
    case 3:
      c = c + 0;
      break;
    default:
      alert('No');
  }
  const result = document.querySelector(".answer");
  result.value = "Вы набрали: " + (a + b + c);
}





const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const answerNew = document.querySelector('.answerNew');
const but = document.querySelector('.but');

but.onclick = () => {
  const d = parseInt(day.value);
  const m = parseInt(month.value);
  const y = parseInt(year.value);

  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    if (m == 2) {
      if (d >= 1 && d <= 29) {
        if (d == 29) {
          answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
        } else {
          answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
        }
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
      if (d >= 1 && d <= 31) {
        if (d == 31) {
          if (m == 12) {
            answerNew.value = 'Следующая дата: 1.1.' + (y + 1);
          } else {
            answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
          }
        } else {
          answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
        }
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
      if (d >= 1 && d <= 30) {
        if (d == 30) {
          answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
        } else {
          answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
        }
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else {
      if (d >= 1 && d <= 28) {
        answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    }
  } else {
    if (m == 2) {
      if (d >= 1 && d <= 28) {
        answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
      } else if (d == 28) {
        answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
      if (d >= 1 && d <= 31) {
        if (d == 31) {
          if (m == 12) {
            answerNew.value = 'Следующая дата: 1.1.' + (y + 1);
          } else {
            answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
          }
        } else {
          answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
        }
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
      if (d >= 1 && d <= 30) {
        if (d == 30) {
          answerNew.value = 'Следующая дата: 1.' + (m + 1) + '.' + y;
        } else {
          answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
        }
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    } else {
      if (d >= 1 && d <= 28) {
        answerNew.value = 'Следующая дата: ' + (d + 1) + '.' + m + '.' + y;
      } else {
        answerNew.value = 'Введена некорректная дата.';
      }
    }
  }
};
