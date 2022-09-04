import { render } from "@testing-library/react"
import App from "."

describe('App', () => {
    const { debug } = render(<App />)
    test('any', () => {
        debug()
        expect(1 + 1).toBe(2)
    })
})