import axios from 'axios'
import CONFIG from '../../lib/config/config'


export {
    trackingEvents
}

function trackingEvents (url, trackObject) {
    axios.post(url, trackObject).then(res =>{
        
         CONFIG.apiCookie = res.data.userId
    })
}
