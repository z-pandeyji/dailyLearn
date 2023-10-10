class EventEmitter {
	constructor() {
		this.events = new Map()
	}

	on(eventName, callback) {
		this.events.set(eventName, this.events.get(eventName) || [])
		this.events.get(eventName).push(callback)
	}

	off(eventName) {
		this.events.delete(eventName)
	}

	trigger(eventName, ...args) {
		const eventCallbacks = this.events.get(eventName)
		if (eventCallbacks) {
			eventCallbacks.forEach((callback) => callback(...args))
		}
	}
}

export default EventEmitter
