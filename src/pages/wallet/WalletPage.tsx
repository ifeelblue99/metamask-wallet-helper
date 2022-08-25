import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChainID } from "../../utils/metamask";
import { Header } from "../../components/header/Header";
import shortenString from "../../utils/shortenString";
import { ethers, utils } from "ethers";
import marketDataProp, { MarketDataLoadingStyle } from "../../utils/props/marketDataProp";
import { MarketDataComponent } from "../../components/market-data/MarketDataComponent";
import getMArketData, { MarketDataInterface } from "../../services/getMarketData";
import React from "react";
import { ExchangesHolder } from "../../components/exchanges/ExchangesHolder";

function WalletPage() {
  const nav = useNavigate();
  const [walletAddress, setWalletAddress] = useState(window.location.pathname.split("w=")[1])
  const [headerData, setHeaderData] = useState([
    { title: "wallet", content: "none" },
    { title: "Network", content: "none" },
    { title: "Gas fee", content: "none" },
  ]);
  const [marketData, setMarketData] = useState(
    {
      style: MarketDataLoadingStyle.Loading,
      data: {
        coins_count: 0,
        active_markets: 0,
        total_mcap: 0,
        total_volume: 0,
        btc_d: "",
        eth_d: "",
        mcap_change: "",
        volume_change: "",
        avg_change_percent: "",
        volume_ath: 0,
        mcap_ath: 0
      }
    }
  )

  useEffect(() => {
    if (
      walletAddress === undefined ||
      walletAddress.length !== 42 ||
      walletAddress[0] !== "0" ||
      walletAddress[1] !== "x"
    ) {
      nav("/");
    }
    if (headerData[2].content === "none") {
      getGasFee().then((fee) => {
        setHeaderData([
          { title: "wallet", content: shortenString(walletAddress, 10, "...") },
          { title: "Network", content: getChainID().chainID || "none" },
          { title: "Gas fee", content: `${fee} gwei` },
        ]);
      });
      if (marketData.data.active_markets === 0) {
        getMArketData().then(result => {
          if (result !== null) {
            setMarketData({
              style: MarketDataLoadingStyle.Loaded,
              data: result
            })
          }
        })
      }
    }


    async function initWeb3() {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum);
        setChainListener(window.ethereum);
        setAccountsListener(window.ethereum)
      } catch (error: any) {
        console.log(error);

      }
    }
    initWeb3();
    return () => {
      removeChainListener(window.ethereum)
      removeAccountListener(window.ethereum)
    };
    // ETHERSCAN PRO APİ NEEDED!
    // else {
    //   const url: ERCTokenRequestUrl = {
    //     baseUrl: BASE_URL,
    //     module: "account",
    //     action: TokenType.ERC20,
    //     address: walletAddress,
    //     page: 1,
    //     offset: 100,
    //     apiKey: ETHERSCAN_API_KEY
    //   }
    //   getOwnedTokens(url)
    // }
  });

  const getGasFee = React.useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const fee = await provider.getGasPrice();
    const inGwei = utils.formatUnits(fee, "gwei");
    return inGwei
  }, [])

  const setChainListener = (ethereum: any) => {
    ethereum.on("chainChanged", pageReload);
  };
  const setAccountsListener = (ethereum: any) => {
    ethereum.on("accountsChanged", navigateHome)
  };
  const removeChainListener = (ethereum: any) => {
    ethereum.removeListener("chainChanged", pageReload);
  };
  const removeAccountListener = (ethereum: any) => {
    ethereum.removeListener("accountsChanged", navigateHome);
  };
  function pageReload() {
    window.location.reload();
  }
  function navigateHome() {
    console.log("disconnected");
    nav("/")
  }

  console.log("page render");

  return (
    <div className="wallet-page">
      <Header data={headerData} />
      <main>
        <MarketDataComponent style={marketData.style} data={marketData.data} />
        <ExchangesHolder />
      </main>
    </div>
  );
}

export default WalletPage;
