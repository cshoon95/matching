import axios from 'axios';
import mc from '../core/Mc';
import { ValueType } from '../core/Mc';
class Server {
    public run(name: ValueType, isAsync: boolean = false) {
		const isSimple = isAsync;

		if(!isSimple){
			mc.showLoading();
		}

		axios.get('/dummy/' + name + '.json')
			.then((res) => {
				mc.hideLoading();

				console.log("서버에서 가져옴 ---------------------------------");
				console.log(res);
				console.log("서버에서 가져옴 끝 ---------------------------------");
				
				mc.setState(name, res);
			})
		
	}

};
export default new Server();