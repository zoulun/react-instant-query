import axios from 'axios';
import {
  RequestInterface,
  RequestGetInterface,
} from 'interface/requestInterface';
import { joinParams } from 'src/utils/utils';

export const httpRequest = (params: RequestInterface) => {
  const { method = 'get', url, data } = params;
  axios({
    method,
    url,
    data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export async function getRequest(params: RequestGetInterface) {
  const { url, data } = params;
  const str = joinParams(data);
  const res = await axios.get(`${url}?${str}`);
  return res.data;
}
