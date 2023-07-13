import { AxiosResponse } from 'axios';
import { AxiosResponseStatus } from '../../constants/global.constant';
import { Country } from '../../models/common/Location.model';
import { getAsync } from '../../utils/HttpClient.util';

class UtilService {
  getLatLon = async (key: string): Promise<AxiosResponseStatus<any>> => {
    var url = ``;
    return await getAsync(url, undefined, false, false, true);
  };

  getAllCountriesAsync = async (): Promise<AxiosResponse<Country>> => {
    var url = '';
    return await getAsync(url, undefined, false, false, false);
  };
}

export default new UtilService();
