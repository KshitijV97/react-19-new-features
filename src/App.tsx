import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import "./App.css";
import { JSX } from "react";
import { RefExample } from "./components/ref-example/ref-example";
import { UseExample } from "./components/use-example/use-example";
import { ThemeProvider } from "./context/theme-context/theme-context-provider";
import UseFormStatus from "./components/use-form-status/use-form-status";
import UseOptimistic from "./components/use-optimistic/use-optimistic";

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
							<Route path='/use-form-status' element={<UseFormStatus />} />
							<Route
								path='/use-optimistic'
								element={
									<UseOptimistic
										initialTodos={[
											{
												id: "1",
												title: "First item",
											},
											{
												id: "2",
												title: "Second item",
											},
										]}
									/>
								}
							/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
