import { contract, notificationContract, types, requestContract } from "@hediet/typed-json-rpc";

export const keyboardContract = contract({
	client: {
		onKeyEvent: notificationContract({
			params: types.type({
				physicalKey: types.string,
				action: types.union([types.literal("pressed"), types.literal("released")]),
			}),
		}),
		selectNextKey: requestContract({
			result: types.type({
				physicalKey: types.string,
			}),
		}),
	},
	server: {
		authenticate: requestContract({
			params: types.type({
				secret: types.string,
			}),
		}),
	},
});
