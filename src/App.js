import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getProducts } from "./redux/actions/productAction";
import routes from "./routes/routes";

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then(data => dispatch(getProducts(data)))
  }, [dispatch])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
