import "./styles.css"
import React from 'react'
import { ExchangeInterface } from "../../../services/getExchange"
import convertNumbersIntoStrings from "../../../utils/convertNumbersIntoStrings"
import checkEmptyValues from "../../../utils/checkEmptyValues"
import SocialMedia, { SocialMediaInterface, SocialMediaPlatform } from "./social-media-data-field/SocialMediaDataField"

export const ExchangeInfo = React
    .memo<ExchangeInterface>(({ name, year_established,
        country, description, url, image, facebook_url,
        reddit_url, telegram_url, slack_url, other_url_1,
        other_url_2, twitter_handle,
        has_trading_incentive, centralized,
        public_notice, alert_notice, trust_score,
        trust_score_rank, trade_volume_24h_btc,
        trade_volume_24h_btc_normalized }) => {

        const emptyDataMsg = "none"
        const checkEmptyDataFunctionCreator = React.useCallback(() => checkEmptyValues(true, true, emptyDataMsg), [emptyDataMsg])
        const checkEmpty = checkEmptyDataFunctionCreator()

        return (
            <div className="exchange-info">
                <h2>Exchange: {name}</h2>
                <div id="exchange-info-container">
                    <div id="exchange-info-name"
                        className="exchange-info-fields">
                        <span>Name</span>
                        <div>
                            <img src={image} alt="icon" />
                            <span>{name}</span>
                            <span>{"(" + checkEmpty(year_established) + "-" + checkEmpty(country) + ")"}</span>
                        </div>                    </div>
                    <div id="exchange-info-social"
                        className="exchange-info-fields">
                        <span>Social</span>
                        <div>
                            <SocialMedia
                                link={facebook_url}
                                name="Facebook"
                                platform={SocialMediaPlatform.Facebook}
                            />
                            <SocialMedia
                                link={reddit_url}
                                name="Reddit"
                                platform={SocialMediaPlatform.Reddit}
                            />
                            <SocialMedia
                                link={telegram_url}
                                name="Telegram"
                                platform={SocialMediaPlatform.Telegram}
                            />
                            <SocialMedia
                                link={slack_url}
                                name="Slack"
                                platform={SocialMediaPlatform.Slack}
                            />
                            <SocialMedia
                                link={twitter_handle}
                                name="Twitter"
                                platform={SocialMediaPlatform.Twitter}
                            />
                        </div>
                    </div>
                    <div id="exchange-info-status"
                        className="exchange-info-fields">
                        <span>Status</span>
                        <div>
                            <div className="status-field">
                                <span>Rank</span>
                                <span>{"#" + checkEmpty(trust_score_rank)}</span>
                            </div>
                            <div className="status-field">
                                <span>Trust Score</span>
                                <span>{checkEmpty(trust_score)}</span>
                            </div>
                        </div>
                    </div>
                    <div id="exchange-info-trade"
                        className="exchange-info-fields">
                        <span>Trade</span>
                        <div>
                            <span>Trade vol. 24H</span>
                            <span>{trade_volume_24h_btc === 0 ? "No Data" : convertNumbersIntoStrings(trade_volume_24h_btc) + " BTC"}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, (prev, curr) => {
        if (prev.name !== curr.name) {
            return false
        } else {
            return true
        }
    })
