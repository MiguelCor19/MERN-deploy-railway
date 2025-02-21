console.log(process.env.MONGODB_URI)
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/my_database";

export const PORT = process.env.PORT || 3000;
