import {useState} from 'react'

export const useInc = ({
	maxValue = 1000,
	minValue =  -1000,
	initial = 0,
	step = 1
}) => {
	const [value, setValue] = useState(initial)

	const inc = () => {
		setValue(prevState =>
			prevState + step > maxValue ? maxValue : prevState + step
		)
	}

	const dec = () => {
		setValue(prevState =>
			prevState - step < minValue ? minValue : prevState - step
		)
	}

	const reset = () => setValue(initial)

	return [value, {inc, dec, reset}]
}
