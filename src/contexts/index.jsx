import {
  createContext,
  memo,
  useContext as useconx,
  useMemo,
  useState,
} from "react";

const Context = createContext(null);

function ContextProvider(props) {
  const [city, setCity] = useState(null);
  const [locality, setLocality] = useState(null);

  const data = useMemo(
    () => ({
      updateCity: (params) => setCity(params),
      updateLocality: (params) => setLocality(params),
    }),
    []
  );

  return (
    <Context.Provider value={{ city, locality, ...data }}>
      {props.children}
    </Context.Provider>
  );
}

export default memo(ContextProvider);

export const useContext = () => useconx(Context);
