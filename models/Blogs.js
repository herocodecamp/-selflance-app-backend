const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    // _id: default object id,
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    mainImage: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: [],
    },
    description: {
      text: {
        type: String,
        default: "",
      },
      quotes: {
        type: [{ title: String, quotes_text: String }],
        default: [],
      },
      imageCards: {
        type: [
          {
            title: {
              type: String,
              default: "",
            },
            cardText: {
              type: String,
              default: "",
            },
            image: {
              type: String,
              default: "",
            },
          },
        ],
        default: [],
      },
    },
    summery: {
      summery_desc: String,
      keyPoints: {
        type: Array,
        default: [],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
