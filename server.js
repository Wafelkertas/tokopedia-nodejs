const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();
const app = express();

app.use(bodyParser.json());

const dataArray = {
  products: [
    {
      product: "laptop acer",
      harga: 18000000,
      lokasi: "Jakarta",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
    },
    {
      product: "mainan anak 1",
      harga: 50000,
      lokasi: "Tangerang",
      img:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-7856245/tokoluckystart_mainan_anak_mesin_whack_a_mole-_mainan_pukul_kepala_tupai_dan_bola_ada_musik_dan_lampu_2_in_1_full05_h5dddm9h.jpg",
    },
    {
      product: "mainan anak 2",
      harga: 60000,
      lokasi: "Jakarta",
      img:
        "https://dynamic.zacdn.com/Mop_m2AeREZ5GhuOfE19_T9ycZg=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/mell-chan-5015-2854842-1.jpg",
    },
    {
      product: "mainan anak 3",
      harga: 35000,
      lokasi: "Tangerang",
      img:
        "https://acosta.co.id/wp-content/uploads/2020/09/Mainan-Anak-Perempuan-Paling-Laris.jpg",
    },
    {
      product: "laptop",
      harga: 18000000,
      lokasi: "Jakarta",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
    },
    {
      product: "mainan anak 4",
      harga: 50000,
      lokasi: "Tangerang",
      img:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-7856245/tokoluckystart_mainan_anak_mesin_whack_a_mole-_mainan_pukul_kepala_tupai_dan_bola_ada_musik_dan_lampu_2_in_1_full05_h5dddm9h.jpg",
    },
    {
      product: "mainan anak 5",
      harga: 60000,
      lokasi: "Tangerang",
      img:
        "https://dynamic.zacdn.com/Mop_m2AeREZ5GhuOfE19_T9ycZg=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/mell-chan-5015-2854842-1.jpg",
    },
    {
      product: "mainan anak 6",
      harga: 35000,
      lokasi: "Bogor",
      img:
        "https://acosta.co.id/wp-content/uploads/2020/09/Mainan-Anak-Perempuan-Paling-Laris.jpg",
    },
  ],
  status: 200,
};

const data = (req, res) => {
  return res.send(dataArray).json();
};
app.use("/api", router.get("/products", data));

app.listen(process.env.PORT);
