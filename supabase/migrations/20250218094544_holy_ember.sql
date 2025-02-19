/*
  # Add test data for stock items

  1. Test Data
    - Adds sample stock items for testing the connection
    - Includes various categories and price points
    - Sets realistic quantities and SKUs
*/

INSERT INTO stock_items (name, sku, description, quantity, price, category)
VALUES
  ('Insta-Bar Standard Kit', 'IB-STD-001', 'Complete verification kit with 28 surgical-grade steel links', 50, 1399.99, 'Kits'),
  ('Digital Bundle Pro', 'IB-DIG-001', 'Digital workflow bundle with CAD/CAM integration', 25, 1599.99, 'Digital Solutions'),
  ('Premium Link Set', 'IB-LNK-001', 'Set of 84 premium stainless steel links', 100, 499.99, 'Components'),
  ('Verification Scanner', 'IB-SCN-001', 'High-precision digital verification scanner', 15, 2499.99, 'Equipment'),
  ('Training Package', 'IB-TRN-001', 'Comprehensive training program for dental professionals', 30, 799.99, 'Training');