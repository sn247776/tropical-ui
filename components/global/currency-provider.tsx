"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number; // THB price
  currency?: "THB" | "USD" | "EUR" | "INR";
};

export default function CurrencyProvider({
  price,
  currency = "THB",
}: Props) {
  const [rates, setRates] = useState({
    THB: 1,
    USD: 0,
    EUR: 0,
    INR: 0,
  });

  useEffect(() => {
    async function loadRates() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/THB");
        const data = await res.json();

        setRates({
          THB: 1,
          USD: data.rates.USD,
          EUR: data.rates.EUR,
          INR: data.rates.INR,
        });
      } catch (err) {
        console.error(err);
      }
    }

    loadRates();
  }, []);

  const convertedPrice = price * rates[currency];

  const symbols = {
    THB: "฿",
    USD: "$",
    EUR: "€",
    INR: "₹",
  };

  return (
    <span>
      {symbols[currency]}
      {" "}
      {convertedPrice.toLocaleString()}
    </span>
  );
}