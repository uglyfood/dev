const mint = async () => {
    const klaytn = window.klaytn;
    const accounts = await klaytn.enable();
    const account = accounts[0];
    console.log(account);
  
    // Mint
  
    const transactionParameter = {
      gas: "0x3476A",
      to: "",//"0x0B97f8f1d6736cc8DDFF83f302B42eF4F1f3DC20", // NFT address
      from: account,
      value: "", //"0xB1A2BC2EC50000",
      data: ""
        //"0xa0712d680000000000000000000000000000000000000000000000000000000000000001"
    };
  
    klaytn.sendAsync(
      {
        method: "klay_sendTransaction",
        params: [transactionParameter],
        from: ""
      },
      (receipt) => {
        console.log(JSON.stringify(receipt));
        alert("트랜젝션 전송 완료");
      }
    );
  };

  export default mint;
