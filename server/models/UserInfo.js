const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserInfoSchema = new schema(
  {
    user: {
      type: schema.Types.ObjectId,
      ref: "users",
    },
    hometown: {
      type: String,
    },
    seftDescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userInfors", UserInfoSchema);
