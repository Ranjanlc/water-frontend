import { Suspense } from "react";
import AllRoutes from "./AllRoutes/AllRoutes.jsx";
import Loader from "./Component/Loader/Loader";

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        <AllRoutes />
      </Suspense>
    </>
  );
};

export default App;
