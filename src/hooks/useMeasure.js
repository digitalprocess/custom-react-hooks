import { useEffect, useState, useRef } from 'react'

export const useMeasure = () => {
	const ref = useRef()

	const [bounds, setBounds] = useState({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	})

	const [resizeO] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)))

	useEffect(() => {
		if (ref.current) {
			resizeO.observe(ref.current)
		}
		return () =>  resizeO.disconnect()
	}, [resizeO])

	return [{ref}, bounds]
}
