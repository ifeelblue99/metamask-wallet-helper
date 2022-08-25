import "./styles.css"
import { isMetamaskExist, ResponseMSG } from "../../utils/metamask"
import DevInfo from "../../components/dev-info/DevInfo"
import OrangeBtn from "../../components/button/orange/OrangeBtn"
import DisabledBtn from "../../components/button/disabled/DisabledBtn"
import { ResponseObj, getWalletAddress, getChainID } from "../../utils/metamask"
import AlertBox from "../../components/alert-box/AlertBox"
import { Alert } from "../../utils/props/alertBoxProp"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()
    const [errorMSG, setErrorMSG] = useState("Error")
    const [showError, setShowError] = useState<boolean>(false)

    function getMetamask(): void {
        getWalletAddress().then((res: ResponseObj) => {
            console.log(res)
            if (res.result === ResponseMSG.ERROR) {
                setErrorMSG(res.msg.toString())
                setShowError(true)
            } else {
                navigate("/wallet/w=" + res.msg[0])
            }
        })
    }
    return (
        <div className="login-page">
            {showError && <AlertBox message={errorMSG} click={() => setShowError(false)} type={Alert.Error} />}
            <div className="login-section">
                <h2> Connect Your MetaMask Wallet</h2>
                {isMetamaskExist() ? <OrangeBtn click={getMetamask} message="Connect" /> : <DisabledBtn message="You need MetaMask" />}
                <DevInfo />
            </div>
        </div>
    )

}

export default LoginPage