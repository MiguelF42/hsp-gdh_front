import cron from 'node-cron';

const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const hoursOfDay = [...Array(24).keys()].map(hour => hour.toString());
const minutesOfHour = [...Array(60).keys()].map(minute => minute.toString());

function toCronExpression(str) {
	switch (str.toLowerCase()) {
	case 'everyfiveseconds': {
		return '*/5 * * * * *';
	}
	case 'everythirtyseconds': {
		return '*/30 * * * * *';
	}
	case 'everyminute': {
		return '* * * * *';
	}
	case 'everyfiveminutes': {
		return '*/5 * * * *';
	}
	case 'everyfifteenminutes': {
		return '*/15 * * * *';
	}
	case 'everythirtyminutes': {
		return '*/30 * * * *';
	}
	case 'everyday': {
		return '0 0 * * *';
	}
	case 'weekdays': {
		return '0 0 * * 1-5';
	}
	case 'weekends': {
		return '0 0 * * 6,7';
	}
	default: {
		const [day, hour, minute] = str.toLowerCase().split(' ');
		const dayIndex = daysOfWeek.indexOf(day);
		const hourIndex = hoursOfDay.indexOf(hour);
		const minuteIndex = minutesOfHour.indexOf(minute);
		return `${minuteIndex} ${hourIndex} * * ${dayIndex}`;
	}
	}
}

export function createCron(rate, exec) {
	cron.schedule(toCronExpression(rate), exec);
}