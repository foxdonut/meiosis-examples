const yslashn = require("static-sum-type/modules/yslashn")

module.exports = {
  Loaded: yslashn.maybe("Loaded"),
  Success: yslashn.maybe("Success"),
  Image: yslashn.maybe("Image")
}
