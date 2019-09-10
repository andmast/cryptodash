import React from "react";

export default function({ coin, style }) {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { Height: "50 px" }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
