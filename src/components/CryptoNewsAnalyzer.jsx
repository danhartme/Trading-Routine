<<<<<<< Tabnine <<<<<<<
import React, { useState, useEffect } from 'react';//-
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';//-
import { AlertCircle, TrendingUp, TrendingDown, CircleDot } from 'lucide-react';//-
import React, { useState } from 'react';//+
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';//+
import { AlertCircle, TrendingUp, CircleDot } from 'lucide-react';//+
//+
// ... rest of the component code remains the same//+
>>>>>>> Tabnine >>>>>>>// {"source":"chat"}

const CryptoNewsAnalyzer = () => {
  const [news, setNews] = useState([
    {
      source: "CoinDesk",
      title: "Bitcoin ETF Approval Causes Market Surge",
      impact: "high",
      analysis: "Highly bullish - Institutional adoption increasing",
      sentiment: "positive",
      time: "2024-03-15 09:30",
      price_impact: "+5.2%"
    },
    {
      source: "Regulatory News",
      title: "SEC Announces New Crypto Regulations",
      impact: "high",
      analysis: "Mixed impact - Short-term uncertainty, long-term stability",
      sentiment: "neutral",
      time: "2024-03-15 10:15",
      price_impact: "-2.1%"
    },
    {
      source: "Cointelegraph",
      title: "Major Bank Launches Crypto Trading",
      impact: "medium",
      analysis: "Bullish - Increased institutional adoption",
      sentiment: "positive",
      time: "2024-03-15 11:00",
      price_impact: "+1.8%"
    }
  ]);

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'high': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'medium': return <TrendingUp className="w-5 h-5 text-yellow-500" />;
      default: return <CircleDot className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Trading Session News Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-700 font-semibold">Positive Impact</div>
                <div className="text-2xl font-bold">2</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-red-700 font-semibold">Negative Impact</div>
                <div className="text-2xl font-bold">1</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-semibold">Overall Sentiment</div>
                <div className="text-2xl font-bold">Bullish</div>
              </div>
            </div>

            {/* News Feed */}
            <div className="space-y-4">
              {news.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getImpactIcon(item.impact)}
                      <span className="font-semibold text-gray-500">{item.source}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.analysis}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`font-medium ${getSentimentColor(item.sentiment)}`}>
                      Price Impact: {item.price_impact}
                    </span>
                    <span className="text-sm text-gray-500">
                      Impact Level: {item.impact.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CryptoNewsAnalyzer;
