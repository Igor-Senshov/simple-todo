import React from "react"
import styles from "./checkbox.css"

export default function Checkbox(props) {
	const { id, name, checked, handleCheck } = props || {}
	const { checkboxContainer, checkboxBackground } = styles

	return(
		<label className={checkboxContainer} htmlFor={id}>
			<input
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				onChange={handleCheck}
			/>
			<span className={checkboxBackground}></span>
		</label>
	)
}