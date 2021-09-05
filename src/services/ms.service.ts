import _ms from 'ms';


export const ms = (arg: number | string | any) => {
  if (typeof arg == 'number') return arg;
  if (typeof arg == 'string') return _ms(arg);
  console.warn(`Unable to parse ms:[${arg}]. Returning 0 instead.`);
  return 0;
};
