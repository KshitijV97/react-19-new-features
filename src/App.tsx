import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import "./App.css";
import { JSX } from "react";
import { RefExample } from "./components/ref-example/ref-example";
import { UseExample } from "./components/use-example/use-example";
import { ThemeProvider } from "./context/theme-context/theme-context-provider";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<div className='app'>
					<Sidebar />
					<main className='content'>
						<Routes>
							<Route path='/' element={<div>This is root</div>} />
							<Route path='/ref' element={<RefExample />} />
							<Route path='/use' element={<UseExample />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
