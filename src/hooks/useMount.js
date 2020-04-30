import { useEffect } from "react";

export const useMount = func => {
	useEffect(() => {
		func(); // effect runs when it mounts
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export const useUnmount = func => {
	useEffect(() => {
		return () => {
			func(); // cleanup runs when it unmounts
		}
	})
}
