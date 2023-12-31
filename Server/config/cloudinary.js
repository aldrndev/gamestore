const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;
if (!CLOUD_NAME || !CLOUD_API_KEY || !CLOUD_API_SECRET) {
  throw new Error(
    'Cloudinary configuration is incomplete. Please check your environment variables.'
  );
}

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'PlayerPicture',
    format: async (req, file) => {
      const format = file.originalname.split('.').pop();
      return format;
    },
    public_id: (req, file) => 'file-' + Date.now(),
  },
});

const parser = multer({ storage });

module.exports = parser;
