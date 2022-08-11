import {
  createContext,
  memo,
  useContext as usecontx,
  useMemo,
  useState,
} from "react";

const Context = createContext(null);

function ContextProvider(props) {
  const [city, setCity] = useState(null);
  const [businessType, setBusinessType] = useState(null);
  const [localities, setLocalities] = useState([]);

  const data = useMemo(
    () => ({
      updateCity: (params) => setCity(params),
      updateLocality: (params) => {
        if (!localities.includes(params)) {
          return setLocalities((prev) => [...prev, params]);
        }
        setLocalities((prev) => prev.filter((item) => item !== params));
      },
      resetLocality: (params) => setLocalities(params),
      updateBusinessType: (params) => setBusinessType(params),
    }),
    [localities]
  );

  return (
    <Context.Provider value={{ businessType, city, localities, ...data }}>
      {props.children}
    </Context.Provider>
  );
}

export default memo(ContextProvider);

export const useContext = () => usecontx(Context);
