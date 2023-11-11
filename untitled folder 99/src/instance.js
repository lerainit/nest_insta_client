import axios from 'axios';




const instance = axios.create({

    baseURL: `${process.env.REACT_APP_API_URL}`
    //baseURL: "https://social-network-backend-2782464b9c31.herokuapp.com"
    //baseURL: "http://localhost:9000"

})
/*instance.interceptors.response.use((r) => r,
    async function (error) {
        if(error.response.status === 401) {
            const refresh = JSON.parse(localStorage.getItem("refresh"))


            return await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/api/auth/token`,
                {refreshToken: refresh}
            ).then(({data}) => {
                if(data.accessToken == null){
                    axios.post(`${import.meta.env.VITE_APP_API_URL}/api/auth/renew`,{},{

                        params:{refresh:refresh},


                    }).catch(err =>{console.log(err)})
                }else{
                    localStorage.setItem("token", JSON.stringify(data.accessToken))}
            })
                .catch(err => {
                    console.log(err)
                    const refresh = JSON.parse(localStorage.getItem("refresh"))
                    axios.post(`${import.meta.env.VITE_APP_API_URL}/api/auth/renew`,{},{

                        params:{refresh:refresh},


                    }).catch(err =>{console.log(err)})
                });

        }
        return Promise.reject(error);




    }
)*/
instance.interceptors.request.use(config => {
    let accessToken = JSON.parse(localStorage.getItem('token'))
    if (accessToken) {
        config.headers = {
            'Content-Type': 'application/json',
            'AUTHORIZATION': `Bearer ${accessToken}`
        }

    }
    return config;
})

export default instance;
