import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../utils/store";
import { fireEvent, render, waitFor } from "@testing-library/react";


test("Search for string(food) on homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
        <Header />
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(body.getByTestId("menu")) )
    const addBtn = body.getByTestId("addBtn") 

     fireEvent.click(addBtn)
   const cart = body.getByTestId("cart");
  
   expect(cart.innerHTML).toBe("Cart- 3") 
  });
  