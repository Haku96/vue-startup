const isDebug = import.meta.env.MODE !== 'production';

export default ({ mock, setup }) => {
  if (mock !== false && isDebug) setup();
};

export const successResponseWrap = (data) => {
  return {
    ...data,
    status: 'ok',
    msg: '请求成功',
    code: 20000
  };
};

export const failResponseWrap = (data, msg, code = 50000) => {
  return {
    ...data,
    status: 'fail',
    msg,
    code
  };
};
