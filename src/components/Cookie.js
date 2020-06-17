import React from 'react'
import { useCookie } from '../hooks'

const Cookie = () => {
	const [ cookie, setCookie ] = useCookie({ key: 'test' })
	// const [ cookie, set2ndCookie ] = useCookie({ key: '2ndkey' })
	return (
		<div>
			<h1>{cookie || ''}</h1>
			<input
				type="text"
				value={cookie}
				onChange={ev => setCookie(ev.target.value)}
			/>
		</div>
	)
}

export default Cookie

// Divverent API approaches
// const { value, get, set } = useCookie({key, value})
// value
// const { value, get, set } = useCookie({key: anotherKey, value})

// const { get, set } = useCookie()
// get('theme')
