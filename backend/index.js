import readXlsxFile from "read-excel-file/node";
import Product from "./productModel.js";

async function run() {
  try {
    const rows = await readXlsxFile("catalog.xlsx");
    const productsData = rows.slice(1).map((row) => {
      const price = parseFloat(row[2]);
      const rate = parseFloat(row[6]);

      return {
        id: row[0],
        title: row[1],
        price: isNaN(price) ? 0 : price,
        description: row[3],
        category: row[4],
        image: row[5],
        rating: {
          rate: isNaN(rate) ? 0 : rate,
        },
      };
    });

    await Product.deleteMany({});
    console.log("Removed existing data");

    await Product.insertMany(productsData);
    console.log("Data inserted");
  } catch (err) {
    console.error("Error:", err);
  }
}

run().catch(console.error);
