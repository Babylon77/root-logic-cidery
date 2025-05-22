'use client'

import { useState, useEffect } from 'react'

interface DashboardProps {
  results: {
    annualRevenue: number;
    annualExpenses: number;
    annualProfit: number;
    roi: number;
    annualFixedCosts: number;
    directSalesRevenue: number;
    wholesaleRevenue: number;
    laborExpenses: number;
    monthlyMortgage: number;
    distributionCosts: number;
    packagingCosts: number;
    exciseTax: number;
    ciderGallons: number;
    profitPerPint: number;
  }
}

export default function BusinessDashboard({ results }: DashboardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  const formatPercent = (value: number) => {
    return `${value}%`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-800 text-white p-4">
        <h3 className="text-xl font-bold">Financial Dashboard</h3>
        <p className="text-sm opacity-80">Based on current slider settings</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-y divide-gray-200">
        {/* Revenue Metrics */}
        <div className="p-4 bg-gray-50">
          <h4 className="text-base font-semibold text-gray-700 mb-4">Revenue</h4>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Annual Revenue</span>
                <span className="text-base font-bold text-green-700">{formatCurrency(results.annualRevenue)}</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 mt-1 rounded-full">
                <div 
                  className="bg-green-500 h-1.5 rounded-full" 
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">Direct Sales</span>
                <p className="text-sm font-medium">{formatCurrency(results.directSalesRevenue)}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Wholesale</span>
                <p className="text-sm font-medium">{formatCurrency(results.wholesaleRevenue)}</p>
              </div>
            </div>
            
            <div>
              <span className="text-xs text-gray-500">Production Volume</span>
              <p className="text-sm font-medium">{formatNumber(results.ciderGallons)} gallons</p>
            </div>
          </div>
        </div>
        
        {/* Expense Metrics */}
        <div className="p-4">
          <h4 className="text-base font-semibold text-gray-700 mb-4">Expenses</h4>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Annual Expenses</span>
                <span className="text-base font-bold text-red-700">{formatCurrency(results.annualExpenses)}</span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 mt-1 rounded-full">
                <div 
                  className="bg-red-500 h-1.5 rounded-full" 
                  style={{ width: `${Math.min(100, (results.annualExpenses / results.annualRevenue) * 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">Fixed Costs</span>
                <p className="text-sm font-medium">{formatCurrency(results.annualFixedCosts)}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Labor</span>
                <p className="text-sm font-medium">{formatCurrency(results.laborExpenses)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">Mortgage (Monthly)</span>
                <p className="text-sm font-medium">{formatCurrency(results.monthlyMortgage)}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Distribution</span>
                <p className="text-sm font-medium">{formatCurrency(results.distributionCosts)}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profit Metrics */}
        <div className="p-4 bg-gray-50">
          <h4 className="text-base font-semibold text-gray-700 mb-4">Profitability</h4>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Annual Profit</span>
                <span className={`text-base font-bold ${results.annualProfit >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                  {formatCurrency(results.annualProfit)}
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 mt-1 rounded-full">
                <div 
                  className={`${results.annualProfit >= 0 ? 'bg-emerald-500' : 'bg-red-500'} h-1.5 rounded-full`} 
                  style={{ width: `${Math.min(100, Math.abs(results.annualProfit / results.annualRevenue) * 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-xs text-gray-500">ROI</span>
                <p className="text-sm font-medium">{formatPercent(results.roi)}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Profit Per Pint</span>
                <p className="text-sm font-medium">{formatCurrency(results.profitPerPint)}</p>
              </div>
            </div>
            
            <div>
              <span className="text-xs text-gray-500">Profit Margin</span>
              <p className="text-sm font-medium">
                {formatPercent(Math.round((results.annualProfit / results.annualRevenue) * 100))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 