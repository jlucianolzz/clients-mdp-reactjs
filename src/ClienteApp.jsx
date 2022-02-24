import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import "./ClienteApp.css";

function ClienteApp() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default ClienteApp;
