import Mock from 'mockjs';
import setupMock, { successResponseWrap, failResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 50000);
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 50000);
      }
      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('userRole', 'admin');
        return successResponseWrap({
          token: 'Token'
        });
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('userRole', 'user');
        return successResponseWrap({
          token: 'Token'
        });
      }
      return failResponseWrap(null, '账号或者密码错误', 50000);
    });

    // 退出登录
    Mock.mock(new RegExp('/api/user/logout'), () => {
      return successResponseWrap(null);
    });
  }
});
