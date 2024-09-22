const { render } = require("@testing-library/react")
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux"
import Header from "../Header"
import store from "../utils/store"

test("logo should load on rendering header", ()=>{
  const header =  render(
       <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>  
       </StaticRouter>
    )

    const logo = header.getAllByTestId("logo")

    expect(logo[0].alt).toBe('')
})
test("Online status should green on rendering header", ()=>{
  const header =  render(
       <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>  
       </StaticRouter>
    )

    const onlineStatus = header.getByTestId("on-status")

    expect(onlineStatus.innerHTML).toBe('✅')
})
test("Online status should green on rendering header", ()=>{
  const header =  render(
       <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>  
       </StaticRouter>
    )

    const cart = header.getByTestId("cart")

    expect(cart.innerHTML).toBe('Cart- 2')
})