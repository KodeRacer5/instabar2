import React from 'react';
import { Package, AlertCircle, Loader } from 'lucide-react';
import { useStockItems } from '../hooks/useStockItems';

const StockList = () => {
  const { items, loading, error } = useStockItems();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader className="w-6 h-6 text-primary animate-spin" />
        <span className="ml-2 text-text-muted">Loading stock items...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-accent">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>Error loading stock items. Please try again later.</span>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-center p-8">
        <Package className="w-12 h-12 text-text-muted mx-auto mb-4" />
        <p className="text-text-muted">No stock items found</p>
      </div>
    );
  }

  return (
    <div className="bg-background-dark rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-background rounded-lg p-6 border border-text-muted/10 hover:border-primary/50 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-text-light group-hover:text-primary transition-colors">{item.name}</h3>
              <span className="text-sm text-text-muted">{item.sku}</span>
            </div>
            {item.description && (
              <p className="text-text-muted mb-4 text-sm">{item.description}</p>
            )}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-text-muted">Quantity</p>
                <p className="text-lg font-semibold text-text-light">{item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Price</p>
                <p className="text-lg font-semibold text-primary">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
            {item.category && (
              <div className="mt-4 inline-block px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-sm text-primary">{item.category}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};