import { createContext, useContext, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export const Context = createContext({
  value: { login: false },
  setValue: null,
});

export function AuthProvier(props) {
  const [value, setValue] = createStore({ login: false });

  return (
    <Context.Provider value={{ value, setValue }}>
      {props.children}
    </Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}
