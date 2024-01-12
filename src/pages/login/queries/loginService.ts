import { client } from '../../../utils/apis/axios';
import { LoginProps } from '../types/loginType';

const loginService = async ({ authorizationCode, socialType }: LoginProps) => {
  try {
    const { data } = await client.post(`/api/user/login?authorizationCode=?${authorizationCode}`, {
      socialType,
    });
    console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
  } catch (e) {
    console.error(e);
  }
};

export default loginService;
