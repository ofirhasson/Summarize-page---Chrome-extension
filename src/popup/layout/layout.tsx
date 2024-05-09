import Summarize from "../summarize/summarize";
import "./layout.css";

function Layout(): JSX.Element {
    return (
        <div className="layout">
            <header>
                <h1>Page Summarize</h1>
            </header>

            <main>
                <Summarize></Summarize>
            </main>

        </div>
    );
}

export default Layout;
