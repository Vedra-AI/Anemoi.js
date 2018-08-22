import CONFIG from './lib/config/config'
import {initTimestap, getNanos, getSecounds} from './lib/time-stamp/initialTimestamp'
import {trackLeftClick, trackRightClick, trackUniqueClick, eventHandler} from './lib/events/click'
import {trackSwipeLeft, trackSwipeRight} from './lib/events/swipe'



class Options {
    constructor(url, apiId, channelID) {
        this.url = url;
        this.apiId = apiId
        this.channelID = channelID
    }
    air_init () {
        CONFIG.url = this.url
        CONFIG.apiId = this.apiId
        CONFIG.channelID = this.channelID
    }
    air_left (campaign, campaignID) {
        CONFIG.initTimestap.nanos = getNanos()
        CONFIG.initTimestap.seconds = getSecounds()
        CONFIG.name = 'leftClick'
        CONFIG.campaign = campaign
        CONFIG.campaignID = campaignID
        eventHandler(CONFIG)
    }
    air_right (campaign, campaignID) {
        CONFIG.initTimestap.nanos = getNanos()
        CONFIG.initTimestap.seconds = getSecounds()
        CONFIG.name = 'rightClick'
        CONFIG.campaign = campaign
        CONFIG.campaignID = campaignID
        eventHandler(CONFIG)
    }
    air_unique (campaign, campaignID) {
        CONFIG.initTimestap.nanos = getNanos()
        CONFIG.initTimestap.seconds = getSecounds()
        CONFIG.name = 'uniqueClick'
        CONFIG.campaign = campaign
        CONFIG.campaignID = campaignID
        eventHandler(CONFIG)
    }
    air_swipeLeft (campaign, campaignID) {
        CONFIG.initTimestap.nanos = getNanos()
        CONFIG.initTimestap.seconds = getSecounds()
        CONFIG.name = 'swipeLeft'
        CONFIG.campaign = campaign
        CONFIG.campaignID = campaignID
        eventHandler(campaign, campaignID)
    }
    air_swipeRight (campaign, campaignID) {
        CONFIG.initTimestap.nanos = getNanos()
        CONFIG.initTimestap.seconds = getSecounds()
        CONFIG.name = 'swipeRight'
        CONFIG.campaign = campaign
        CONFIG.campaignID = campaignID
        eventHandler(campaign, campaignID)
    }
}

export {Options  as default}
