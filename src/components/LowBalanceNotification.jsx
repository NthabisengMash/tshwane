import React from "react";
import { useCardPoints } from "../context/CardPointsContext";

export default function LowBalanceNotification() {
  const { lowBalance } = useCardPoints();

  if (!lowBalance) return null;

  return (
    <div className="p-3 mb-4 bg-yellow-200 text-yellow-800 rounded shadow">
      ⚠️ Your card balance is low. Please top up soon.
    </div>
  );
}
