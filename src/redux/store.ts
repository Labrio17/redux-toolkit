import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter.slice";


//creo lo sotre che conterrà i reducer
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});


export default store;

// espongo i tipi di redux utilizzando il type infer di TypeScript
export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch