import { addCommandToCurrentObject } from 'src/context'
import { tryParseTimestamp } from 'src/tryParseTimestamp'
import { Command } from 'src/types/Command'
import { Easing } from 'src/types/Easing'
import { Timestamp } from 'src/types/Timestamp'

export function moveY(startTime: number | Timestamp, endTime: number | Timestamp, startY: number, endY: number, easing: Easing = Easing.Linear) {
	addCommandToCurrentObject<Command>({
		__name__: 'MoveX',
		type: 'MY',
		easing,
		startTime: tryParseTimestamp(startTime),
		endTime: tryParseTimestamp(endTime),
		startValue: startY,
		endValue: endY,
	})
}

export function moveYAtTime(time: number | Timestamp, y: number) {
	addCommandToCurrentObject<Command>({
		__name__: 'MoveX',
		type: 'MY',
		easing: Easing.Linear,
		startTime: tryParseTimestamp(time),
		endTime: tryParseTimestamp(time),
		startValue: y,
		endValue: y,
	})
}
