import { useState, JSX } from "react";
import { NavLink } from "react-router-dom";
import { ExpandedItems } from "../../types";
import { menuItems } from "./items";

export const Sidebar = (): JSX.Element => {
	const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

	const toggleItem = (key: string): void => {
		setExpandedItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<nav className='sidebar'>
			<div className='sidebar-header'>
				<h2>React 19</h2>
			</div>
			<ul className='sidebar-menu'>
				{menuItems.map((item, index) => (
					<li key={index}>
						{item.subItems ? (
							<div className='menu-item'>
								<button
									className='menu-button'
									onClick={() => toggleItem(item.title)}
								>
									<span className='icon'>{item.icon}</span>
									{item.title}
									<span
										className={`arrow ${
											expandedItems[item.title] ? "expanded" : ""
										}`}
									>
										▶
									</span>
								</button>
								{expandedItems[item.title] && (
									<ul className='submenu'>
										{item.subItems.map((subItem, subIndex) => (
											<li key={subIndex}>
												<NavLink
													to={subItem.path}
													className={({ isActive }) =>
														isActive ? "submenu-link active" : "submenu-link"
													}
												>
													{subItem.title}
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</div>
						) : (
							<NavLink
								to={item.path!}
								className={({ isActive }) =>
									isActive ? "menu-link active" : "menu-link"
								}
							>
								<span className='icon'>{item.icon}</span>
								{item.title}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
