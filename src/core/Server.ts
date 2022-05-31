import React from 'react';
import axios from 'axios';
import Progress from '../module/Progress';
import mc from '../core/Mc';
class Server {
    private initAxios = () => {
        return axios.create({
            responseType: "json"
        });
    };
    private axios = this.initAxios();

    public run(args:any, isAsync: boolean = false) {
		const isSimple = isAsync;

		if(!isSimple){
			mc.showLoading('sh')
		}

		return new Promise(async (resolve, reject)=> {
			const res: IGetType = await this.post(runInfo);
			if (res.errorCode || res.isErrorCheck) {
				reject(res);
			} else {
				resolve(res);
			}

			mc.hideLoading();
		});

	}

};
export default new Server();