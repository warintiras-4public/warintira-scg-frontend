import axios from 'axios'

class ApiService {
    static async getAbc() {
                const res = await axios.get("http://localhost:3000/api/abc");
                const data = res.data;
                return data;
        

        // return new Promise(async(resolve, reject) => {
        //     try {
        //         const res = await axios.get("http://localhost:3000/api/abc");
        //         const data = res.data;
        //         return data;
        //         // resolve(
        //             // data.map(item => ({
        //                 // ...item
        //             // }))
        //         // );
        //     } catch(err) {
        //         reject(err);
        //     }
        // });
    }
}

export default ApiService;