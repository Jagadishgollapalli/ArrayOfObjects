Input
--
Suppose updatedTableData is an array of products like this:
[
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 }
]

Output
--
After running the reduce function, updatedTableDataArray would become:
{
  1: { id: 1, name: "Product A", price: 10 },
  2: { id: 2, name: "Product B", price: 20 },
  3: { id: 3, name: "Product C", price: 30 }
}

Each product is now stored by its id, allowing you to quickly access or update any product by its id.
  
-- 
Function :
const updatedTableDataArray = updatedTableData.reduce((acc, prod) => {
  acc[prod.id] = prod;
  return acc;
}, {});
