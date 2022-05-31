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

    public run(name: string, isAsync: boolean = false) {
		const isSimple = isAsync;

		axios.get('/dummy/' + name + '.json')
			.then((res) => {
				console.log(res);
			})

		if(!isSimple){
			mc.showLoading();
		}

		return new Promise(async (resolve, reject)=> {
			mc.hideLoading();
		});

	}

};
export default new Server();