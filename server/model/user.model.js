import mongoose, { Schema } from mongoose

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      photo: {
        type: String,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      credit: {
        type: Number,
        default: 5,
        required: true,
      },
});

export default mongoose.model("user", userSchema);