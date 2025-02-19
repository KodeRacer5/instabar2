import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type StockItem = Database['public']['Tables']['stock_items']['Row'];

export function useStockItems() {
  const [items, setItems] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStockItems() {
      try {
        const { data, error } = await supabase
          .from('stock_items')
          .select('*')
          .order('name');

        if (error) throw error;
        setItems(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchStockItems();

    // Subscribe to changes
    const subscription = supabase
      .channel('stock_items_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'stock_items' 
        }, 
        () => {
          fetchStockItems();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { items, loading, error };
}