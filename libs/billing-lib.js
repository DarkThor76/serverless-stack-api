export function calculateCost(storage) {
	// less than 10 notes is $4 per note
	// 11 to 100 notes is $2 per note
	// more than 100 is $1 per note
	const rate = storage <= 10
		? 4
		: storage <= 100
			? 2
			: 1;
	return rate * storage * 100;
}