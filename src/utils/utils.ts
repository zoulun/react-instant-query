/**
 * 防抖函数
 * @param params
 * @param fn
 * @param delay
 */
let timer: any = null;
export const debounce = (fn: Function, delay: number) => {
  clearTimeout(timer);
  timer = setTimeout(function () {
    fn();
  }, delay);
};

/**
 * 数字校验
 * @param str
 * @returns
 */
export const checkNumber = (str: string): Boolean => {
  const reg = /^\d*$/g;
  return reg.test(str);
};

export const joinParams = (data: any): string => {
  let str: string = '';
  for (const key in data) {
    const e = data[key];
    str = `${key}=${e}`;
  }
  return str;
};
