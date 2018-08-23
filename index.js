import CONFIG from './lib/config/config'
import {initTimestap, getNanos, getSecounds} from './lib/time-stamp/initialTimestamp'
import {trackLeftClick, trackRightClick, trackUniqueClick, eventHandler} from './lib/events/click'


class Options {
    constructor(opt) {
        this.url = opt.url;
        this.apiId = opt.apiKey
        this.channelID = opt.channelId
    }
    air_left (campaign, campaignID) {

        new EventHandler('leftClick', campaign, campaignID, this.channelID, this.url, this.apiId)

    }
    air_right (campaign, campaignID) {

        new EventHandler('rightClick', campaign, campaignID, this.channelID, this.url, this.apiId)

    }
    air_unique (campaign, campaignID) {

        new EventHandler('uniqueClick', campaign, campaignID, this.channelID, this.url, this.apiId)

    }
    air_swipeLeft (campaign, campaignID) {

        new EventHandler('swipeLeft', campaign, campaignID, this.channelID, this.url, this.apiId)

    }
    air_swipeRight (campaign, campaignID) {

        new EventHandler('swipeRight', campaign, campaignID, this.channelID, this.url, this.apiId)

    }
}
class EventHandler {
    constructor(name, campaign, campaignId, channelID,url, apiId, nanos, seconds) {
        this.name = name
        this.campaign = campaign
        this.campaignId = campaignId
        this.nanos = getNanos()
        this.channelID = channelID
        this.url = url
        this.apiId = apiId
        this.seconds = getSecounds()
        this.initEventHandler()
    }
    initEventHandler () {
        eventHandler(this)
    }
}

export {Options  as default}
