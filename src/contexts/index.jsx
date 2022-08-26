import {
  createContext,
  memo,
  useContext as usC,
  useMemo,
  useReducer,
} from "react";
import { BusinessModal, CityModal, LocalityModal } from "_components";

const Context = createContext(null);

const Action = {
  setCity: "SET_CITY",
  setBusiness: "SET_BUSINESS",
  setLocalities: "SET_LOCALITIES",
  resetLocalities: "RESET_LOCALITIES",

  showCity: "SHOW_CITY_MODAL",
  showBusiness: "SHOW_BUSINESS_MODAL",
  showLocality: "SHOW_LOCALITY_MODAL",
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case Action.showBusiness:
          return { ...state, showBusinessModal: action.payload };
        case Action.showCity:
          return { ...state, showCityModal: action.payload };
        case Action.showLocality:
          return { ...state, showLocalityModal: action.payload };

        case Action.setBusiness:
          return {
            ...state,
            showBusinessModal: false,
            businessType: action.payload,
          };
        case Action.setCity:
          return { ...state, showCityModal: false, city: action.payload };
        case Action.resetLocalities:
          return { ...state, localities: [] };
        case Action.setLocalities:
          const isPresent = state.localities.find((e) => e === action.payload);
          if (!isPresent) {
            return {
              ...state,
              localities: [...state.localities, action.payload],
            };
          } else {
            return {
              ...state,
              localities: state.localities.filter((e) => e !== action.payload),
            };
          }

        default:
          return state;
      }
    },
    {
      showCityModal: false,
      showLocalityModal: false,
      showBusinessModal: false,
      city: null,
      businessType: null,
      localities: [],
    }
  );

  const action = useMemo(
    () => ({
      showBusiness: () =>
        dispatch({ type: Action.showBusiness, payload: true }),
      hideBusiness: () =>
        dispatch({ type: Action.showBusiness, payload: false }),
      updateBusiness: (params) =>
        dispatch({ type: Action.setBusiness, payload: params }),

      showCity: () => dispatch({ type: Action.showCity, payload: true }),
      hideCity: () => dispatch({ type: Action.showCity, payload: false }),
      updateCity: (params) =>
        dispatch({ type: Action.setCity, payload: params }),

      showLocality: () =>
        dispatch({ type: Action.showLocality, payload: true }),
      hideLocality: () =>
        dispatch({ type: Action.showLocality, payload: false }),
      updateLocality: (params) =>
        dispatch({ type: Action.setLocalities, payload: params }),
      resetLocality: () => dispatch({ type: Action.resetLocalities }),
    }),
    []
  );

  return (
    <Context.Provider value={{ ...state, ...action }}>
      {props.children}
      <BusinessModal />
      <CityModal />
      <LocalityModal />
    </Context.Provider>
  );
}

export default memo(ContextProvider);

export const useContext = () => usC(Context);
