const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    Total_Price: {
      type: Number,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    CreatedAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return new Date(timestamp).toLocaleDateString();
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
