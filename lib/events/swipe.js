import {trackingEvents} from '../../lib/services/api'
import {initTimestap, getNanos, getSecounds} from '../../lib/time-stamp/initialTimestamp'

export {
    trackSwipeLeft,
    trackSwipeRight
}
function trackSwipeLeft (handler) {
    let url = `${handler.url}?api_key=${handler.apiId}`
    const trackObject = {
        channel:{
            channelId: `${handler.channelID}`
        },
        event:{
            name:`v-air#${handler.campaign}#${handler.campaignID}#${handler.name}`
        },
        sentTimestamp: {
            nanos: getNanos(),
            seconds: getSecounds()
        }
    }
    trackingEvents(url, trackObject)
}

function trackSwipeRight (url) {
    let url = `${handler.url}?api_key=${handler.apiId}`
    const trackObject = {
        channel:{
            channelId: `${handler.channelID}`
        },
        event:{
            name:`v-air#${handler.campaign}#${handler.campaignID}#${handler.name}`
        },
        sentTimestamp: {
            nanos: getNanos(),
            seconds: getSecounds()
        }
    }
    trackingEvents(url, trackObject)
}
