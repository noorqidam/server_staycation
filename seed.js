var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  // "mongodb://127.0.0.1:27017/db_staycation",
  "mongodb+srv://noorqidam:Aguero20@cluster0.bnrle.mongodb.net/db_staycation?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5f4e2bfc3400193b906c9d85"),
        name: "Houses with beauty backyard",
        itemId: [
          { _id: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a") },
          { _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a") },
          { _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e") },
          { _id: mongoose.Types.ObjectId("5f4e30423400193b906c9da2") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2c0a3400193b906c9d86"),
        name: "Hotels with large living room",
        itemId: [
          { _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db3") },
          { _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db7") },
          { _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbb") },
          { _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dbf") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2c163400193b906c9d87"),
        name: "Apartment with kitchen set",
        itemId: [
          { _id: mongoose.Types.ObjectId("5f4e43213400193b906c9dc3") },
          { _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc7") },
          { _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcb") },
          { _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dcf") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // houses
      // done
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
        title: "Luxury Villa",
        price: 20,
        sumBooking: 0,
        country: "Indonesia",
        city: "Bali",
        isPopular: true,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8b") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8c") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8d") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e2dac3400193b906c9d8e") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2db73400193b906c9d8f") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2dc23400193b906c9d90") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2dcf3400193b906c9d91") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2ddb3400193b906c9d92") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2de63400193b906c9d93") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2df23400193b906c9d94") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2e003400193b906c9d95") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5f4e2f6f3400193b906c9d96") },
          { _id: mongoose.Types.ObjectId("5f4e2f7d3400193b906c9d97") },
          { _id: mongoose.Types.ObjectId("5f4e2f8f3400193b906c9d98") },
          { _id: mongoose.Types.ObjectId("5f4e2f9c3400193b906c9d99") },
        ],
        categoryId: mongoose.Types.ObjectId("5f4e2bfc3400193b906c9d85"),
      },
      // done
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
        title: "Khayangan Estate",
        price: 30,
        sumBooking: 0,
        country: "Indonesia",
        city: "Bali",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9b") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9c") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9d") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e30893400193b906c9da6") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e309c3400193b906c9da7") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30a73400193b906c9da8") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30b13400193b906c9da9") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30bc3400193b906c9daa") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30c53400193b906c9dab") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30d23400193b906c9dac") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30da3400193b906c9dad") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5f4e40823400193b906c9dae") },
          { _id: mongoose.Types.ObjectId("5f4e40b63400193b906c9daf") },
          { _id: mongoose.Types.ObjectId("5f4e40cb3400193b906c9db0") },
          { _id: mongoose.Types.ObjectId("5f4e40ef3400193b906c9db1") },
        ],
        categoryId: mongoose.Types.ObjectId("5f4e2bfc3400193b906c9d85"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
        title: "Puncak Resort",
        price: 35,
        sumBooking: 1,
        country: "Indonesia",
        city: "Bogor",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9f") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9da0") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9da1") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e47cb3400193b906c9dd5") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e47e13400193b906c9dd6") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e47f33400193b906c9dd7") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48033400193b906c9dd8") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48123400193b906c9dd9") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48223400193b906c9dda") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e482c3400193b906c9ddb") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48383400193b906c9ddc") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5f4e410d3400193b906c9db2") },
          { _id: mongoose.Types.ObjectId("5f4e4c2d3400193b906c9de5") },
          { _id: mongoose.Types.ObjectId("5f4e4d413400193b906c9de6") },
          { _id: mongoose.Types.ObjectId("5f4ef5d73400193b906c9dea") },
        ],
        categoryId: mongoose.Types.ObjectId("5f4e2bfc3400193b906c9d85"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
        title: "Padessa Maison",
        price: 30,
        sumBooking: 0,
        country: "Indonesia",
        city: "Bandung",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da3") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da4") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da5") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e48653400193b906c9ddd") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48743400193b906c9dde") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e487d3400193b906c9ddf") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48873400193b906c9de0") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48903400193b906c9de1") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48a13400193b906c9de2") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48aa3400193b906c9de3") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e48b83400193b906c9de4") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5f4e50f63400193b906c9de7") },
          { _id: mongoose.Types.ObjectId("5f4e510f3400193b906c9de8") },
          { _id: mongoose.Types.ObjectId("5f4e512c3400193b906c9de9") },
          { _id: mongoose.Types.ObjectId("5f4ef5f93400193b906c9deb") },
        ],
        categoryId: mongoose.Types.ObjectId("5f4e2bfc3400193b906c9d85"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db3"),
        title: "Cattelya",
        price: 20,
        sumBooking: 0,
        country: "Indonesia",
        city: "Medan",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db4") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db5") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db6") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c0a3400193b906c9d86"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db7"),
        title: "Classic Mode",
        price: 30,
        sumBooking: 0,
        country: "Indonesia",
        city: "Semarang",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db8") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db9") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42583400193b906c9dba") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c0a3400193b906c9d86"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbb"),
        title: "Nature Room",
        price: 35,
        sumBooking: 0,
        country: "Indonesia",
        city: "Bogor",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbc") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbd") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbe") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c0a3400193b906c9d86"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dbf"),
        title: "Dress Atractive",
        price: 40,
        sumBooking: 0,
        country: "Indonesia",
        city: "Yogyakarta",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dc0") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dc1") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e42e93400193b906c9dc2") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c0a3400193b906c9d86"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e43213400193b906c9dc3"),
        title: "Medium Model",
        price: 25,
        sumBooking: 0,
        country: "Indonesia",
        city: "Depok",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e43213400193b906c9dc4") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43223400193b906c9dc5") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43223400193b906c9dc6") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c163400193b906c9d87"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc7"),
        title: "Modern Shinning",
        price: 30,
        sumBooking: 0,
        country: "Indonesia",
        city: "Cimahi",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc8") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc9") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43613400193b906c9dca") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c163400193b906c9d87"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcb"),
        title: "Olympic Dark",
        price: 45,
        sumBooking: 0,
        country: "Indonesia",
        city: "Purwkarta",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcc") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcd") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dce") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c163400193b906c9d87"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dcf"),
        title: "Minimalist",
        price: 35,
        sumBooking: 0,
        country: "Indonesia",
        city: "Jakarta",
        isPopular: false,
        description:
          "Minimal techno is a mnimalist subgenre of techno music. It is charaterized by a stripped-down aesthethic that exploits the use of repetition and understand development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd0") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd1") },
          // done
          { _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd2") },
        ],
        featureId: [],
        activityId: [],
        categoryId: mongoose.Types.ObjectId("5f4e2c163400193b906c9d87"),
      },
    ],
  },
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8b"),
        imageUrl: "images/1598958849907.png",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8c"),
        imageUrl: "images/1598958849920.png",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5f4e2d023400193b906c9d8d"),
        imageUrl: "images/1598958849959.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9b"),
        imageUrl: "images/1598959564949.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9c"),
        imageUrl: "images/1598959564952.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9d"),
        imageUrl: "images/1598959564953.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9f"),
        imageUrl: "images/1598959628134.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9da0"),
        imageUrl: "images/1598959628135.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9da1"),
        imageUrl: "images/1598959628137.png",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da3"),
        imageUrl: "images/1598959682649.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da4"),
        imageUrl: "images/1598959682650.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5f4e30433400193b906c9da5"),
        imageUrl: "images/1598959682652.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db4"),
        imageUrl: "images/1598964266950.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db5"),
        imageUrl: "images/1598964266957.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e422b3400193b906c9db6"),
        imageUrl: "images/1598964266976.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db8"),
        imageUrl: "images/1598964312309.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42583400193b906c9db9"),
        imageUrl: "images/1598964312319.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42583400193b906c9dba"),
        imageUrl: "images/1598964312330.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbc"),
        imageUrl: "images/1598964387293.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbd"),
        imageUrl: "images/1598964387296.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42a33400193b906c9dbe"),
        imageUrl: "images/1598964387299.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dc0"),
        imageUrl: "images/1598964456430.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42e83400193b906c9dc1"),
        imageUrl: "images/1598964456433.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e42e93400193b906c9dc2"),
        imageUrl: "images/1598964456449.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43213400193b906c9dc4"),
        imageUrl: "images/1598964513734.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43223400193b906c9dc5"),
        imageUrl: "images/1598964513739.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43223400193b906c9dc6"),
        imageUrl: "images/1598964513741.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc8"),
        imageUrl: "images/1598964576592.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43603400193b906c9dc9"),
        imageUrl: "images/1598964576597.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43613400193b906c9dca"),
        imageUrl: "images/1598964576599.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcc"),
        imageUrl: "images/1598964695150.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dcd"),
        imageUrl: "images/1598964695151.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e43d73400193b906c9dce"),
        imageUrl: "images/1598964695155.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd0"),
        imageUrl: "images/1598964748969.png",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd1"),
        imageUrl: "images/1598964748975.jpeg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e440d3400193b906c9dd2"),
        imageUrl: "images/1598964748987.jpeg",
      },
    ],
  },
  // end image
  // start feature
  {
    model: "Feature",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2dac3400193b906c9d8e"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/1598959020571.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2db73400193b906c9d8f"),
        name: "living room",
        qty: 5,
        imageUrl: "images/1598959031736.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2dc23400193b906c9d90"),
        name: "bathroom",
        qty: 2,
        imageUrl: "images/1598959042324.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2dcf3400193b906c9d91"),
        name: "dinning room",
        qty: 2,
        imageUrl: "images/1598959055652.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2ddb3400193b906c9d92"),
        name: "wifi mbp/s",
        qty: 5,
        imageUrl: "images/1598959067280.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2de63400193b906c9d93"),
        name: "air conditioner",
        qty: 3,
        imageUrl: "images/1598959078203.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2df23400193b906c9d94"),
        name: "refrigerator",
        qty: 5,
        imageUrl: "images/1598959090382.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e2e003400193b906c9d95"),
        name: "television",
        qty: 2,
        imageUrl: "images/1598959104201.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30893400193b906c9da6"),
        name: "bedroom",
        qty: 5,
        imageUrl: "images/1598959753824.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e309c3400193b906c9da7"),
        name: "living room",
        qty: 7,
        imageUrl: "images/1598959772235.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30a73400193b906c9da8"),
        name: "bathroom",
        qty: 3,
        imageUrl: "images/1598959783965.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30b13400193b906c9da9"),
        name: "dining room",
        qty: 2,
        imageUrl: "images/1598959793262.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30bc3400193b906c9daa"),
        name: "wifi mbp/s",
        qty: 3,
        imageUrl: "images/1598959804135.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30c53400193b906c9dab"),
        name: "air conditioner",
        qty: 3,
        imageUrl: "images/1598959813813.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30d23400193b906c9dac"),
        name: "refrigerator",
        qty: 2,
        imageUrl: "images/1598959826218.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e30da3400193b906c9dad"),
        name: "television",
        qty: 3,
        imageUrl: "images/1598959834485.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      // item 3
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e47cb3400193b906c9dd5"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/1598965707652.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e47e13400193b906c9dd6"),
        name: "living room",
        qty: 4,
        imageUrl: "images/1598965729373.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e47f33400193b906c9dd7"),
        name: "bathroom",
        qty: 3,
        imageUrl: "images/1598965747889.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48033400193b906c9dd8"),
        name: "dining room",
        qty: 3,
        imageUrl: "images/1598965763849.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48123400193b906c9dd9"),
        name: "wifi mbp/s",
        qty: 2,
        imageUrl: "images/1598965778086.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48223400193b906c9dda"),
        name: "air conditioner",
        qty: 2,
        imageUrl: "images/1598965794888.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e482c3400193b906c9ddb"),
        name: "refrigerator",
        qty: 1,
        imageUrl: "images/1598965804324.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48383400193b906c9ddc"),
        name: "television",
        qty: 2,
        imageUrl: "images/1598965816044.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      // item 4
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48653400193b906c9ddd"),
        name: "bedroom",
        qty: 4,
        imageUrl: "images/1598965861615.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48743400193b906c9dde"),
        name: "living room",
        qty: 6,
        imageUrl: "images/1598965876360.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e487d3400193b906c9ddf"),
        name: "bathroom",
        qty: 3,
        imageUrl: "images/1598965885945.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48873400193b906c9de0"),
        name: "dining room",
        qty: 3,
        imageUrl: "images/1598965895797.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48903400193b906c9de1"),
        name: "wifi mbp/s",
        qty: 2,
        imageUrl: "images/1598965904074.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48a13400193b906c9de2"),
        name: "air conditioner",
        qty: 3,
        imageUrl: "images/1598965921971.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48aa3400193b906c9de3"),
        name: "refrigerator",
        qty: 2,
        imageUrl: "images/1598965930931.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5f4e48b83400193b906c9de4"),
        name: "television",
        qty: 3,
        imageUrl: "images/1598965944398.png",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: "Activity",
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId("5f4e2f6f3400193b906c9d96"),
        name: "Pondanu Cabins",
        type: "Nature",
        imageUrl: "images/1598959471675.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2f7d3400193b906c9d97"),
        name: "Luxury",
        type: "Hotel",
        imageUrl: "images/1598959485814.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2f8f3400193b906c9d98"),
        name: "Cemara Tidar",
        type: "Villa",
        imageUrl: "images/1598959503205.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2f9c3400193b906c9d99"),
        name: "Jimbaran",
        type: "Beach",
        imageUrl: "images/1598959516133.png",
        itemId: mongoose.Types.ObjectId("5f4e2d013400193b906c9d8a"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5f4e40823400193b906c9dae"),
        name: "Herbal Insani",
        type: "Nature",
        imageUrl: "images/1598963842215.jpg",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e40b63400193b906c9daf"),
        name: "Labour Market",
        type: "Food Court",
        imageUrl: "images/1598963894538.png",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e40cb3400193b906c9db0"),
        name: "Indrayanti",
        type: "Beach",
        imageUrl: "images/1598963915809.jpg",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e40ef3400193b906c9db1"),
        name: "Bromountain",
        type: "Hotel",
        imageUrl: "images/1598963951178.jpg",
        itemId: mongoose.Types.ObjectId("5f4e2fcd3400193b906c9d9a"),
      },
      // done 3
      {
        _id: mongoose.Types.ObjectId("5f4e410d3400193b906c9db2"),
        name: "Geopark",
        type: "Beach",
        imageUrl: "images/1598963981514.png",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e4c2d3400193b906c9de5"),
        name: "Green Canyon",
        type: "Nature",
        imageUrl: "images/1598966829357.jpeg",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e4d413400193b906c9de6"),
        name: "Flying Fork",
        type: "Games",
        imageUrl: "images/1598967105507.jpg",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e50f63400193b906c9de7"),
        name: "Floating Market",
        type: "Market Shop",
        imageUrl: "images/1598968054981.jpg",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      // done 4
      {
        _id: mongoose.Types.ObjectId("5f4e510f3400193b906c9de8"),
        name: "Situ Patenggang",
        type: "Lake",
        imageUrl: "images/1598968079258.jpg",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4e512c3400193b906c9de9"),
        name: "Kawah Putih",
        type: "Nature",
        imageUrl: "images/1598968108657.jpg",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4ef5d73400193b906c9dea"),
        name: "Borobudur",
        type: "Hotel",
        imageUrl: "images/1599010263248.jpeg",
        itemId: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
      },
      {
        _id: mongoose.Types.ObjectId("5f4ef5f93400193b906c9deb"),
        name: "Santika",
        type: "Hotel",
        imageUrl: "images/1599010297302.jpeg",
        itemId: mongoose.Types.ObjectId("5f4e30423400193b906c9da2"),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5f4e454b3400193b906c9dd4"),
        bookingStartDate: "2-9-2020",
        bookingEndDate: "5-9-2020",
        invoice: 2626687,
        itemId: {
          _id: mongoose.Types.ObjectId("5f4e300c3400193b906c9d9e"),
          title: "Puncak Resort",
          price: 35,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId("5f4e454a3400193b906c9dd3"),
        payments: {
          proofPayment: "images/1598965066549.jpeg",
          bankFrom: "BCA",
          status: "Accept",
          accountHolder: "qidam",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Elfin",
        lastName: "Sanjaya",
        email: "elfinsanjaya12@gmail.com",
        phoneNumber: "082377954008",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Yein",
        lastName: "Narayana",
        email: "elfinsanjaya1207@gmail.com",
        phoneNumber: "082377954008",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e454a3400193b906c9dd3"),
        firstName: "Noor",
        lastName: "Qidam",
        email: "noorqidam@gmail.com",
        phoneNumber: "085771603597",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5f4e2c7b3400193b906c9d88"),
        nameBank: "BCA",
        nomorRekening: "74662723",
        name: "Staycation",
        imageUrl: "images/1598958715460.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5f4e2c8b3400193b906c9d89"),
        nameBank: "Mandiri",
        nomorRekening: "98667479",
        name: "Staycation",
        imageUrl: "images/1598958731048.jpg",
      },
    ],
  },
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "rahasia",
      },
    ],
  },
];
