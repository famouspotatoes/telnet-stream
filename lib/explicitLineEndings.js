/**
 * Replaces real line endings with representations of line
 * ending characters. Useful for logging in situations where
 * presence of certain line endings is important.
 *
 * @param string
 * @returns {*}
 */

const explicitLineEndings = (string) => {
  return string
    .replace(/\r\n/, '\\r\\n')
    .replace(/\n\r/, '\\n\\r')
    .replace(/\r/, '\\r')
    .replace(/\n/, '\\n');
}

module.exports = {explicitLineEndings}