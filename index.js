import CONFIG from './lib/config/config'
import {initTimestap, getNanos, getSecounds} from './lib/time-stamp/initialTimestamp'
import {trackLeftClick, trackRightClick, trackUniqueClick, eventHandler} from './lib/events/click'
import {trackSwipeLeft, trackSwipeRight} from './lib/events/swipe'


class Options {
    constructor(opt) {
        this.url = opt.url;
        this.apiId = opt.apiKey
        this.channelID = opt.channelId
    }
    air_left (campaign, campaignID) {
        const obj = new Event('leftClick', campaign, campaignID, this.channelID, this.url, this.apiId)
        eventHandler(obj)
    }
    air_right (campaign, campaignID) {
        const obj = new Event('rightClick', campaign, campaignID, this.channelID, this.url, this.apiId)
        eventHandler(obj)
    }
    air_unique (campaign, campaignID) {
        const obj = new Event('uniqueClick', campaign, campaignID, this.channelID, this.url, this.apiId)
        eventHandler(obj)
    }
    air_swipeLeft (campaign, campaignID) {
        const obj = new Event('swipeLeft', campaign, campaignID, this.channelID, this.url, this.apiId)
        eventHandler(obj)
    }
    air_swipeRight (campaign, campaignID) {
        const obj = new Event('swipeRight', campaign, campaignID, this.channelID, this.url, this.apiId)
        eventHandler(obj)
    }
}
class Event {
    constructor(name, campaign, campaignId, channelID,url, apiId, nanos, seconds) {
        this.name = name
        this.campaign = campaign
        this.campaignId = campaignId
        this.nanos = getNanos()
        this.channelID = channelID
        this.url = url
        this.apiId = apiId
        this.seconds = getSecounds()
    }
}
export {Options  as default}
