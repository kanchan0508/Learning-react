import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../utils/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { json } from "react-router-dom";
import {Restaurant_DATA} from "../mocks/data"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(Restaurant_DATA)
        }
    })
})
test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer")


   expect(shimmer.children.length).toBe(10)
});

test("Restaurant card should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")) )
  const resList = body.getByTestId("rest-list");

   expect(resList .children.length).toBe(20)
});

test("Search for string(food) on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")) )
  const searchInput = body.getByTestId("search-input");

    fireEvent.change(searchInput,
         {target: {
        value: "food"
    },
})

 const searchBtn = body.getByTestId("search-btn")
 fireEvent.click(searchBtn)

 const resList = body.getByTestId("rest-list");

 expect(resList .children.length).toBe(1)
});
