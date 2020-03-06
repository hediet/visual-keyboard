```ts
const str = `ESC FK01 FK02 FK03 FK04 FK05 FK06 FK07 FK08 FK09 FK10 FK11 FK12 PRSC SCLK PAUS 
TLDE AE01 AE02 AE03 AE04 AE05 AE06 AE07 AE08 AE09 AE10 AE11 AE12 BKSP INS HOME PGUP NMLK KPDV KPMU KPSU 
TAB  AD01 AD02 AD03 AD04 AD05 AD06 AD07 AD08 AD09 AD10 AD11 AD12 BKSL DELE END PGDN KP7 KP8 KP9 KPAD 
CAPS AC01 AC02 AC03 AC04 AC05 AC06 AC07 AC08 AC09 AC10 AC11 RTRN                    KP4 KP5 KP6 
LFSH LSGT AB01 AB02 AB03 AB04 AB05 AB06 AB07 AB08 AB09 AB10 RTSH UP                      KP1 KP2 KP3 KPEN 
LCTL LWIN LALT SPCE RALT RWIN MENU RCTL LEFT DOWN RIGHT                             KP0 KPDL 
`;
const map = {} as any;

const parts = str.split(" ").filter(e => e.trim() !== "");
for (const key of keysSorted) {
	const name = parts.shift();
	this.map[key.scanCode.toString()] = name;
}
```

```ts
let i = 0;
this.activeKey = keysSorted[i].scanCode;
const map: Record<string, string> = {};

this.keyboard.onKeyPressed.sub(({ keyCodeName }) => {
	i++;
	map[keyCodeName] = this.activeKey!.toString();
	if (i === keysSorted.length) {
		console.log(JSON.stringify(map));
	} else {
		runInAction(() => {
			this.activeKey = keysSorted[i].scanCode;
		});
	}
});
```
