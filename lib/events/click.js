import {trackingEvents} from '../../lib/services/api'
import CONFIG from '../../lib/config/config'
import {initTimestap, getNanos, getSecounds} from '../../lib/time-stamp/initialTimestamp'
import {checkForAdds, getDocumentCookies, isTracking, getLocale, getLocation, getTimezone, checkUserAgent} from '../../lib/browser/browser'
import {getPath, getReferrer, getSearch, getTitle, getUrl} from '../../lib/browser/location'
export {eventHandler}

function eventHandler (handler) {
    let url = `${handler.url}?api_key=${handler.apiId}`
    const trackObject = {
        anonymous_id: CONFIG.apiCookie,
        context: {
            channel:{
                channel_id: `${handler.channelID}`
            },
            browser: {
                adBlock: checkForAdds(),
                cookies: getDocumentCookies(),
                do_not_track: isTracking(),
                locale: getLocale(),
                location: {
                    path: getPath(),
                    referrer: getReferrer(),
                    search: getSearch(),
                    title: getTitle(),
                    url: getUrl()
                },
                timezone: getTimezone(),
                user_agent: checkUserAgent()
            },
            sdk: {
                name: CONFIG.sdk.name,
                version: CONFIG.sdk.version
            }
        },
        initialTimestamp: {
            nanos: handler.nanos,
            seconds: handler.seconds,
        },
        event:{
            name:`v-air#${handler.campaign}#${handler.campaignId}#${handler.name}`
        },
        sent_timestamp: {
            nanos: getNanos(),
            seconds: getSecounds()
        }
    }
    trackingEvents(url, trackObject)
}
//currencey they will need to send us

// name of a button or a product v-air camapign nameOf

// revenue the amount product

// value number



// initTimestap init of the click or swipe

//vair#CAMPAIGNID#CARDID#EVENTNAME
