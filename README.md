<h1 align="center">Игры разума </h1>

### Hexlet tests and linter status:
[![Actions Status](https://github.com/frekbySib/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/frekbySib/backend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/548b770f1468c6506a01/maintainability)](https://codeclimate.com/github/frekbySib/backend-project-lvl1/maintainability)


# Documentation :ru:
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа.
- Определение наибольшего общего делителя.
- Определение простого числа.


## REQUIREMENTS

Have at least node.js version 16 installed: [Download](https://nodejs.org)  
To get your version number type `node --version` in your console or terminal. 

## INSTALL

1. `git clone https://github.com/frekbySib/backend-project-lvl1.git`
2. `cd backend-project-lvl1/`
3. `make install`
4. `npm link`

## HOW TO PLAY

### commands

| command             |                                        game |
| ------------------- | ------------------------------------------: |
| `brain-even`        |                       Is it an even number? |
| `brain-calc`        |                     Solve simple expression |
| `brain-gcd`         | Find greatest common divisor of two numbers |
| `brain-progression` |      Find the missing number in progression |
| `brain-prime`       |                       Is it a prime number? |

### Preview

#### Game: Parity Check | :ru: Игра: Проверка на чётность
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное. Три правильных ответа подряд - победил. Вот только для неправильного ответа нет других шансов.

[![asciicast](https://asciinema.org/a/499582.svg)](https://asciinema.org/a/499582)

#### Game: "Calculator" | :ru: Игра: "Калькулятор"
Суть игры в следующем: пользователю предлагаются задачки, где три правильных решения ведут к победе, а неверных результат к мгновенному проигрышу. Три топора или ничего :grinning:

[![asciicast](https://asciinema.org/a/500068.svg)](https://asciinema.org/a/500068)

#### Game "Greatest common divisor" | :ru: Игра: "НОД"
Суть игры в следующем: пользователю предлагаются два числа, для которых трубуется определить наибольший общий делитель. Всего-то и надо три раза подряд дать верный ответ. Или один неверный

[![asciicast](https://asciinema.org/a/500070.svg)](https://asciinema.org/a/500070)

#### Game: "Arithmetic progression" | :ru: Игра: "Арифметическая прогрессия"
Суть игры в следующем: пользователю предлагается числовая последовательность, в которой один элемент спрятан. Укажите правильное значение пропущенной последовательности и вы победитель. Всего-то и надо три раза подряд дать верный ответ. Или один неверный.

[![asciicast](https://asciinema.org/a/500072.svg)](https://asciinema.org/a/500072)

#### Game: "Is it a prime number?" | :ru: Игра: "Простое ли число?"
Суть игры в следующем: пользователю предлагается число. Надо дать ответ - простое это число или нет. Простые числа — это целые числа больше единицы, которые не могут быть представлены как произведение двух меньших чисел. Три корректных ответа ведут к победе, один неверный результат к мгновенному поражению. Дерзайте!

[![asciicast](https://asciinema.org/a/500074.svg)](https://asciinema.org/a/500074)