// SIZES
export const BASE_FONT_SIZE = '16px'
export const FONT_SMALL = '75%'
export const FONT_LARGE = '125%'
export const VERTICAL_SPACING = 5
export const HORIZONTAL_SPACING = 6
export const LINE_HEIGHT = 1.5
export const LINE_HEIGHT_LARGE = 2

// COLORS
export const COLOR_GREY = '#808080'
export const PRIMARY_COLOR = COLOR_GREY

// STYLES
const RESET_STYLE = {
  margin: 0,
  padding: 0,
  lineHeight: 1
}

const BASE_STYLE = Object.assign({}, RESET_STYLE, {
  lineHeight: LINE_HEIGHT,
  fontSize: BASE_FONT_SIZE,
  boxSizing: 'border-box'
})

export default {
  h1: Object.assign({}, BASE_STYLE, {
    fontSize: FONT_LARGE,
    color: PRIMARY_COLOR,
    borderBottom: `1px solid ${PRIMARY_COLOR}`,
    lineHeight: LINE_HEIGHT_LARGE
  }),
  h2: Object.assign({}, BASE_STYLE, {
    fontSize: FONT_LARGE
  }),
  h3: Object.assign({}, BASE_STYLE, {}),
  h4: Object.assign({}, BASE_STYLE, {}),
  p: Object.assign({}, BASE_STYLE, {}),
  a: Object.assign({}, BASE_STYLE, {}),
  button: Object.assign({}, BASE_STYLE, {
    backgroundColor: 'red',
    lineHeight: LINE_HEIGHT,
    paddingLeft: HORIZONTAL_SPACING * 2,
    paddingRight: HORIZONTAL_SPACING * 2
  }),
  strong: Object.assign({}, BASE_STYLE, {
    fontWeight: 700
  }),
  em: Object.assign({}, BASE_STYLE, {
    fontStyle: 'italic'
  }),
  ul: Object.assign({}, BASE_STYLE, {
    paddingLeft: HORIZONTAL_SPACING * 2,
    listStyleType: 'disc'
  }),
  li: Object.assign({}, BASE_STYLE, {
    marginBottom: VERTICAL_SPACING
  }),
  span: Object.assign({}, BASE_STYLE, {}),
  div: Object.assign({}, BASE_STYLE, {}),
  article: Object.assign({}, BASE_STYLE, {}),
  section: Object.assign({}, BASE_STYLE, {})
}
