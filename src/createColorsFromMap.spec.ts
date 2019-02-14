import a from 'assertron'

import { ColorMap } from './interfaces'
import { createColorsFromMap } from './createColorsFromMap'

test('summer colors', () => {
  const summer: ColorMap = [{ index: 0, rgb: [0, 128, 102] }, { index: 1, rgb: [255, 255, 102] }]

  a.throws(() => createColorsFromMap(summer, 1))

  const actual = createColorsFromMap(summer, 60)
  expect(actual).toEqual([[0, 128, 102, 1], [4, 130, 102, 1], [9, 132, 102, 1], [13, 134, 102, 1], [17, 137, 102, 1], [22, 139, 102, 1], [26, 141, 102, 1], [30, 143, 102, 1], [35, 145, 102, 1], [39, 147, 102, 1], [43, 150, 102, 1], [48, 152, 102, 1], [52, 154, 102, 1], [56, 156, 102, 1], [61, 158, 102, 1], [65, 160, 102, 1], [69, 162, 102, 1], [73, 165, 102, 1], [78, 167, 102, 1], [82, 169, 102, 1], [86, 171, 102, 1], [91, 173, 102, 1], [95, 175, 102, 1], [99, 178, 102, 1], [104, 180, 102, 1], [108, 182, 102, 1], [112, 184, 102, 1], [117, 186, 102, 1], [121, 188, 102, 1], [125, 190, 102, 1], [130, 193, 102, 1], [134, 195, 102, 1], [138, 197, 102, 1], [143, 199, 102, 1], [147, 201, 102, 1], [151, 203, 102, 1], [156, 205, 102, 1], [160, 208, 102, 1], [164, 210, 102, 1], [169, 212, 102, 1], [173, 214, 102, 1], [177, 216, 102, 1], [182, 218, 102, 1], [186, 221, 102, 1], [190, 223, 102, 1], [194, 225, 102, 1], [199, 227, 102, 1], [203, 229, 102, 1], [207, 231, 102, 1], [212, 233, 102, 1], [216, 236, 102, 1], [220, 238, 102, 1], [225, 240, 102, 1], [229, 242, 102, 1], [233, 244, 102, 1], [238, 246, 102, 1], [242, 249, 102, 1], [246, 251, 102, 1], [251, 253, 102, 1], [255, 255, 102, 1]])
})
