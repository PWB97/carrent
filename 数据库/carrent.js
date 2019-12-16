/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40003
 Source Host           : localhost:27017
 Source Schema         : carrent

 Target Server Type    : MongoDB
 Target Server Version : 40003
 File Encoding         : 65001

 Date: 15/06/2019 09:58:38
*/


// ----------------------------
// Collection structure for car
// ----------------------------
db.getCollection("car").drop();
db.createCollection("car");

// ----------------------------
// Documents of car
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("car").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a8"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd24cc42a142608e58dd8a5")),
    carType: DBRef("carType", ObjectId("5cd24cc42a142608e58dd8a6")),
    location: DBRef("location", ObjectId("5cd24cc42a142608e58dd8a4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8b0"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd24cd22a142608e58dd8ad")),
    carType: DBRef("carType", ObjectId("5cd24cd22a142608e58dd8ae")),
    location: DBRef("location", ObjectId("5cd24cd22a142608e58dd8ac")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4d1"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cd24d882a142608edaaf4ce")),
    carType: DBRef("carType", ObjectId("5cd24d882a142608edaaf4cf")),
    location: DBRef("location", ObjectId("5cd24d882a142608edaaf4cd")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e8"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd3989e80981016cb69d3e5")),
    carType: DBRef("carType", ObjectId("5cd3989e80981016cb69d3e6")),
    location: DBRef("location", ObjectId("5cd3989e80981016cb69d3e4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3f0"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cd398a180981016cb69d3ed")),
    carType: DBRef("carType", ObjectId("5cd398a180981016cb69d3ee")),
    location: DBRef("location", ObjectId("5cd398a180981016cb69d3ec")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f7"),
    carid: NumberInt("1967"),
    carname: "沃尔沃S90",
    brandid: NumberInt("70"),
    price: "687.00",
    carBrand: DBRef("carBrand", ObjectId("5cd398a480981016cb69d3f4")),
    carType: DBRef("carType", ObjectId("5cd398a480981016cb69d3f5")),
    location: DBRef("location", ObjectId("5cd398a480981016cb69d3f3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3fe"),
    carid: NumberInt("1967"),
    carname: "沃尔沃S90",
    brandid: NumberInt("70"),
    price: "687.00",
    carBrand: DBRef("carBrand", ObjectId("5cd398a980981016cb69d3fb")),
    carType: DBRef("carType", ObjectId("5cd398a980981016cb69d3fc")),
    location: DBRef("location", ObjectId("5cd398a980981016cb69d3fa")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d405"),
    carid: NumberInt("562"),
    carname: "途观",
    brandid: NumberInt("1"),
    price: "409.00",
    carBrand: DBRef("carBrand", ObjectId("5cd398ac80981016cb69d402")),
    carType: DBRef("carType", ObjectId("5cd398ac80981016cb69d403")),
    location: DBRef("location", ObjectId("5cd398ac80981016cb69d401")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd398b080981016cb69d40c"),
    carid: NumberInt("2086"),
    carname: "迈锐宝",
    brandid: NumberInt("71"),
    price: "268.00",
    carBrand: DBRef("carBrand", ObjectId("5cd398b080981016cb69d409")),
    carType: DBRef("carType", ObjectId("5cd398b080981016cb69d40a")),
    location: DBRef("location", ObjectId("5cd398b080981016cb69d408")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bcb"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd41dd41fe8481c87d78bc8")),
    carType: DBRef("carType", ObjectId("5cd41dd41fe8481c87d78bc9")),
    location: DBRef("location", ObjectId("5cd41dd41fe8481c87d78bc7")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc47"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4df001fe84820a077cc44")),
    carType: DBRef("carType", ObjectId("5cd4df001fe84820a077cc45")),
    location: DBRef("location", ObjectId("5cd4df001fe84820a077cc43")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e6"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4df6d1fe84820b591d9e3")),
    carType: DBRef("carType", ObjectId("5cd4df6d1fe84820b591d9e4")),
    location: DBRef("location", ObjectId("5cd4df6d1fe84820b591d9e2")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf75463"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4dfb41fe84820bbf75460")),
    carType: DBRef("carType", ObjectId("5cd4dfb41fe84820bbf75461")),
    location: DBRef("location", ObjectId("5cd4dfb41fe84820bbf7545f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02dd"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e1981fe84820fa4c02da")),
    carType: DBRef("carType", ObjectId("5cd4e1981fe84820fa4c02db")),
    location: DBRef("location", ObjectId("5cd4e1981fe84820fa4c02d9")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e5"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e1a11fe84820fa4c02e2")),
    carType: DBRef("carType", ObjectId("5cd4e1a11fe84820fa4c02e3")),
    location: DBRef("location", ObjectId("5cd4e1a11fe84820fa4c02e1")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02ec"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e1a11fe84820fa4c02e9")),
    carType: DBRef("carType", ObjectId("5cd4e1a11fe84820fa4c02ea")),
    location: DBRef("location", ObjectId("5cd4e1a11fe84820fa4c02e8")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02f3"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e1a91fe84820fa4c02f0")),
    carType: DBRef("carType", ObjectId("5cd4e1a91fe84820fa4c02f1")),
    location: DBRef("location", ObjectId("5cd4e1a91fe84820fa4c02ef")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02fb"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e1c61fe84820fa4c02f8")),
    carType: DBRef("carType", ObjectId("5cd4e1c61fe84820fa4c02f9")),
    location: DBRef("location", ObjectId("5cd4e1c61fe84820fa4c02f7")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa023"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e25a1fe8482102bfa020")),
    carType: DBRef("carType", ObjectId("5cd4e25a1fe8482102bfa021")),
    location: DBRef("location", ObjectId("5cd4e25a1fe8482102bfa01f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47f"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e3181fe8482110d6f47c")),
    carType: DBRef("carType", ObjectId("5cd4e3181fe8482110d6f47d")),
    location: DBRef("location", ObjectId("5cd4e3181fe8482110d6f47b")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234cae"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e34c1fe8482114234cab")),
    carType: DBRef("carType", ObjectId("5cd4e34c1fe8482114234cac")),
    location: DBRef("location", ObjectId("5cd4e34c1fe8482114234caa")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95e4"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e3f31fe8482126ac95e1")),
    carType: DBRef("carType", ObjectId("5cd4e3f31fe8482126ac95e2")),
    location: DBRef("location", ObjectId("5cd4e3f31fe8482126ac95e0")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c7"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e43c1fe848212f6484c4")),
    carType: DBRef("carType", ObjectId("5cd4e43c1fe848212f6484c5")),
    location: DBRef("location", ObjectId("5cd4e43c1fe848212f6484c3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a726a"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e4581fe84821339a7267")),
    carType: DBRef("carType", ObjectId("5cd4e4581fe84821339a7268")),
    location: DBRef("location", ObjectId("5cd4e4581fe84821339a7266")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef1a"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd4e5651fe8482147a6ef17")),
    carType: DBRef("carType", ObjectId("5cd4e5651fe8482147a6ef18")),
    location: DBRef("location", ObjectId("5cd4e5651fe8482147a6ef16")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a7"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd677858692d402fa0bb5a4")),
    carType: DBRef("carType", ObjectId("5cd677858692d402fa0bb5a5")),
    location: DBRef("location", ObjectId("5cd677858692d402fa0bb5a3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee60"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cd7d0a548fd720669cfee5d")),
    carType: DBRef("carType", ObjectId("5cd7d0a548fd720669cfee5e")),
    location: DBRef("location", ObjectId("5cd7d0a548fd720669cfee5c")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004fa"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cd819d493c5720b9e7004f7")),
    carType: DBRef("carType", ObjectId("5cd819d493c5720b9e7004f8")),
    location: DBRef("location", ObjectId("5cd819d493c5720b9e7004f6")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea83"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cd81b1893c5720bae99ea80")),
    carType: DBRef("carType", ObjectId("5cd81b1893c5720bae99ea81")),
    location: DBRef("location", ObjectId("5cd81b1893c5720bae99ea7f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd6"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cd81c0693c5720bba424bd3")),
    carType: DBRef("carType", ObjectId("5cd81c0693c5720bba424bd4")),
    location: DBRef("location", ObjectId("5cd81c0693c5720bba424bd2")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd81c6193c5720bbdcf4839"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cd81c6193c5720bbdcf4836")),
    carType: DBRef("carType", ObjectId("5cd81c6193c5720bbdcf4837")),
    location: DBRef("location", ObjectId("5cd81c6193c5720bbdcf4835")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf4841"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cd81c6e93c5720bbdcf483e")),
    carType: DBRef("carType", ObjectId("5cd81c6e93c5720bbdcf483f")),
    location: DBRef("location", ObjectId("5cd81c6e93c5720bbdcf483d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe08"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cd90fd70cc3c202d55efe05")),
    carType: DBRef("carType", ObjectId("5cd90fd70cc3c202d55efe06")),
    location: DBRef("location", ObjectId("5cd90fd70cc3c202d55efe04")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe10"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cd90fe40cc3c202d55efe0d")),
    carType: DBRef("carType", ObjectId("5cd90fe40cc3c202d55efe0e")),
    location: DBRef("location", ObjectId("5cd90fe40cc3c202d55efe0c")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe17"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cd90fe70cc3c202d55efe14")),
    carType: DBRef("carType", ObjectId("5cd90fe70cc3c202d55efe15")),
    location: DBRef("location", ObjectId("5cd90fe70cc3c202d55efe13")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290eb"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cd928440cc3c203d53290e8")),
    carType: DBRef("carType", ObjectId("5cd928440cc3c203d53290e9")),
    location: DBRef("location", ObjectId("5cd928440cc3c203d53290e7")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290f3"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cd928620cc3c203d53290f0")),
    carType: DBRef("carType", ObjectId("5cd928620cc3c203d53290f1")),
    location: DBRef("location", ObjectId("5cd928620cc3c203d53290ef")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b5"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cd92df90cc3c204178205b2")),
    carType: DBRef("carType", ObjectId("5cd92df90cc3c204178205b3")),
    location: DBRef("location", ObjectId("5cd92df90cc3c204178205b1")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509d3"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cd92ec20cc3c2042ef509d0")),
    carType: DBRef("carType", ObjectId("5cd92ec20cc3c2042ef509d1")),
    location: DBRef("location", ObjectId("5cd92ec20cc3c2042ef509cf")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c7"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cdb675d54b58604f1e085c4")),
    carType: DBRef("carType", ObjectId("5cdb675d54b58604f1e085c5")),
    location: DBRef("location", ObjectId("5cdb675d54b58604f1e085c3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c9"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cdb6bac54b586052fef78c6")),
    carType: DBRef("carType", ObjectId("5cdb6bac54b586052fef78c7")),
    location: DBRef("location", ObjectId("5cdb6bac54b586052fef78c5")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3f"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce35a6048fd7203eb65de3c")),
    carType: DBRef("carType", ObjectId("5ce35a6048fd7203eb65de3d")),
    location: DBRef("location", ObjectId("5ce35a6048fd7203eb65de3b")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb53"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce35b3d48fd72040b4aeb50")),
    carType: DBRef("carType", ObjectId("5ce35b3d48fd72040b4aeb51")),
    location: DBRef("location", ObjectId("5ce35b3d48fd72040b4aeb4f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfbb"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce35ba348fd72041260bfb8")),
    carType: DBRef("carType", ObjectId("5ce35ba348fd72041260bfb9")),
    location: DBRef("location", ObjectId("5ce35ba348fd72041260bfb7")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938da"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce35bf448fd72041a4938d7")),
    carType: DBRef("carType", ObjectId("5ce35bf448fd72041a4938d8")),
    location: DBRef("location", ObjectId("5ce35bf448fd72041a4938d6")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c9"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce4a00456c40e05080014c6")),
    carType: DBRef("carType", ObjectId("5ce4a00456c40e05080014c7")),
    location: DBRef("location", ObjectId("5ce4a00456c40e05080014c5")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce4a4f856c40e054661612c"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce4a4f856c40e0546616129")),
    carType: DBRef("carType", ObjectId("5ce4a4f856c40e054661612a")),
    location: DBRef("location", ObjectId("5ce4a4f856c40e0546616128")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce4a70156c40e055c84848d"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce4a70156c40e055c84848a")),
    carType: DBRef("carType", ObjectId("5ce4a70156c40e055c84848b")),
    location: DBRef("location", ObjectId("5ce4a70156c40e055c848489")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c9"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce4a75656c40e05646343c6")),
    carType: DBRef("carType", ObjectId("5ce4a75656c40e05646343c7")),
    location: DBRef("location", ObjectId("5ce4a75656c40e05646343c5")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956ad"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce4ad4756c40e05923956aa")),
    carType: DBRef("carType", ObjectId("5ce4ad4756c40e05923956ab")),
    location: DBRef("location", ObjectId("5ce4ad4756c40e05923956a9")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fc1"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7de9256c40e0c52a26fbe")),
    carType: DBRef("carType", ObjectId("5ce7de9256c40e0c52a26fbf")),
    location: DBRef("location", ObjectId("5ce7de9256c40e0c52a26fbd")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf94"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7e1ac56c40e0cad6ddf91")),
    carType: DBRef("carType", ObjectId("5ce7e1ac56c40e0cad6ddf92")),
    location: DBRef("location", ObjectId("5ce7e1ac56c40e0cad6ddf90")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf9c"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7e1b356c40e0cad6ddf99")),
    carType: DBRef("carType", ObjectId("5ce7e1b356c40e0cad6ddf9a")),
    location: DBRef("location", ObjectId("5ce7e1b356c40e0cad6ddf98")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab22"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7e2e056c40e0cb4c8ab1f")),
    carType: DBRef("carType", ObjectId("5ce7e2e056c40e0cb4c8ab20")),
    location: DBRef("location", ObjectId("5ce7e2e056c40e0cb4c8ab1e")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab2a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7e2e356c40e0cb4c8ab27")),
    carType: DBRef("carType", ObjectId("5ce7e2e356c40e0cb4c8ab28")),
    location: DBRef("location", ObjectId("5ce7e2e356c40e0cb4c8ab26")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9f"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fa5656c40e0ced3a3a9c")),
    carType: DBRef("carType", ObjectId("5ce7fa5656c40e0ced3a3a9d")),
    location: DBRef("location", ObjectId("5ce7fa5656c40e0ced3a3a9b")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa7"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fa8656c40e0ced3a3aa4")),
    carType: DBRef("carType", ObjectId("5ce7fa8656c40e0ced3a3aa5")),
    location: DBRef("location", ObjectId("5ce7fa8656c40e0ced3a3aa3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aae"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fa8d56c40e0ced3a3aab")),
    carType: DBRef("carType", ObjectId("5ce7fa8d56c40e0ced3a3aac")),
    location: DBRef("location", ObjectId("5ce7fa8d56c40e0ced3a3aaa")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab5"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fa9456c40e0ced3a3ab2")),
    carType: DBRef("carType", ObjectId("5ce7fa9456c40e0ced3a3ab3")),
    location: DBRef("location", ObjectId("5ce7fa9456c40e0ced3a3ab1")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3abc"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fa9656c40e0ced3a3ab9")),
    carType: DBRef("carType", ObjectId("5ce7fa9656c40e0ced3a3aba")),
    location: DBRef("location", ObjectId("5ce7fa9656c40e0ced3a3ab8")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19ed"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce7fe9256c40e0da8bc19ea")),
    carType: DBRef("carType", ObjectId("5ce7fe9256c40e0da8bc19eb")),
    location: DBRef("location", ObjectId("5ce7fe9256c40e0da8bc19e9")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce8b55856c40e10b2678081"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce8b55856c40e10b267807e")),
    carType: DBRef("carType", ObjectId("5ce8b55856c40e10b267807f")),
    location: DBRef("location", ObjectId("5ce8b55856c40e10b267807d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add6"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce8b72056c40e10bcc6add3")),
    carType: DBRef("carType", ObjectId("5ce8b72056c40e10bcc6add4")),
    location: DBRef("location", ObjectId("5ce8b72056c40e10bcc6add2")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e248"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce8b7c656c40e10cdf0e245")),
    carType: DBRef("carType", ObjectId("5ce8b7c656c40e10cdf0e246")),
    location: DBRef("location", ObjectId("5ce8b7c656c40e10cdf0e244")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a38b"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce8b82f56c40e10d698a388")),
    carType: DBRef("carType", ObjectId("5ce8b82f56c40e10d698a389")),
    location: DBRef("location", ObjectId("5ce8b82f56c40e10d698a387")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75b0"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce9f6b75f953835574f75ad")),
    carType: DBRef("carType", ObjectId("5ce9f6b75f953835574f75ae")),
    location: DBRef("location", ObjectId("5ce9f6b75f953835574f75ac")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ce9f7105f953835730b1641"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ce9f7105f953835730b163e")),
    carType: DBRef("carType", ObjectId("5ce9f7105f953835730b163f")),
    location: DBRef("location", ObjectId("5ce9f7105f953835730b163d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286f2"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cea995f5f95383c33b286ef")),
    carType: DBRef("carType", ObjectId("5cea995f5f95383c33b286f0")),
    location: DBRef("location", ObjectId("5cea995f5f95383c33b286ee")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cea99635f95383c33b286fa"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cea99635f95383c33b286f7")),
    carType: DBRef("carType", ObjectId("5cea99635f95383c33b286f8")),
    location: DBRef("location", ObjectId("5cea99635f95383c33b286f6")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e5"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca32c192c300ef8d1f4e2")),
    carType: DBRef("carType", ObjectId("5ceca32c192c300ef8d1f4e3")),
    location: DBRef("location", ObjectId("5ceca32c192c300ef8d1f4e1")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca519192c300f59888d75"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca519192c300f59888d72")),
    carType: DBRef("carType", ObjectId("5ceca519192c300f59888d73")),
    location: DBRef("location", ObjectId("5ceca519192c300f59888d71")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca522192c300f59888d7d"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca522192c300f59888d7a")),
    carType: DBRef("carType", ObjectId("5ceca522192c300f59888d7b")),
    location: DBRef("location", ObjectId("5ceca522192c300f59888d79")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca681192c300f59888d84"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca681192c300f59888d81")),
    carType: DBRef("carType", ObjectId("5ceca681192c300f59888d82")),
    location: DBRef("location", ObjectId("5ceca681192c300f59888d80")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca685192c300f59888d8c"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca685192c300f59888d89")),
    carType: DBRef("carType", ObjectId("5ceca685192c300f59888d8a")),
    location: DBRef("location", ObjectId("5ceca685192c300f59888d88")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888d93"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888d90")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888d91")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888d8f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888d97")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888d98")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888d96")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888da1"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888d9e")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888d9f")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888d9d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888da8"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888da5")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888da6")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888da4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888daf"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888dac")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888dad")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888dab")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca738192c300f59888db6"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca738192c300f59888db3")),
    carType: DBRef("carType", ObjectId("5ceca738192c300f59888db4")),
    location: DBRef("location", ObjectId("5ceca738192c300f59888db2")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca73a192c300f59888dbd"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca73a192c300f59888dba")),
    carType: DBRef("carType", ObjectId("5ceca73a192c300f59888dbb")),
    location: DBRef("location", ObjectId("5ceca73a192c300f59888db9")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dc4"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca73b192c300f59888dc1")),
    carType: DBRef("carType", ObjectId("5ceca73b192c300f59888dc2")),
    location: DBRef("location", ObjectId("5ceca73b192c300f59888dc0")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dcb"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca73c192c300f59888dc8")),
    carType: DBRef("carType", ObjectId("5ceca73c192c300f59888dc9")),
    location: DBRef("location", ObjectId("5ceca73c192c300f59888dc7")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06848"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b3192c300f82d06845")),
    carType: DBRef("carType", ObjectId("5ceca7b3192c300f82d06846")),
    location: DBRef("location", ObjectId("5ceca7b3192c300f82d06844")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d06850"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b5192c300f82d0684d")),
    carType: DBRef("carType", ObjectId("5ceca7b5192c300f82d0684e")),
    location: DBRef("location", ObjectId("5ceca7b5192c300f82d0684c")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06857"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d06854")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d06855")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d06853")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685e"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d0685b")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d0685c")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d0685a")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06865"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d06862")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d06863")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d06861")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686d"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d06869")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d0686a")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d06868")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06873"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d06870")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d06871")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d0686f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0687a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca7b9192c300f82d06877")),
    carType: DBRef("carType", ObjectId("5ceca7b9192c300f82d06878")),
    location: DBRef("location", ObjectId("5ceca7b9192c300f82d06876")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca8e8192c300fa22b2206"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca8e7192c300fa22b2203")),
    carType: DBRef("carType", ObjectId("5ceca8e7192c300fa22b2204")),
    location: DBRef("location", ObjectId("5ceca8e7192c300fa22b2202")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca938192c300fa22b220e"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca938192c300fa22b220b")),
    carType: DBRef("carType", ObjectId("5ceca938192c300fa22b220c")),
    location: DBRef("location", ObjectId("5ceca938192c300fa22b220a")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2215"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca957192c300fa22b2212")),
    carType: DBRef("carType", ObjectId("5ceca957192c300fa22b2213")),
    location: DBRef("location", ObjectId("5ceca957192c300fa22b2211")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221d"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca95b192c300fa22b2219")),
    carType: DBRef("carType", ObjectId("5ceca95b192c300fa22b221b")),
    location: DBRef("location", ObjectId("5ceca95b192c300fa22b2218")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2223"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca95b192c300fa22b2220")),
    carType: DBRef("carType", ObjectId("5ceca95b192c300fa22b2221")),
    location: DBRef("location", ObjectId("5ceca95b192c300fa22b221f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b222a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca95b192c300fa22b2227")),
    carType: DBRef("carType", ObjectId("5ceca95b192c300fa22b2228")),
    location: DBRef("location", ObjectId("5ceca95b192c300fa22b2226")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9a8192c300fb4a89b35"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9a7192c300fb4a89b32")),
    carType: DBRef("carType", ObjectId("5ceca9a7192c300fb4a89b33")),
    location: DBRef("location", ObjectId("5ceca9a7192c300fb4a89b31")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b41"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9c7192c300fb4a89b3b")),
    carType: DBRef("carType", ObjectId("5ceca9c7192c300fb4a89b3d")),
    location: DBRef("location", ObjectId("5ceca9c7192c300fb4a89b3a")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b44"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9c7192c300fb4a89b40")),
    carType: DBRef("carType", ObjectId("5ceca9c7192c300fb4a89b42")),
    location: DBRef("location", ObjectId("5ceca9c7192c300fb4a89b3e")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b4b"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9cb192c300fb4a89b48")),
    carType: DBRef("carType", ObjectId("5ceca9cb192c300fb4a89b49")),
    location: DBRef("location", ObjectId("5ceca9cb192c300fb4a89b47")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b55"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9d6192c300fb4a89b4f")),
    carType: DBRef("carType", ObjectId("5ceca9d6192c300fb4a89b51")),
    location: DBRef("location", ObjectId("5ceca9d6192c300fb4a89b4e")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b59"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9d6192c300fb4a89b56")),
    carType: DBRef("carType", ObjectId("5ceca9d6192c300fb4a89b57")),
    location: DBRef("location", ObjectId("5ceca9d6192c300fb4a89b54")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b60"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9d6192c300fb4a89b5d")),
    carType: DBRef("carType", ObjectId("5ceca9d6192c300fb4a89b5e")),
    location: DBRef("location", ObjectId("5ceca9d6192c300fb4a89b5c")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b68"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9d6192c300fb4a89b64")),
    carType: DBRef("carType", ObjectId("5ceca9d6192c300fb4a89b65")),
    location: DBRef("location", ObjectId("5ceca9d6192c300fb4a89b63")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b6e"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5ceca9d6192c300fb4a89b6b")),
    carType: DBRef("carType", ObjectId("5ceca9d6192c300fb4a89b6c")),
    location: DBRef("location", ObjectId("5ceca9d6192c300fb4a89b6a")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b75"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaad2192c300fb4a89b72")),
    carType: DBRef("carType", ObjectId("5cecaad2192c300fb4a89b73")),
    location: DBRef("location", ObjectId("5cecaad2192c300fb4a89b71")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb761"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaae7192c300fd02bb75e")),
    carType: DBRef("carType", ObjectId("5cecaae7192c300fd02bb75f")),
    location: DBRef("location", ObjectId("5cecaae7192c300fd02bb75d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb769"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaae9192c300fd02bb766")),
    carType: DBRef("carType", ObjectId("5cecaae9192c300fd02bb767")),
    location: DBRef("location", ObjectId("5cecaae9192c300fd02bb765")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb770"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaee192c300fd02bb76d")),
    carType: DBRef("carType", ObjectId("5cecaaee192c300fd02bb76e")),
    location: DBRef("location", ObjectId("5cecaaee192c300fd02bb76c")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb777"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaee192c300fd02bb774")),
    carType: DBRef("carType", ObjectId("5cecaaee192c300fd02bb775")),
    location: DBRef("location", ObjectId("5cecaaee192c300fd02bb773")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77e"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaee192c300fd02bb77b")),
    carType: DBRef("carType", ObjectId("5cecaaee192c300fd02bb77c")),
    location: DBRef("location", ObjectId("5cecaaee192c300fd02bb77a")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb785"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaee192c300fd02bb782")),
    carType: DBRef("carType", ObjectId("5cecaaee192c300fd02bb783")),
    location: DBRef("location", ObjectId("5cecaaee192c300fd02bb781")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb78c"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaee192c300fd02bb789")),
    carType: DBRef("carType", ObjectId("5cecaaee192c300fd02bb78a")),
    location: DBRef("location", ObjectId("5cecaaee192c300fd02bb788")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb793"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaaf0192c300fd02bb790")),
    carType: DBRef("carType", ObjectId("5cecaaf0192c300fd02bb791")),
    location: DBRef("location", ObjectId("5cecaaf0192c300fd02bb78f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb79a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab02192c300fd02bb797")),
    carType: DBRef("carType", ObjectId("5cecab02192c300fd02bb798")),
    location: DBRef("location", ObjectId("5cecab02192c300fd02bb796")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb7a1"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab05192c300fd02bb79e")),
    carType: DBRef("carType", ObjectId("5cecab05192c300fd02bb79f")),
    location: DBRef("location", ObjectId("5cecab05192c300fd02bb79d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a8"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab08192c300fd02bb7a5")),
    carType: DBRef("carType", ObjectId("5cecab08192c300fd02bb7a6")),
    location: DBRef("location", ObjectId("5cecab08192c300fd02bb7a4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7af"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab0c192c300fd02bb7ac")),
    carType: DBRef("carType", ObjectId("5cecab0c192c300fd02bb7ad")),
    location: DBRef("location", ObjectId("5cecab0c192c300fd02bb7ab")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b6"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab0f192c300fd02bb7b3")),
    carType: DBRef("carType", ObjectId("5cecab0f192c300fd02bb7b4")),
    location: DBRef("location", ObjectId("5cecab0f192c300fd02bb7b2")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7bd"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab24192c300fd02bb7ba")),
    carType: DBRef("carType", ObjectId("5cecab24192c300fd02bb7bb")),
    location: DBRef("location", ObjectId("5cecab24192c300fd02bb7b9")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7c4"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecab27192c300fd02bb7c1")),
    carType: DBRef("carType", ObjectId("5cecab27192c300fd02bb7c2")),
    location: DBRef("location", ObjectId("5cecab27192c300fd02bb7c0")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e8"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecac4e192c300fec9ef2e5")),
    carType: DBRef("carType", ObjectId("5cecac4e192c300fec9ef2e6")),
    location: DBRef("location", ObjectId("5cecac4e192c300fec9ef2e4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2f0"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecac51192c300fec9ef2ed")),
    carType: DBRef("carType", ObjectId("5cecac51192c300fec9ef2ee")),
    location: DBRef("location", ObjectId("5cecac51192c300fec9ef2ec")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f7"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecac54192c300fec9ef2f4")),
    carType: DBRef("carType", ObjectId("5cecac54192c300fec9ef2f5")),
    location: DBRef("location", ObjectId("5cecac54192c300fec9ef2f3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2fe"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecac57192c300fec9ef2fb")),
    carType: DBRef("carType", ObjectId("5cecac57192c300fec9ef2fc")),
    location: DBRef("location", ObjectId("5cecac57192c300fec9ef2fa")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef305"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaea6192c300fec9ef302")),
    carType: DBRef("carType", ObjectId("5cecaea6192c300fec9ef303")),
    location: DBRef("location", ObjectId("5cecaea6192c300fec9ef301")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef30c"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaef3192c300fec9ef309")),
    carType: DBRef("carType", ObjectId("5cecaef3192c300fec9ef30a")),
    location: DBRef("location", ObjectId("5cecaef3192c300fec9ef308")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef313"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaef6192c300fec9ef310")),
    carType: DBRef("carType", ObjectId("5cecaef6192c300fec9ef311")),
    location: DBRef("location", ObjectId("5cecaef6192c300fec9ef30f")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef31a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecaef8192c300fec9ef317")),
    carType: DBRef("carType", ObjectId("5cecaef8192c300fec9ef318")),
    location: DBRef("location", ObjectId("5cecaef8192c300fec9ef316")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef321"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecb022192c300fec9ef31e")),
    carType: DBRef("carType", ObjectId("5cecb022192c300fec9ef31f")),
    location: DBRef("location", ObjectId("5cecb022192c300fec9ef31d")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94f"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecf44d192c3014e58aa94c")),
    carType: DBRef("carType", ObjectId("5cecf44d192c3014e58aa94d")),
    location: DBRef("location", ObjectId("5cecf44d192c3014e58aa94b")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa957"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cecf461192c3014e58aa954")),
    carType: DBRef("carType", ObjectId("5cecf461192c3014e58aa955")),
    location: DBRef("location", ObjectId("5cecf461192c3014e58aa953")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878ca"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cecfd4e192c3015bfd878c7")),
    carType: DBRef("carType", ObjectId("5cecfd4e192c3015bfd878c8")),
    location: DBRef("location", ObjectId("5cecfd4e192c3015bfd878c6")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f6c"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cecfdb5192c3015cb5e1f69")),
    carType: DBRef("carType", ObjectId("5cecfdb5192c3015cb5e1f6a")),
    location: DBRef("location", ObjectId("5cecfdb5192c3015cb5e1f68")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cecfeb5192c3015e01028a2"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cecfeb5192c3015e010289f")),
    carType: DBRef("carType", ObjectId("5cecfeb5192c3015e01028a0")),
    location: DBRef("location", ObjectId("5cecfeb5192c3015e010289e")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced31db192c3019389896e9"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced31db192c3019389896e6")),
    carType: DBRef("carType", ObjectId("5ced31db192c3019389896e7")),
    location: DBRef("location", ObjectId("5ced31db192c3019389896e5")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f1"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced31f6192c3019389896ee")),
    carType: DBRef("carType", ObjectId("5ced31f6192c3019389896ef")),
    location: DBRef("location", ObjectId("5ced31f6192c3019389896ed")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f8"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced31f6192c3019389896f5")),
    carType: DBRef("carType", ObjectId("5ced31f6192c3019389896f6")),
    location: DBRef("location", ObjectId("5ced31f6192c3019389896f4")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced31f6192c3019389896ff"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced31f6192c3019389896fc")),
    carType: DBRef("carType", ObjectId("5ced31f6192c3019389896fd")),
    location: DBRef("location", ObjectId("5ced31f6192c3019389896fb")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced3209192c301938989706"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced3209192c301938989703")),
    carType: DBRef("carType", ObjectId("5ced3209192c301938989704")),
    location: DBRef("location", ObjectId("5ced3209192c301938989702")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced3211192c30193898970d"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced3211192c30193898970a")),
    carType: DBRef("carType", ObjectId("5ced3211192c30193898970b")),
    location: DBRef("location", ObjectId("5ced3211192c301938989709")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced3211192c301938989714"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced3211192c301938989711")),
    carType: DBRef("carType", ObjectId("5ced3211192c301938989712")),
    location: DBRef("location", ObjectId("5ced3211192c301938989710")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5ced3211192c30193898971b"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5ced3211192c301938989718")),
    carType: DBRef("carType", ObjectId("5ced3211192c301938989719")),
    location: DBRef("location", ObjectId("5ced3211192c301938989717")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce7"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cede35b1a3a851c305bbce4")),
    carType: DBRef("carType", ObjectId("5cede35b1a3a851c305bbce5")),
    location: DBRef("location", ObjectId("5cede35b1a3a851c305bbce3")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cee165f192c3020467046d1"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cee165f192c3020467046ce")),
    carType: DBRef("carType", ObjectId("5cee165f192c3020467046cf")),
    location: DBRef("location", ObjectId("5cee165f192c3020467046cd")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cee1667192c3020467046d9"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cee1667192c3020467046d6")),
    carType: DBRef("carType", ObjectId("5cee1667192c3020467046d7")),
    location: DBRef("location", ObjectId("5cee1667192c3020467046d5")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cee1684192c3020467046e0"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cee1684192c3020467046dd")),
    carType: DBRef("carType", ObjectId("5cee1684192c3020467046de")),
    location: DBRef("location", ObjectId("5cee1684192c3020467046dc")),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454cc"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cee27c9192c30216e1454c9")),
    carType: DBRef("carType", ObjectId("5cee27c9192c30216e1454ca")),
    location: DBRef("location", ObjectId("5cee27c9192c30216e1454c8")),
    recordDate: ISODate("2019-05-29T06:33:45.715Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454d4"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cee27cd192c30216e1454d1")),
    carType: DBRef("carType", ObjectId("5cee27cd192c30216e1454d2")),
    location: DBRef("location", ObjectId("5cee27cd192c30216e1454d0")),
    recordDate: ISODate("2019-05-29T06:33:49.494Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c44"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef3f693e31d3a4b72c3c41")),
    carType: DBRef("carType", ObjectId("5cef3f693e31d3a4b72c3c42")),
    location: DBRef("location", ObjectId("5cef3f693e31d3a4b72c3c40")),
    recordDate: ISODate("2019-05-30T02:26:49.749Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d941168a"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef402a3e31d3a4d9411687")),
    carType: DBRef("carType", ObjectId("5cef402a3e31d3a4d9411688")),
    location: DBRef("location", ObjectId("5cef402a3e31d3a4d9411686")),
    recordDate: ISODate("2019-05-30T02:30:02.777Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d9411692"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cef405e3e31d3a4d941168f")),
    carType: DBRef("carType", ObjectId("5cef405e3e31d3a4d9411690")),
    location: DBRef("location", ObjectId("5cef405e3e31d3a4d941168e")),
    recordDate: ISODate("2019-05-30T02:30:54.311Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411699"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef40c33e31d3a4d9411696")),
    carType: DBRef("carType", ObjectId("5cef40c33e31d3a4d9411697")),
    location: DBRef("location", ObjectId("5cef40c33e31d3a4d9411695")),
    recordDate: ISODate("2019-05-30T02:32:35.446Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af2b"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cef41dc3e31d3a4e867af28")),
    carType: DBRef("carType", ObjectId("5cef41dc3e31d3a4e867af29")),
    location: DBRef("location", ObjectId("5cef41dc3e31d3a4e867af27")),
    recordDate: ISODate("2019-05-30T02:37:16.452Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef45503e31d3a527350749"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cef45503e31d3a527350746")),
    carType: DBRef("carType", ObjectId("5cef45503e31d3a527350747")),
    location: DBRef("location", ObjectId("5cef45503e31d3a527350745")),
    recordDate: ISODate("2019-05-30T02:52:00.279Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef465b3e31d3a527350751"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cef465b3e31d3a52735074e")),
    carType: DBRef("carType", ObjectId("5cef465b3e31d3a52735074f")),
    location: DBRef("location", ObjectId("5cef465b3e31d3a52735074d")),
    recordDate: ISODate("2019-05-30T02:56:27.613Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350758"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cef472a3e31d3a527350755")),
    carType: DBRef("carType", ObjectId("5cef472a3e31d3a527350756")),
    location: DBRef("location", ObjectId("5cef472a3e31d3a527350754")),
    recordDate: ISODate("2019-05-30T02:59:54.751Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075f"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cef472f3e31d3a52735075c")),
    carType: DBRef("carType", ObjectId("5cef472f3e31d3a52735075d")),
    location: DBRef("location", ObjectId("5cef472f3e31d3a52735075b")),
    recordDate: ISODate("2019-05-30T02:59:59.753Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350766"),
    carid: NumberInt("562"),
    carname: "途观",
    brandid: NumberInt("1"),
    price: "409.00",
    carBrand: DBRef("carBrand", ObjectId("5cef47bc3e31d3a527350763")),
    carType: DBRef("carType", ObjectId("5cef47bc3e31d3a527350764")),
    location: DBRef("location", ObjectId("5cef47bc3e31d3a527350762")),
    recordDate: ISODate("2019-05-30T03:02:20.844Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef48553e31d3a52735076d"),
    carid: NumberInt("1243"),
    carname: "凯迪拉克XTS",
    brandid: NumberInt("47"),
    price: "572.00",
    carBrand: DBRef("carBrand", ObjectId("5cef48553e31d3a52735076a")),
    carType: DBRef("carType", ObjectId("5cef48553e31d3a52735076b")),
    location: DBRef("location", ObjectId("5cef48553e31d3a527350769")),
    recordDate: ISODate("2019-05-30T03:04:53.523Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef48b43e31d3a527350774"),
    carid: NumberInt("1243"),
    carname: "凯迪拉克XTS",
    brandid: NumberInt("47"),
    price: "572.00",
    carBrand: DBRef("carBrand", ObjectId("5cef48b43e31d3a527350771")),
    carType: DBRef("carType", ObjectId("5cef48b43e31d3a527350772")),
    location: DBRef("location", ObjectId("5cef48b43e31d3a527350770")),
    recordDate: ISODate("2019-05-30T03:06:28.092Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f8"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cef86b43e31d3a789c6a3f5")),
    carType: DBRef("carType", ObjectId("5cef86b43e31d3a789c6a3f6")),
    location: DBRef("location", ObjectId("5cef86b43e31d3a789c6a3f4")),
    recordDate: ISODate("2019-05-30T07:31:00.44Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad763"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef86ef3e31d3a807aad760")),
    carType: DBRef("carType", ObjectId("5cef86ef3e31d3a807aad761")),
    location: DBRef("location", ObjectId("5cef86ef3e31d3a807aad75f")),
    recordDate: ISODate("2019-05-30T07:31:59.362Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad76b"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef87423e31d3a807aad768")),
    carType: DBRef("carType", ObjectId("5cef87423e31d3a807aad769")),
    location: DBRef("location", ObjectId("5cef87423e31d3a807aad767")),
    recordDate: ISODate("2019-05-30T07:33:22.188Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad772"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef874f3e31d3a807aad76f")),
    carType: DBRef("carType", ObjectId("5cef874f3e31d3a807aad770")),
    location: DBRef("location", ObjectId("5cef874f3e31d3a807aad76e")),
    recordDate: ISODate("2019-05-30T07:33:35.538Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c214"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef87833e31d3a816a0c211")),
    carType: DBRef("carType", ObjectId("5cef87833e31d3a816a0c212")),
    location: DBRef("location", ObjectId("5cef87833e31d3a816a0c210")),
    recordDate: ISODate("2019-05-30T07:34:27.377Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f55"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef88173e31d3a81ac93f52")),
    carType: DBRef("carType", ObjectId("5cef88173e31d3a81ac93f53")),
    location: DBRef("location", ObjectId("5cef88173e31d3a81ac93f51")),
    recordDate: ISODate("2019-05-30T07:36:55.253Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b4c"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef889f3e31d3a824589b49")),
    carType: DBRef("carType", ObjectId("5cef889f3e31d3a824589b4a")),
    location: DBRef("location", ObjectId("5cef889f3e31d3a824589b48")),
    recordDate: ISODate("2019-05-30T07:39:11.054Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e848d"),
    carid: NumberInt("7"),
    carname: "奥迪A6",
    brandid: NumberInt("33"),
    price: "805.00",
    carBrand: DBRef("carBrand", ObjectId("5cef89393e31d3a82c4e848a")),
    carType: DBRef("carType", ObjectId("5cef89393e31d3a82c4e848b")),
    location: DBRef("location", ObjectId("5cef89393e31d3a82c4e8489")),
    recordDate: ISODate("2019-05-30T07:41:45.797Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eead"),
    carid: NumberInt("269"),
    carname: "昂科拉",
    brandid: NumberInt("38"),
    price: "246.00",
    carBrand: DBRef("carBrand", ObjectId("5cef8c3a3e31d3a84198eeaa")),
    carType: DBRef("carType", ObjectId("5cef8c3a3e31d3a84198eeab")),
    location: DBRef("location", ObjectId("5cef8c3a3e31d3a84198eea9")),
    recordDate: ISODate("2019-05-30T07:54:34.11Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb5"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cef8d133e31d3a84198eeb2")),
    carType: DBRef("carType", ObjectId("5cef8d133e31d3a84198eeb3")),
    location: DBRef("location", ObjectId("5cef8d133e31d3a84198eeb1")),
    recordDate: ISODate("2019-05-30T07:58:11.769Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eebc"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cef8e143e31d3a84198eeb9")),
    carType: DBRef("carType", ObjectId("5cef8e143e31d3a84198eeba")),
    location: DBRef("location", ObjectId("5cef8e143e31d3a84198eeb8")),
    recordDate: ISODate("2019-05-30T08:02:28.809Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eec4"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cef8e293e31d3a84198eec1")),
    carType: DBRef("carType", ObjectId("5cef8e293e31d3a84198eec2")),
    location: DBRef("location", ObjectId("5cef8e293e31d3a84198eec0")),
    recordDate: ISODate("2019-05-30T08:02:49.085Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526bb"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cef8ee23e31d3a86c5526b8")),
    carType: DBRef("carType", ObjectId("5cef8ee23e31d3a86c5526b9")),
    location: DBRef("location", ObjectId("5cef8ee23e31d3a86c5526b7")),
    recordDate: ISODate("2019-05-30T08:05:54.234Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab78a"),
    carid: NumberInt("266"),
    carname: "英朗",
    brandid: NumberInt("38"),
    price: "227.00",
    carBrand: DBRef("carBrand", ObjectId("5cef903b3e31d3a875dab787")),
    carType: DBRef("carType", ObjectId("5cef903b3e31d3a875dab788")),
    location: DBRef("location", ObjectId("5cef903b3e31d3a875dab786")),
    recordDate: ISODate("2019-05-30T08:11:39.9Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf4"),
    carid: NumberInt("1243"),
    carname: "凯迪拉克XTS",
    brandid: NumberInt("47"),
    price: "572.00",
    carBrand: DBRef("carBrand", ObjectId("5cef9f983e31d3a906437cf1")),
    carType: DBRef("carType", ObjectId("5cef9f983e31d3a906437cf2")),
    location: DBRef("location", ObjectId("5cef9f983e31d3a906437cf0")),
    recordDate: ISODate("2019-05-30T09:17:12.656Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebce"),
    carid: NumberInt("2086"),
    carname: "迈锐宝",
    brandid: NumberInt("71"),
    price: "268.00",
    carBrand: DBRef("carBrand", ObjectId("5cefc81f3e31d3aa5c18ebcb")),
    carType: DBRef("carType", ObjectId("5cefc81f3e31d3aa5c18ebcc")),
    location: DBRef("location", ObjectId("5cefc81f3e31d3aa5c18ebca")),
    recordDate: ISODate("2019-05-30T12:10:07.944Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce5"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cf06d3a3e31d3ae4776dce2")),
    carType: DBRef("carType", ObjectId("5cf06d3a3e31d3ae4776dce3")),
    location: DBRef("location", ObjectId("5cf06d3a3e31d3ae4776dce1")),
    recordDate: ISODate("2019-05-30T23:54:33.579Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dced"),
    carid: NumberInt("562"),
    carname: "途观",
    brandid: NumberInt("1"),
    price: "409.00",
    carBrand: DBRef("carBrand", ObjectId("5cf06d423e31d3ae4776dcea")),
    carType: DBRef("carType", ObjectId("5cf06d423e31d3ae4776dceb")),
    location: DBRef("location", ObjectId("5cf06d423e31d3ae4776dce9")),
    recordDate: ISODate("2019-05-30T23:54:42.839Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcf4"),
    carid: NumberInt("2086"),
    carname: "迈锐宝",
    brandid: NumberInt("71"),
    price: "268.00",
    carBrand: DBRef("carBrand", ObjectId("5cf06d523e31d3ae4776dcf1")),
    carType: DBRef("carType", ObjectId("5cf06d523e31d3ae4776dcf2")),
    location: DBRef("location", ObjectId("5cf06d523e31d3ae4776dcf0")),
    recordDate: ISODate("2019-05-30T23:54:58.627Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d33"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cf089421a3a85ce68e20d30")),
    carType: DBRef("carType", ObjectId("5cf089421a3a85ce68e20d31")),
    location: DBRef("location", ObjectId("5cf089421a3a85ce68e20d2f")),
    recordDate: ISODate("2019-05-31T01:54:10.113Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf08e6c1a3a85ce8ebc8242"),
    carid: NumberInt("271"),
    carname: "别克GL8",
    brandid: NumberInt("38"),
    price: "651.00",
    carBrand: DBRef("carBrand", ObjectId("5cf08e6b1a3a85ce8ebc823f")),
    carType: DBRef("carType", ObjectId("5cf08e6b1a3a85ce8ebc8240")),
    location: DBRef("location", ObjectId("5cf08e6b1a3a85ce8ebc823e")),
    recordDate: ISODate("2019-05-31T02:16:11.939Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc824a"),
    carid: NumberInt("572"),
    carname: "高尔夫",
    brandid: NumberInt("1"),
    price: "300.00",
    carBrand: DBRef("carBrand", ObjectId("5cf090151a3a85ce8ebc8247")),
    carType: DBRef("carType", ObjectId("5cf090151a3a85ce8ebc8248")),
    location: DBRef("location", ObjectId("5cf090151a3a85ce8ebc8246")),
    recordDate: ISODate("2019-05-31T02:23:17.22Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf323309c8d15066329d51c"),
    carid: NumberInt("557"),
    carname: "朗逸",
    brandid: NumberInt("1"),
    plate: "2018",
    price: "237.00",
    carBrand: DBRef("carBrand", ObjectId("5cf323309c8d15066329d519")),
    carType: DBRef("carType", ObjectId("5cf323309c8d15066329d51a")),
    location: DBRef("location", ObjectId("5cf323309c8d15066329d518")),
    recordDate: ISODate("2019-06-02T01:15:28.525Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
db.getCollection("car").insert([ {
    _id: ObjectId("5cf323359c8d15066329d524"),
    carid: NumberInt("560"),
    carname: "帕萨特",
    brandid: NumberInt("1"),
    plate: "2014",
    price: "387.00",
    carBrand: DBRef("carBrand", ObjectId("5cf323359c8d15066329d521")),
    carType: DBRef("carType", ObjectId("5cf323359c8d15066329d522")),
    location: DBRef("location", ObjectId("5cf323359c8d15066329d520")),
    recordDate: ISODate("2019-06-02T01:15:33.454Z"),
    _class: "com.pu.carrent.entity.Car"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for carBrand
// ----------------------------
db.getCollection("carBrand").drop();
db.createCollection("carBrand");

// ----------------------------
// Documents of carBrand
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a5"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8ad"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4ce"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e5"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3ed"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f4"),
    brandname: "沃尔沃",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3fb"),
    brandname: "沃尔沃",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d402"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd398b080981016cb69d409"),
    brandname: "雪佛兰",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bc8"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc44"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e3"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf75460"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02da"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e2"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e9"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02f0"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02f8"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa020"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47c"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234cab"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95e1"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c4"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7267"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef17"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a4"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5d"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f7"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea80"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd3"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd81c6193c5720bbdcf4836"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf483e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe05"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0d"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe14"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290e8"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290f0"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b2"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509d0"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c4"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c6"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3c"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb50"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfb8"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d7"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c6"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce4a4f856c40e0546616129"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce4a70156c40e055c84848a"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c6"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956aa"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fbe"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf91"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf99"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab1f"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab27"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9c"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa4"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aab"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab2"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3ab9"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19ea"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce8b55856c40e10b267807e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add3"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e245"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a388"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75ad"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ce9f7105f953835730b163e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286ef"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f7"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e2"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca519192c300f59888d72"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca522192c300f59888d7a"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca681192c300f59888d81"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca685192c300f59888d89"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888d90"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888d97"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888da5"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888dac"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca738192c300f59888db3"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca73a192c300f59888dba"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dc1"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dc8"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06845"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684d"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06854"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685b"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06862"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06869"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06870"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06877"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2203"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca938192c300fa22b220b"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2212"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2219"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2220"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2227"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b32"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3b"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b40"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b48"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b4f"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b56"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5d"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b64"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b6b"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b72"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb75e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb766"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76d"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb774"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77b"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb782"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb789"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb790"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb797"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb79e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a5"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7ac"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b3"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7ba"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7c1"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e5"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2ed"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f4"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2fb"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef302"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef309"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef310"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef317"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef31e"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94c"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa954"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c7"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f69"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cecfeb5192c3015e010289f"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced31db192c3019389896e6"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced31f6192c3019389896ee"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f5"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced31f6192c3019389896fc"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced3209192c301938989703"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced3211192c30193898970a"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced3211192c301938989711"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5ced3211192c301938989718"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce4"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cee165f192c3020467046ce"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cee1667192c3020467046d6"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cee1684192c3020467046dd"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454c9"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454d1"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c41"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411687"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d941168f"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411696"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af28"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef45503e31d3a527350746"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef465b3e31d3a52735074e"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350755"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075c"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350763"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef48553e31d3a52735076a"),
    brandname: "凯迪拉克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef48b43e31d3a527350771"),
    brandname: "凯迪拉克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f5"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad760"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad768"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad76f"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c211"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f52"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b49"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e848a"),
    brandname: "奥迪",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eeaa"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb2"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eeb9"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eec1"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526b8"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab787"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf1"),
    brandname: "凯迪拉克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebcb"),
    brandname: "雪佛兰",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce2"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dcea"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcf1"),
    brandname: "雪佛兰",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d30"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc823f"),
    brandname: "别克",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8247"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf323309c8d15066329d519"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
db.getCollection("carBrand").insert([ {
    _id: ObjectId("5cf323359c8d15066329d521"),
    brandname: "大众",
    _class: "com.pu.carrent.entity.CarBrand"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for carDetail
// ----------------------------
db.getCollection("carDetail").drop();
db.createCollection("carDetail");

// ----------------------------
// Documents of carDetail
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("carDetail").insert([ {
    _id: ObjectId("5ced347b192c3019c240c87d"),
    cdid: NumberInt("1"),
    level: "自动风尚版",
    isdeleted: NumberInt("0"),
    isonline: NumberInt("1"),
    accidentType: NumberInt("-1"),
    accidentTime: ISODate("2019-05-28T13:15:39.413Z"),
    isDamage: NumberInt("0"),
    isScrap: NumberInt("0"),
    thirdParty: NumberInt("0"),
    injury: NumberInt("0"),
    robbing: NumberInt("0"),
    aLocation: "test",
    _class: "com.pu.carrent.entity.CarDetail"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for carType
// ----------------------------
db.getCollection("carType").drop();
db.createCollection("carType");

// ----------------------------
// Documents of carType
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a6"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8ae"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4cf"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e6"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3ee"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f5"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3fc"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d403"),
    ctypename: "B级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd398b080981016cb69d40a"),
    ctypename: "B级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bc9"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc45"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e4"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf75461"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02db"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e3"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02ea"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02f1"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02f9"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa021"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47d"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234cac"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95e2"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c5"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7268"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef18"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a5"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5e"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f8"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea81"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd4"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd81c6193c5720bbdcf4837"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf483f"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe06"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0e"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe15"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290e9"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290f1"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b3"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509d1"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c5"),
    ctypename: "A级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c7"),
    ctypename: "C级",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3d"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb51"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfb9"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d8"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c7"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce4a4f856c40e054661612a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce4a70156c40e055c84848b"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c7"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956ab"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fbf"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf92"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf9a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab20"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab28"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9d"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa5"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aac"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab3"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3aba"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19eb"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce8b55856c40e10b267807f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add4"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e246"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a389"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75ae"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ce9f7105f953835730b163f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286f0"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f8"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e3"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca519192c300f59888d73"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca522192c300f59888d7b"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca681192c300f59888d82"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca685192c300f59888d8a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888d91"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888d98"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888da6"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888dad"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca738192c300f59888db4"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca73a192c300f59888dbb"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dc2"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dc9"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06846"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684e"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06855"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685c"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06863"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06871"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06878"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2204"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca938192c300fa22b220c"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2213"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221b"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2221"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2228"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b33"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3d"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b42"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b49"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b51"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b57"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5e"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b65"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b6c"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b73"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb75f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb767"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76e"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb775"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77c"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb783"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb78a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb791"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb798"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb79f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a6"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7ad"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b4"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7bb"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7c2"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e6"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2ee"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f5"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2fc"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef303"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef30a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef311"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef318"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef31f"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94d"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa955"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c8"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f6a"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cecfeb5192c3015e01028a0"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced31db192c3019389896e7"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896ef"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f6"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896fd"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced3209192c301938989704"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced3211192c30193898970b"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced3211192c301938989712"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5ced3211192c301938989719"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce5"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cee165f192c3020467046cf"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cee1667192c3020467046d7"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cee1684192c3020467046de"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454ca"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454d2"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c42"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411688"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d9411690"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411697"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af29"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef45503e31d3a527350747"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef465b3e31d3a52735074f"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350756"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075d"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350764"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef48553e31d3a52735076b"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef48b43e31d3a527350772"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f6"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad761"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad769"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad770"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c212"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f53"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b4a"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e848b"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eeab"),
    ctypename: "SUV",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb3"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eeba"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eec2"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526b9"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab788"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf2"),
    ctypename: "商务型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebcc"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce3"),
    ctypename: "6至15座商务车",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dceb"),
    ctypename: "SUV",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcf2"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d31"),
    ctypename: "6至15座商务车",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc8240"),
    ctypename: "6至15座商务车",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8248"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf323309c8d15066329d51a"),
    ctypename: "经凑型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
db.getCollection("carType").insert([ {
    _id: ObjectId("5cf323359c8d15066329d522"),
    ctypename: "经济型",
    _class: "com.pu.carrent.entity.CarType"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for city
// ----------------------------
db.getCollection("city").drop();
db.createCollection("city");

// ----------------------------
// Documents of city
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("city").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd24cc42a142608e58dd8a2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8ab"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd24cd22a142608e58dd8aa")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4cc"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd24d882a142608edaaf4cb")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd3989e80981016cb69d3e2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3eb"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd398a180981016cb69d3ea")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd398a480981016cb69d3f1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3f9"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd398a980981016cb69d3f8")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d400"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd398ac80981016cb69d3ff")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd398b080981016cb69d407"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd398b080981016cb69d406")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bc6"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd41dd41fe8481c87d78bc5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc42"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4df001fe84820a077cc41")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e1"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4df6d1fe84820b591d9e0")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf7545e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4dfb41fe84820bbf7545d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02d8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e1981fe84820fa4c02d7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e0"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e1a11fe84820fa4c02df")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e7"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e1a11fe84820fa4c02e6")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02ee"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e1a91fe84820fa4c02ed")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02f6"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e1c61fe84820fa4c02f5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa01e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e25a1fe8482102bfa01d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47a"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e3181fe8482110d6f479")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234ca9"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e34c1fe8482114234ca8")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95df"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e3f31fe8482126ac95de")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e43c1fe848212f6484c1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7265"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e4581fe84821339a7264")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef15"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd4e5651fe8482147a6ef14")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd677858692d402fa0bb5a1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5b"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd7d0a548fd720669cfee5a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f5"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd819d493c5720b9e7004f4")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea7e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd81b1893c5720bae99ea7d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd1"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd81c0693c5720bba424bd0")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd81c6093c5720bbdcf4834"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd81c6093c5720bbdcf4833")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf483c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd81c6e93c5720bbdcf483b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe03"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd90fd70cc3c202d55efe02")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0b"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd90fe40cc3c202d55efe0a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe12"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd90fe70cc3c202d55efe11")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290e6"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd928440cc3c203d53290e5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290ee"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd928620cc3c203d53290ed")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b0"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd92df90cc3c204178205af")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509ce"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cd92ec20cc3c2042ef509cd")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cdb675c54b58604f1e085c1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c4"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cdb6bac54b586052fef78c3")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3a"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce35a6048fd7203eb65de39")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb4e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce35b3d48fd72040b4aeb4d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfb6"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce35ba348fd72041260bfb5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d5"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce35bf448fd72041a4938d4")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c4"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce4a00456c40e05080014c3")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce4a4f856c40e0546616127"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce4a4f856c40e0546616126")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce4a70156c40e055c848488"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce4a70156c40e055c848487")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c4"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce4a75556c40e05646343c3")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956a8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce4ad4756c40e05923956a7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fbc"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7de9256c40e0c52a26fbb")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf8f"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7e1ac56c40e0cad6ddf8e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf97"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7e1b356c40e0cad6ddf96")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab1d"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7e2e056c40e0cb4c8ab1c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab25"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7e2e356c40e0cb4c8ab24")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9a"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fa5656c40e0ced3a3a99")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fa8656c40e0ced3a3aa1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aa9"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fa8d56c40e0ced3a3aa8")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab0"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fa9456c40e0ced3a3aaf")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3ab7"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fa9656c40e0ced3a3ab6")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19e8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce7fe9256c40e0da8bc19e7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce8b55856c40e10b267807c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce8b55756c40e10b267807b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add1"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce8b72056c40e10bcc6add0")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e243"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce8b7c656c40e10cdf0e242")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a386"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce8b82f56c40e10d698a385")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75ab"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce9f6b75f953835574f75aa")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ce9f7105f953835730b163c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ce9f7105f953835730b163b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286ed"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cea995f5f95383c33b286ec")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f5"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cea99635f95383c33b286f4")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e0"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca32c192c300ef8d1f4df")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca519192c300f59888d70"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca519192c300f59888d6f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca522192c300f59888d78"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca522192c300f59888d77")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca681192c300f59888d7f"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca681192c300f59888d7e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca685192c300f59888d87"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca685192c300f59888d86")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888d8e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888d8d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888d95"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888d94")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888d9b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888da3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888da2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888daa"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888da9")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca738192c300f59888db1"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca738192c300f59888db0")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca73a192c300f59888db8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca73a192c300f59888db7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dbf"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca73b192c300f59888dbe")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dc6"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca73c192c300f59888dc5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06843"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b3192c300f82d06842")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684b"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b5192c300f82d0684a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06852"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d06851")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06859"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d06858")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06860"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d0685f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06867"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d06866")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d0686c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06875"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca7b9192c300f82d06874")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2201"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca8e7192c300fa22b2200")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca938192c300fa22b2209"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca938192c300fa22b2208")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2210"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca957192c300fa22b220f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2217"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca95b192c300fa22b2216")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca95b192c300fa22b221a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2225"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca95b192c300fa22b2224")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b30"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9a7192c300fb4a89b2f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b39"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9c6192c300fb4a89b38")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9c6192c300fb4a89b37")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b46"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9cb192c300fb4a89b45")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b4d"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9d6192c300fb4a89b4c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b52"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9d6192c300fb4a89b50")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5b"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9d6192c300fb4a89b5a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b62"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9d6192c300fb4a89b61")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b69"),
    cname: "成都",
    province: DBRef("province", ObjectId("5ceca9d6192c300fb4a89b67")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b70"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaad2192c300fb4a89b6f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb75c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaae7192c300fd02bb75b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb764"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaae9192c300fd02bb763")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76b"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaee192c300fd02bb76a")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb772"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaee192c300fd02bb771")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb779"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaee192c300fd02bb778")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb780"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaee192c300fd02bb77f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb787"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaee192c300fd02bb786")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb78e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaaf0192c300fd02bb78d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb795"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab02192c300fd02bb794")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb79c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab05192c300fd02bb79b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab08192c300fd02bb7a2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7aa"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab0c192c300fd02bb7a9")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b1"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab0f192c300fd02bb7b0")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7b8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab24192c300fd02bb7b7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7bf"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecab27192c300fd02bb7be")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecac4e192c300fec9ef2e2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2eb"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecac51192c300fec9ef2ea")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecac54192c300fec9ef2f1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2f9"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecac57192c300fec9ef2f8")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef300"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaea6192c300fec9ef2ff")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef307"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaef3192c300fec9ef306")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef30e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaef6192c300fec9ef30d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef315"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecaef8192c300fec9ef314")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef31c"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecb022192c300fec9ef31b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94a"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecf44d192c3014e58aa949")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa952"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cecf461192c3014e58aa951")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c5"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cecfd4e192c3015bfd878c4")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f67"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cecfdb5192c3015cb5e1f66")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cecfeb5192c3015e010289d"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cecfeb5192c3015e010289c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced31db192c3019389896e4"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced31db192c3019389896e3")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced31f6192c3019389896ec"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced31f6192c3019389896eb")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f3"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced31f6192c3019389896f2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced31f6192c3019389896fa"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced31f6192c3019389896f9")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced3209192c301938989701"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced3209192c301938989700")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced3211192c301938989708"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced3211192c301938989707")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced3211192c30193898970f"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced3211192c30193898970e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5ced3211192c301938989716"),
    cname: "东城",
    province: DBRef("province", ObjectId("5ced3211192c301938989715")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce2"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cede35b1a3a851c305bbce1")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cee165f192c3020467046cc"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cee165f192c3020467046cb")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cee1667192c3020467046d4"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cee1667192c3020467046d3")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cee1684192c3020467046db"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cee1684192c3020467046da")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454c7"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cee27c9192c30216e1454c6")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454cf"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cee27cd192c30216e1454ce")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c3f"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef3f693e31d3a4b72c3c3e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411685"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef402a3e31d3a4d9411684")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d941168d"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef405e3e31d3a4d941168c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411694"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef40c33e31d3a4d9411693")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af26"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef41dc3e31d3a4e867af25")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef45503e31d3a527350744"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef45503e31d3a527350743")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef465b3e31d3a52735074c"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef465b3e31d3a52735074b")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350753"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef472a3e31d3a527350752")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075a"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef472f3e31d3a527350759")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350761"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef47bc3e31d3a527350760")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef48553e31d3a527350768"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef48553e31d3a527350767")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef48b43e31d3a52735076f"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef48b43e31d3a52735076e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f3"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef86b43e31d3a789c6a3f2")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad75e"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef86ef3e31d3a807aad75d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad766"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef87423e31d3a807aad765")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad76d"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef874f3e31d3a807aad76c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c20f"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef87833e31d3a816a0c20e")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f50"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef88173e31d3a81ac93f4f")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b47"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef889f3e31d3a824589b46")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e8488"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef89393e31d3a82c4e8487")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eea8"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef8c3a3e31d3a84198eea7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb0"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef8d133e31d3a84198eeaf")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eeb7"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef8e143e31d3a84198eeb6")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eebf"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef8e293e31d3a84198eebe")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526b6"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef8ee23e31d3a86c5526b5")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab785"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cef903b3e31d3a875dab784")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cef"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cef9f983e31d3a906437cee")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebc9"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cefc81f3e31d3aa5c18ebc8")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce0"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf06d393e31d3ae4776dcdf")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dce8"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf06d423e31d3ae4776dce7")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcef"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf06d523e31d3ae4776dcee")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d2e"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf089421a3a85ce68e20d2d")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc823d"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf08e6b1a3a85ce8ebc823c")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8245"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cf090151a3a85ce8ebc8244")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf323309c8d15066329d517"),
    cname: "成都",
    province: DBRef("province", ObjectId("5cf323309c8d15066329d516")),
    _class: "com.pu.carrent.entity.City"
} ]);
db.getCollection("city").insert([ {
    _id: ObjectId("5cf323359c8d15066329d51f"),
    cname: "东城",
    province: DBRef("province", ObjectId("5cf323359c8d15066329d51e")),
    _class: "com.pu.carrent.entity.City"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for location
// ----------------------------
db.getCollection("location").drop();
db.createCollection("location");

// ----------------------------
// Documents of location
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("location").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a4"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd24cc42a142608e58dd8a3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8ac"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd24cd22a142608e58dd8ab")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4cd"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd24d882a142608edaaf4cc")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e4"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd3989e80981016cb69d3e3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3ec"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd398a180981016cb69d3eb")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd398a480981016cb69d3f2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3fa"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd398a980981016cb69d3f9")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d401"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd398ac80981016cb69d400")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd398b080981016cb69d408"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd398b080981016cb69d407")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bc7"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd41dd41fe8481c87d78bc6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc43"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4df001fe84820a077cc42")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e2"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4df6d1fe84820b591d9e1")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf7545f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4dfb41fe84820bbf7545e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02d9"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e1981fe84820fa4c02d8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e1"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e1a11fe84820fa4c02e0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e8"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e1a11fe84820fa4c02e7")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02ef"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e1a91fe84820fa4c02ee")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02f7"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e1c61fe84820fa4c02f6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa01f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e25a1fe8482102bfa01e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47b"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e3181fe8482110d6f47a")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234caa"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e34c1fe8482114234ca9")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95e0"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e3f31fe8482126ac95df")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e43c1fe848212f6484c2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7266"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e4581fe84821339a7265")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef16"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd4e5651fe8482147a6ef15")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd677858692d402fa0bb5a2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5c"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd7d0a548fd720669cfee5b")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f6"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd819d493c5720b9e7004f5")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea7f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd81b1893c5720bae99ea7e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd2"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd81c0693c5720bba424bd1")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd81c6193c5720bbdcf4835"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd81c6093c5720bbdcf4834")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf483d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd81c6e93c5720bbdcf483c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe04"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd90fd70cc3c202d55efe03")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0c"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd90fe40cc3c202d55efe0b")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe13"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd90fe70cc3c202d55efe12")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290e7"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd928440cc3c203d53290e6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290ef"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd928620cc3c203d53290ee")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b1"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd92df90cc3c204178205b0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509cf"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cd92ec20cc3c2042ef509ce")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cdb675d54b58604f1e085c2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c5"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cdb6bac54b586052fef78c4")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3b"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce35a6048fd7203eb65de3a")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb4f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce35b3d48fd72040b4aeb4e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfb7"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce35ba348fd72041260bfb6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d6"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce35bf448fd72041a4938d5")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c5"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce4a00456c40e05080014c4")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce4a4f856c40e0546616128"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce4a4f856c40e0546616127")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce4a70156c40e055c848489"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce4a70156c40e055c848488")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c5"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce4a75656c40e05646343c4")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956a9"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce4ad4756c40e05923956a8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fbd"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7de9256c40e0c52a26fbc")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf90"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7e1ac56c40e0cad6ddf8f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf98"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7e1b356c40e0cad6ddf97")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab1e"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7e2e056c40e0cb4c8ab1d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab26"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7e2e356c40e0cb4c8ab25")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9b"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fa5656c40e0ced3a3a9a")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fa8656c40e0ced3a3aa2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aaa"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fa8d56c40e0ced3a3aa9")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab1"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fa9456c40e0ced3a3ab0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3ab8"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fa9656c40e0ced3a3ab7")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19e9"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce7fe9256c40e0da8bc19e8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce8b55856c40e10b267807d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce8b55856c40e10b267807c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add2"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce8b72056c40e10bcc6add1")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e244"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce8b7c656c40e10cdf0e243")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a387"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce8b82f56c40e10d698a386")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75ac"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce9f6b75f953835574f75ab")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ce9f7105f953835730b163d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ce9f7105f953835730b163c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286ee"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cea995f5f95383c33b286ed")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f6"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cea99635f95383c33b286f5")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e1"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca32c192c300ef8d1f4e0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca519192c300f59888d71"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca519192c300f59888d70")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca522192c300f59888d79"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca522192c300f59888d78")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca681192c300f59888d80"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca681192c300f59888d7f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca685192c300f59888d88"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca685192c300f59888d87")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888d8f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888d8e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888d96"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888d95")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888d9c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888da4"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888da3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888dab"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888daa")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca738192c300f59888db2"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca738192c300f59888db1")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca73a192c300f59888db9"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca73a192c300f59888db8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dc0"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca73b192c300f59888dbf")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dc7"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca73c192c300f59888dc6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06844"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b3192c300f82d06843")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684c"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b5192c300f82d0684b")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06853"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d06852")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685a"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d06859")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06861"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d06860")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06868"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d06867")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d0686e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06876"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca7b9192c300f82d06875")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2202"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca8e7192c300fa22b2201")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca938192c300fa22b220a"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca938192c300fa22b2209")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2211"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca957192c300fa22b2210")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2218"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca95b192c300fa22b2217")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca95b192c300fa22b221e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2226"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca95b192c300fa22b2225")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b31"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9a7192c300fb4a89b30")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3a"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9c7192c300fb4a89b39")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3e"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9c7192c300fb4a89b3c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b47"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9cb192c300fb4a89b46")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b4e"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9d6192c300fb4a89b4d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b54"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9d6192c300fb4a89b52")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5c"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9d6192c300fb4a89b5b")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b63"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9d6192c300fb4a89b62")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b6a"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5ceca9d6192c300fb4a89b69")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b71"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaad2192c300fb4a89b70")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb75d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaae7192c300fd02bb75c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb765"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaae9192c300fd02bb764")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76c"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaee192c300fd02bb76b")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb773"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaee192c300fd02bb772")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77a"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaee192c300fd02bb779")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb781"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaee192c300fd02bb780")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb788"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaee192c300fd02bb787")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb78f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaaf0192c300fd02bb78e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb796"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab02192c300fd02bb795")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb79d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab05192c300fd02bb79c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a4"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab08192c300fd02bb7a3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7ab"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab0c192c300fd02bb7aa")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b2"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab0f192c300fd02bb7b1")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7b9"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab24192c300fd02bb7b8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7c0"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecab27192c300fd02bb7bf")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e4"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecac4e192c300fec9ef2e3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2ec"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecac51192c300fec9ef2eb")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f3"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecac54192c300fec9ef2f2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2fa"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecac57192c300fec9ef2f9")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef301"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaea6192c300fec9ef300")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef308"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaef3192c300fec9ef307")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef30f"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaef6192c300fec9ef30e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef316"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecaef8192c300fec9ef315")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef31d"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecb022192c300fec9ef31c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94b"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecf44d192c3014e58aa94a")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa953"),
    lname: "双流区XX路",
    city: DBRef("city", ObjectId("5cecf461192c3014e58aa952")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c6"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cecfd4e192c3015bfd878c5")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f68"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cecfdb5192c3015cb5e1f67")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cecfeb5192c3015e010289e"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cecfeb5192c3015e010289d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced31db192c3019389896e5"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced31db192c3019389896e4")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced31f6192c3019389896ed"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced31f6192c3019389896ec")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f4"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced31f6192c3019389896f3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced31f6192c3019389896fb"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced31f6192c3019389896fa")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced3209192c301938989702"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced3209192c301938989701")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced3211192c301938989709"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced3211192c301938989708")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced3211192c301938989710"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced3211192c30193898970f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5ced3211192c301938989717"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5ced3211192c301938989716")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce3"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cede35b1a3a851c305bbce2")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cee165f192c3020467046cd"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cee165f192c3020467046cc")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cee1667192c3020467046d5"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cee1667192c3020467046d4")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cee1684192c3020467046dc"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cee1684192c3020467046db")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454c8"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cee27c9192c30216e1454c7")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454d0"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cee27cd192c30216e1454cf")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c40"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef3f693e31d3a4b72c3c3f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411686"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef402a3e31d3a4d9411685")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d941168e"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef405e3e31d3a4d941168d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411695"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef40c33e31d3a4d9411694")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af27"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef41dc3e31d3a4e867af26")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef45503e31d3a527350745"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef45503e31d3a527350744")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef465b3e31d3a52735074d"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef465b3e31d3a52735074c")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350754"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef472a3e31d3a527350753")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075b"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef472f3e31d3a52735075a")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350762"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef47bc3e31d3a527350761")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef48553e31d3a527350769"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef48553e31d3a527350768")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef48b43e31d3a527350770"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef48b43e31d3a52735076f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f4"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef86b43e31d3a789c6a3f3")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad75f"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef86ef3e31d3a807aad75e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad767"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef87423e31d3a807aad766")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad76e"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef874f3e31d3a807aad76d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c210"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef87833e31d3a816a0c20f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f51"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef88173e31d3a81ac93f50")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b48"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef889f3e31d3a824589b47")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e8489"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef89393e31d3a82c4e8488")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eea9"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef8c3a3e31d3a84198eea8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb1"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef8d133e31d3a84198eeb0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eeb8"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef8e143e31d3a84198eeb7")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eec0"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef8e293e31d3a84198eebf")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526b7"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef8ee23e31d3a86c5526b6")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab786"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cef903b3e31d3a875dab785")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf0"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cef9f983e31d3a906437cef")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebca"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cefc81f3e31d3aa5c18ebc9")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce1"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf06d3a3e31d3ae4776dce0")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dce9"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf06d423e31d3ae4776dce8")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcf0"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf06d523e31d3ae4776dcef")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d2f"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf089421a3a85ce68e20d2e")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc823e"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf08e6b1a3a85ce8ebc823d")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8246"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cf090151a3a85ce8ebc8245")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf323309c8d15066329d518"),
    lname: "双流站",
    city: DBRef("city", ObjectId("5cf323309c8d15066329d517")),
    _class: "com.pu.carrent.entity.Location"
} ]);
db.getCollection("location").insert([ {
    _id: ObjectId("5cf323359c8d15066329d520"),
    lname: "北京站",
    city: DBRef("city", ObjectId("5cf323359c8d15066329d51f")),
    _class: "com.pu.carrent.entity.Location"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for province
// ----------------------------
db.getCollection("province").drop();
db.createCollection("province");

// ----------------------------
// Documents of province
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("province").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a2"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8aa"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4cb"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e2"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3ea"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3f8"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d3ff"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd398b080981016cb69d406"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bc5"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc41"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e0"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf7545d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02d7"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02df"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e6"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02ed"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02f5"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa01d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f479"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234ca8"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95de"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7264"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef14"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f4"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea7d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd0"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd81c6093c5720bbdcf4833"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf483b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe02"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe11"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290e5"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290ed"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205af"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509cd"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cdb675c54b58604f1e085c1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c3"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de39"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb4d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfb5"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d4"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c3"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce4a4f856c40e0546616126"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce4a70156c40e055c848487"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce4a75556c40e05646343c3"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956a7"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fbb"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf8e"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf96"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab1c"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab24"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a99"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aa8"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3aaf"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3ab6"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19e7"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce8b55756c40e10b267807b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add0"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e242"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a385"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75aa"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ce9f7105f953835730b163b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286ec"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f4"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4df"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca519192c300f59888d6f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca522192c300f59888d77"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca681192c300f59888d7e"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca685192c300f59888d86"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888d8d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888d94"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888d9b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888da2"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888da9"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca738192c300f59888db0"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca73a192c300f59888db7"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dbe"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dc5"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06842"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06851"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06858"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06866"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686c"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06874"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2200"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca938192c300fa22b2208"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca957192c300fa22b220f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2216"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2224"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b2f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9c6192c300fb4a89b38"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9c6192c300fb4a89b37"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b45"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b4c"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b50"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b61"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b67"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b6f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb75b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb763"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76a"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb771"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb778"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77f"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb786"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb78d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb794"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb79b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a2"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7a9"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b0"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7b7"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7be"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e2"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2ea"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2f8"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef2ff"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef306"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef30d"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef314"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef31b"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa949"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa951"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c4"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f66"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cecfeb5192c3015e010289c"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced31db192c3019389896e3"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced31f6192c3019389896eb"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f2"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f9"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced3209192c301938989700"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced3211192c301938989707"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced3211192c30193898970e"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5ced3211192c301938989715"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce1"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cee165f192c3020467046cb"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cee1667192c3020467046d3"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cee1684192c3020467046da"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454c6"),
    pname: "四川省",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454ce"),
    pname: "北京市",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c3e"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411684"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d941168c"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411693"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af25"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef45503e31d3a527350743"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef465b3e31d3a52735074b"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350752"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef472f3e31d3a527350759"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350760"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef48553e31d3a527350767"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef48b43e31d3a52735076e"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f2"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad75d"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad765"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad76c"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c20e"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f4f"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b46"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e8487"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eea7"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeaf"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eeb6"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eebe"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526b5"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab784"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cee"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebc8"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf06d393e31d3ae4776dcdf"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dce7"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcee"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d2d"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc823c"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8244"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf323309c8d15066329d516"),
    pname: "四川",
    _class: "com.pu.carrent.entity.Province"
} ]);
db.getCollection("province").insert([ {
    _id: ObjectId("5cf323359c8d15066329d51e"),
    pname: "北京",
    _class: "com.pu.carrent.entity.Province"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("user").insert([ {
    _id: ObjectId("5ceca519192c300f59888d76"),
    userid: NumberInt("2"),
    username: "test",
    email: "test",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5ceca522192c300f59888d7c")),
    carRecord: DBRef("car", ObjectId("5ceca522192c300f59888d7d")),
    browseDate: ISODate("2019-05-28T03:04:02.079Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ceca8e8192c300fa22b2207"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5ceca95b192c300fa22b2229")),
    carRecord: DBRef("car", ObjectId("5ceca95b192c300fa22b222a")),
    browseDate: ISODate("2019-05-28T03:22:03.9Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ceca9a8192c300fb4a89b36"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecaad2192c300fb4a89b74")),
    carRecord: DBRef("car", ObjectId("5cecaad2192c300fb4a89b75")),
    browseDate: ISODate("2019-05-28T03:28:18.254Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb762"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecab27192c300fd02bb7c3")),
    carRecord: DBRef("car", ObjectId("5cecab27192c300fd02bb7c4")),
    browseDate: ISODate("2019-05-28T03:29:43.456Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e9"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecb022192c300fec9ef320")),
    carRecord: DBRef("car", ObjectId("5cecb022192c300fec9ef321")),
    browseDate: ISODate("2019-05-28T03:50:58.216Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa950"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecf44d192c3014e58aa94e")),
    carRecord: DBRef("car", ObjectId("5cecf44d192c3014e58aa94f")),
    browseDate: ISODate("2019-05-28T08:41:49.593Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa958"),
    userid: NumberInt("2"),
    username: "test",
    email: "test",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5cecf461192c3014e58aa956")),
    carRecord: DBRef("car", ObjectId("5cecf461192c3014e58aa957")),
    browseDate: ISODate("2019-05-28T08:42:09.563Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878cb"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecfd4e192c3015bfd878c9")),
    carRecord: DBRef("car", ObjectId("5cecfd4e192c3015bfd878ca")),
    browseDate: ISODate("2019-05-28T09:20:14.439Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f6d"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecfdb5192c3015cb5e1f6b")),
    carRecord: DBRef("car", ObjectId("5cecfdb5192c3015cb5e1f6c")),
    browseDate: ISODate("2019-05-28T09:21:57.467Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cecfeb5192c3015e01028a3"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5cecfeb5192c3015e01028a1")),
    carRecord: DBRef("car", ObjectId("5cecfeb5192c3015e01028a2")),
    browseDate: ISODate("2019-05-28T09:26:13.738Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5ced31db192c3019389896ea"),
    userid: NumberInt("1"),
    username: "pwb",
    email: "101721@qq.com",
    phone: "199",
    password: "970423",
    info: "test",
    userType: DBRef("userType", ObjectId("5ced3211192c30193898971a")),
    carRecord: DBRef("car", ObjectId("5ced3211192c30193898971b")),
    browseDate: ISODate("2019-05-28T13:05:21.738Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce8"),
    userid: NumberInt("2"),
    username: "test",
    email: "test",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5cede35b1a3a851c305bbce6")),
    carRecord: DBRef("car", ObjectId("5cede35b1a3a851c305bbce7")),
    browseDate: ISODate("2019-05-29T01:41:47.462Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cee165f192c3020467046d2"),
    userid: NumberInt("2"),
    username: "test",
    email: "test",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5cee1684192c3020467046df")),
    carRecord: DBRef("car", ObjectId("5cee1684192c3020467046e0")),
    browseDate: ISODate("2019-05-29T05:20:04.631Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454cd"),
    userid: NumberInt("2"),
    username: "test",
    email: "test",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5cee27cd192c30216e1454d3")),
    carRecord: DBRef("car", ObjectId("5cee27cd192c30216e1454d4")),
    browseDate: ISODate("2019-05-29T06:33:49.494Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c45"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    userType: DBRef("userType", ObjectId("5cef3f693e31d3a4b72c3c43")),
    carRecord: DBRef("car", ObjectId("5cef3f693e31d3a4b72c3c44")),
    browseDate: ISODate("2019-05-30T02:26:49.749Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d941168b"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    userType: DBRef("userType", ObjectId("5cef40c33e31d3a4d9411698")),
    carRecord: DBRef("car", ObjectId("5cef40c33e31d3a4d9411699")),
    browseDate: ISODate("2019-05-30T02:32:35.446Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af2c"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    userType: DBRef("userType", ObjectId("5cef41dc3e31d3a4e867af2a")),
    carRecord: DBRef("car", ObjectId("5cef41dc3e31d3a4e867af2b")),
    browseDate: ISODate("2019-05-30T02:37:16.452Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef45503e31d3a52735074a"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    userType: DBRef("userType", ObjectId("5cef48b43e31d3a527350773")),
    carRecord: DBRef("car", ObjectId("5cef48b43e31d3a527350774")),
    browseDate: ISODate("2019-05-30T03:06:28.092Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f9"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef86b43e31d3a789c6a3f7")),
    carRecord: DBRef("car", ObjectId("5cef86b43e31d3a789c6a3f8")),
    browseDate: ISODate("2019-05-30T07:31:00.44Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad764"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef874f3e31d3a807aad771")),
    carRecord: DBRef("car", ObjectId("5cef874f3e31d3a807aad772")),
    browseDate: ISODate("2019-05-30T07:33:35.538Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c215"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef87833e31d3a816a0c213")),
    carRecord: DBRef("car", ObjectId("5cef87833e31d3a816a0c214")),
    browseDate: ISODate("2019-05-30T07:34:27.377Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f56"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef88173e31d3a81ac93f54")),
    carRecord: DBRef("car", ObjectId("5cef88173e31d3a81ac93f55")),
    browseDate: ISODate("2019-05-30T07:36:55.253Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b4d"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef889f3e31d3a824589b4b")),
    carRecord: DBRef("car", ObjectId("5cef889f3e31d3a824589b4c")),
    browseDate: ISODate("2019-05-30T07:39:11.054Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e848e"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef89393e31d3a82c4e848c")),
    carRecord: DBRef("car", ObjectId("5cef89393e31d3a82c4e848d")),
    browseDate: ISODate("2019-05-30T07:41:45.797Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eeae"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef8d133e31d3a84198eeb4")),
    carRecord: DBRef("car", ObjectId("5cef8d133e31d3a84198eeb5")),
    browseDate: ISODate("2019-05-30T07:58:11.769Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eebd"),
    userid: NumberInt("5"),
    username: "user2",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    userType: DBRef("userType", ObjectId("5cef8e293e31d3a84198eec3")),
    carRecord: DBRef("car", ObjectId("5cef8e293e31d3a84198eec4")),
    browseDate: ISODate("2019-05-30T08:02:49.085Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526bc"),
    userid: NumberInt("5"),
    username: "user2",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    userType: DBRef("userType", ObjectId("5cef8ee23e31d3a86c5526ba")),
    carRecord: DBRef("car", ObjectId("5cef8ee23e31d3a86c5526bb")),
    browseDate: ISODate("2019-05-30T08:05:54.234Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab78b"),
    userid: NumberInt("5"),
    username: "user2",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    userType: DBRef("userType", ObjectId("5cef903b3e31d3a875dab789")),
    carRecord: DBRef("car", ObjectId("5cef903b3e31d3a875dab78a")),
    browseDate: ISODate("2019-05-30T08:11:39.9Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf5"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cef9f983e31d3a906437cf3")),
    carRecord: DBRef("car", ObjectId("5cef9f983e31d3a906437cf4")),
    browseDate: ISODate("2019-05-30T09:17:12.656Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebcf"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cefc81f3e31d3aa5c18ebcd")),
    carRecord: DBRef("car", ObjectId("5cefc81f3e31d3aa5c18ebce")),
    browseDate: ISODate("2019-05-30T12:10:07.944Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce6"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cf06d523e31d3ae4776dcf3")),
    carRecord: DBRef("car", ObjectId("5cf06d523e31d3ae4776dcf4")),
    browseDate: ISODate("2019-05-30T23:54:58.627Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d34"),
    userid: NumberInt("2"),
    username: "user1",
    email: "test@qq.com",
    phone: "19982868613",
    password: "1234",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cf089421a3a85ce68e20d32")),
    carRecord: DBRef("car", ObjectId("5cf089421a3a85ce68e20d33")),
    browseDate: ISODate("2019-05-31T01:54:10.113Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cf08e6c1a3a85ce8ebc8243"),
    userid: NumberInt("6"),
    username: "usr",
    phone: "19982868613",
    password: "12345",
    userType: DBRef("userType", ObjectId("5cf090151a3a85ce8ebc8249")),
    carRecord: DBRef("car", ObjectId("5cf090151a3a85ce8ebc824a")),
    browseDate: ISODate("2019-05-31T02:23:17.22Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("5cf323309c8d15066329d51d"),
    userid: NumberInt("1"),
    username: "admin",
    email: "test@qq.com",
    phone: "15680617614",
    password: "970423",
    icon: "true",
    userType: DBRef("userType", ObjectId("5cf323359c8d15066329d523")),
    carRecord: DBRef("car", ObjectId("5cf323359c8d15066329d524")),
    browseDate: ISODate("2019-06-02T01:15:33.454Z"),
    _class: "com.pu.carrent.entity.User"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for userType
// ----------------------------
db.getCollection("userType").drop();
db.createCollection("userType");

// ----------------------------
// Documents of userType
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("carrent");
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd24cc42a142608e58dd8a7"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd24cd22a142608e58dd8af"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd24d882a142608edaaf4d0"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd3989e80981016cb69d3e7"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd398a180981016cb69d3ef"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd398a480981016cb69d3f6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd398a980981016cb69d3fd"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd398ac80981016cb69d404"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd398b080981016cb69d40b"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd41dd41fe8481c87d78bca"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4df001fe84820a077cc46"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4df6d1fe84820b591d9e5"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4dfb41fe84820bbf75462"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e1981fe84820fa4c02dc"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02e4"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e1a11fe84820fa4c02eb"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e1a91fe84820fa4c02f2"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e1c61fe84820fa4c02fa"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e25a1fe8482102bfa022"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e3181fe8482110d6f47e"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e34c1fe8482114234cad"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e3f31fe8482126ac95e3"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e43c1fe848212f6484c6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e4581fe84821339a7269"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd4e5651fe8482147a6ef19"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd677858692d402fa0bb5a6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd7d0a548fd720669cfee5f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd819d493c5720b9e7004f9"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd81b1893c5720bae99ea82"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd81c0693c5720bba424bd5"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd81c6193c5720bbdcf4838"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd81c6e93c5720bbdcf4840"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd90fd70cc3c202d55efe07"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd90fe40cc3c202d55efe0f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd90fe70cc3c202d55efe16"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd928440cc3c203d53290ea"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd928620cc3c203d53290f2"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd92df90cc3c204178205b4"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cd92ec20cc3c2042ef509d2"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cdb675d54b58604f1e085c6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cdb6bac54b586052fef78c8"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce35a6048fd7203eb65de3e"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce35b3d48fd72040b4aeb52"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce35ba348fd72041260bfba"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce35bf448fd72041a4938d9"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce4a00456c40e05080014c8"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce4a4f856c40e054661612b"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce4a70156c40e055c84848c"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce4a75656c40e05646343c8"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce4ad4756c40e05923956ac"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7de9256c40e0c52a26fc0"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7e1ac56c40e0cad6ddf93"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7e1b356c40e0cad6ddf9b"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7e2e056c40e0cb4c8ab21"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7e2e356c40e0cb4c8ab29"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fa5656c40e0ced3a3a9e"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fa8656c40e0ced3a3aa6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fa8d56c40e0ced3a3aad"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fa9456c40e0ced3a3ab4"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fa9656c40e0ced3a3abb"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce7fe9256c40e0da8bc19ec"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce8b55856c40e10b2678080"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce8b72056c40e10bcc6add5"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce8b7c656c40e10cdf0e247"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce8b82f56c40e10d698a38a"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce9f6b75f953835574f75af"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ce9f7105f953835730b1640"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cea995f5f95383c33b286f1"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cea99635f95383c33b286f9"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca32c192c300ef8d1f4e4"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca519192c300f59888d74"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca522192c300f59888d7c"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca681192c300f59888d83"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca685192c300f59888d8b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888d92"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888d99"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888da0"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888da7"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888dae"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca738192c300f59888db5"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca73a192c300f59888dbc"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca73b192c300f59888dc3"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca73c192c300f59888dca"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b3192c300f82d06847"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b5192c300f82d0684f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06856"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0685d"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06864"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d0686b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06872"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca7b9192c300f82d06879"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca8e7192c300fa22b2205"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca938192c300fa22b220d"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca957192c300fa22b2214"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b221c"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2222"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca95b192c300fa22b2229"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9a7192c300fb4a89b34"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b3f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9c7192c300fb4a89b43"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9cb192c300fb4a89b4a"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b53"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b58"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b5f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b66"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ceca9d6192c300fb4a89b6d"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaad2192c300fb4a89b74"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaae7192c300fd02bb760"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaae9192c300fd02bb768"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb76f"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb776"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb77d"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb784"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaee192c300fd02bb78b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaaf0192c300fd02bb792"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab02192c300fd02bb799"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab05192c300fd02bb7a0"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab08192c300fd02bb7a7"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab0c192c300fd02bb7ae"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab0f192c300fd02bb7b5"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab24192c300fd02bb7bc"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecab27192c300fd02bb7c3"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecac4e192c300fec9ef2e7"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecac51192c300fec9ef2ef"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecac54192c300fec9ef2f6"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecac57192c300fec9ef2fd"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaea6192c300fec9ef304"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaef3192c300fec9ef30b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaef6192c300fec9ef312"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecaef8192c300fec9ef319"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecb022192c300fec9ef320"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecf44d192c3014e58aa94e"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecf461192c3014e58aa956"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecfd4e192c3015bfd878c9"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecfdb5192c3015cb5e1f6b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cecfeb5192c3015e01028a1"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced31db192c3019389896e8"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f0"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896f7"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced31f6192c3019389896fe"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced3209192c301938989705"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced3211192c30193898970c"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced3211192c301938989713"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5ced3211192c30193898971a"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cede35b1a3a851c305bbce6"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cee165f192c3020467046d0"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cee1667192c3020467046d8"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cee1684192c3020467046df"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cee27c9192c30216e1454cb"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cee27cd192c30216e1454d3"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef3f693e31d3a4b72c3c43"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef402a3e31d3a4d9411689"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef405e3e31d3a4d9411691"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef40c33e31d3a4d9411698"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef41dc3e31d3a4e867af2a"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef45503e31d3a527350748"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef465b3e31d3a527350750"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef472a3e31d3a527350757"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef472f3e31d3a52735075e"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef47bc3e31d3a527350765"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef48553e31d3a52735076c"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef48b43e31d3a527350773"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef86b43e31d3a789c6a3f7"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef86ef3e31d3a807aad762"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef87423e31d3a807aad76a"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef874f3e31d3a807aad771"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef87833e31d3a816a0c213"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef88173e31d3a81ac93f54"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef889f3e31d3a824589b4b"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef89393e31d3a82c4e848c"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef8c3a3e31d3a84198eeac"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef8d133e31d3a84198eeb4"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef8e143e31d3a84198eebb"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef8e293e31d3a84198eec3"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef8ee23e31d3a86c5526ba"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef903b3e31d3a875dab789"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cef9f983e31d3a906437cf3"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cefc81f3e31d3aa5c18ebcd"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf06d3a3e31d3ae4776dce4"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf06d423e31d3ae4776dcec"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf06d523e31d3ae4776dcf3"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf089421a3a85ce68e20d32"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf08e6b1a3a85ce8ebc8241"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf090151a3a85ce8ebc8249"),
    utypename: "用户",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf323309c8d15066329d51b"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
db.getCollection("userType").insert([ {
    _id: ObjectId("5cf323359c8d15066329d523"),
    utypename: "管理员",
    _class: "com.pu.carrent.entity.UserType"
} ]);
session.commitTransaction(); session.endSession();
