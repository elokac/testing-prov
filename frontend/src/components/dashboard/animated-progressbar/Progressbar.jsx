import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Progressbar = (props) => (
	<AnimatedProgressProvider
		valueStart={0}
		valueEnd={props.endValue}
		duration={1.5}
		easingFunction={easeQuadInOut}
		// repeat
	>
		{(value) => {
			const needDominantBaselineFix = true;
			const roundedValue = Math.round(value);

			let color;
			if (roundedValue < 25) color = '#fd0000';
			else if (value > 25 && value <= 50) color = '#fdb007';
			else if (value > 50 && value <= 75) color = '#94aab6';
			else color = '#273c47'

			return (
				<CircularProgressbar
					value={value}
					text={
						<tspan
							dx={needDominantBaselineFix ? -15 : 0}
							dy={needDominantBaselineFix ? 5 : 0}
						>
							{`${roundedValue}%`}
						</tspan>
					}
					styles={buildStyles({
						/* This is important to include, because if you're fully managing the
						animation yourself, you'll want to disable the CSS animation. */

						// pathTransition: "none",
						pathColor: color,
						textColor: '#273C47',
						textSize: '16px',
						trailColor: '#f9e8e8',
						backgroundColor: '#3e98c7',
						strokeLinecap: 'round'
					})}
				/>
			);
		}}
	</AnimatedProgressProvider>
);

export default Progressbar;
