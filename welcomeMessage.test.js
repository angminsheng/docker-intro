const welcomeMessage = require(`./welcomeMessage`)

test('should return the correct welcome message', () => {
  expect(welcomeMessage(`Min`)).toBe(`Welcome Min to our basic node application`)
})
