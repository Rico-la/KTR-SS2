// starting at 11h43 05/03/2022

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Choose the size of the star (1, 2, 3, ...)\n`, size => {
  const parseSize = parseInt(size)

  if (parseSize !== 0 && parseSize > 0 && typeof parseSize !== 'string') {
    star.drawStar(parseSize)
  }

  readline.close()
})


const star = {
  drawStar: (size) => {
    // todo create star
    star.drawHat(size)
    star.drawLine(size)
    star.drawInside(size)
    star.drawLine(size)
    star.drawReverseHat(size)
  },

  drawHat: (size) => {
    for (let i = 0; i < size; i++) {
      for (let gap = 1; gap < size * 2; gap++) {
        process.stdout.write(' ');
      }

      for (let j = 0; j < size + i + 1; j++) {
        if (j === size + i || j === size - i) {
          process.stdout.write('*');
        } else {
          process.stdout.write(' ');
        }
      }
      if (size === 1) {
        process.stdout.write('$');
      }
      process.stdout.write('\n')
    }

  },

  drawLine: (size) => {
    for (let i = 0; i < size * 2 + 1; i++) {
      process.stdout.write('*');
    }

    if (size === 1)
      process.stdout.write(' ');

    for (let j = 0; j < size * 2 - 3; j++) {
      process.stdout.write(' ');
    }

    for (let k = 0; k < size * 2 + 1; k++) {
      process.stdout.write('*')
    }

    if (size === 1)
      process.stdout.write('$');

    process.stdout.write('\n');
  },

  drawInside: (size) => {
    if (size === 1) {
      process.stdout.write(' *   *$\n');
    } else {
      const length = 6 * size

      for (let i = 1; i < size * 2; i++) {
        process.stdout.write(' ');

        for (let j = 1; j < length; j++) {
          if (i <= size) {
            if (j === i || j === length - i - 2) {
              process.stdout.write('*');
            } else {
              process.stdout.write(' ');
            }
          } else {
            const newI = i - size

            if (j === size - newI || j === length - size + newI - 2) {
              process.stdout.write('*')
            } else {
              process.stdout.write(' ');
            }
          }
        }
        process.stdout.write('\n')
      }

    }
  },

  drawReverseHat: (size) => {
    for (let i = 0; i < size; i++) {
      for (let gap = 0; gap < size * 2; gap++) {
        process.stdout.write(" ");
      }
      for (let j = 0; j < size * 2 - 1; j++) {
        if (j === i || j === size * 2 - 2 - i) {
          process.stdout.write("*");
        }
        else {
          process.stdout.write(" ");
        }
      }
      if (size === 1) {
        process.stdout.write('$')
      }
      process.stdout.write("\n");
    }
  }
}

