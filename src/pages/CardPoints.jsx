import React from "react";
import TopUpCard from "../components/TopUpCard";
import SelectLocation from "../components/SelectLocation";
import LowBalanceNotification from "../components/LowBalanceNotification";
import { CardPointsProvider } from "../context/CardPointsContext";
import PointsHistory from "../components/PointsHistory";

export default function CardPoints() {
  return (
    <CardPointsProvider>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Card Points System</h1>
        <LowBalanceNotification />
        <TopUpCard />
        <SelectLocation />
        <PointsHistory />
    
      </div>
    </CardPointsProvider>
  );
}
