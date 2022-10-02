import classNames from "classnames";

// Компонент представляет собой изображние, появляющееся в случае загрузки:
const Spinner = ({externalStyles = null}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			version="1"
			viewBox="0 0 128 128"
			className={externalStyles}>
				<g>
					<path
						fill="#9f0013"
						d="M64 9.75A54.25 54.25 0 009.75 64H0a64 64 0 01128 0h-9.75A54.25 54.25 0 0064 9.75z">
					</path>
					<animateTransform
						attributeName="transform"
						dur="1000ms"
						from="0 64 64"
						repeatCount="indefinite"
						to="360 64 64"
						type="rotate">
					</animateTransform>
				</g>
		</svg>
	);
}

export default Spinner;