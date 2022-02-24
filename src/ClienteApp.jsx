import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import "./ClienteApp.css";
import { ClientesPage } from "./pages/ClientesPage";

function ClienteApp() {
    return (
        <Provider store={store}>
            {/* <AppRouter /> */}
            <ClientesPage />
        </Provider>
    );
}

export default ClienteApp;
