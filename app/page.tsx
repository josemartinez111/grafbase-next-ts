// FILE: HomePage.tsx
// _______________________________________________

import { NextPage } from "next";
// _______________________________________________

const lineStyle = {
	borderTop: '4px solid mediumpurple',
	width: '100%',
	margin: '0.5rem 0',
} as const;

const customStyles = {
	backgroundColor: '#2f323a',
	margin: '5rem auto',
	padding: '0 5%',
	width: 'fit-content',
	borderRadius: '15px',
} as const;

const wrapperStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch', // This will make the wrapper div as wide as the customStyles div
	width: '100%',
} as const;

const h1Style = {
	padding: '10px',
	fontFamily: 'Liberation Mono for Powerline',
	color: 'mediumpurple',
	fontSize: '1.7rem',
	display: 'grid',
	placeItems: 'center',
} as const;
// _______________________________________________

type HomeProps = {
	mockProp?: string;
};
// _______________________________________________

const HomePage: NextPage<HomeProps> = ({ mockProp = 'HomePage' }) => {
	
	// _________________ [functions] ___________________
	
	
	// _________________________________________________
	return (
		//==== <>fragments</> ====
		<main>
			<div style={ customStyles }>
				<div style={ wrapperStyle }>
					<div style={ lineStyle } />
					<h1 style={ h1Style }>@{ mockProp }</h1>
					<div style={ lineStyle } />
				</div>
			</div>
		</main>
	);
};
// _______________________________________________

export default HomePage;
// _______________________________________________
