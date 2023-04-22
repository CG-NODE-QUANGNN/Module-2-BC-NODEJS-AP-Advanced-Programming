var viettel = ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039'];
var mobifone = ['089', ' 090', '093', '070', '079', '077', '076', '078'];
var Vinaphone = ['088', '091', '094', '083', '084', '085', '081', '082'];
var phoneStr = '0861234567, 0961234567, 0971234567, 0981234567, 0321234567, 0331234567, 0341234567, 0351234567, 0361234567, 0371234567, 0891234567, 0901234567, 0931234567, 0701234567, 0791234567, 0771234567, 0761234567, 0781234567, 0881234567, 0911234567, 0941234567, 0831234567, 0841234567, 0851234567, 0811234567, 0821234567';
var phones = phoneStr.split(", ");
var viettelPhones = [];
var mobifonePhones = [];
var vinaphonePhones = [];
for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
    var phone = phones_1[_i];
    console.log(phone.substring(0, 3));
    if (viettel.indexOf(phone.substring(0, 3)) >= 0) {
        viettelPhones.push(phone);
    }
    else if (mobifone.indexOf(phone.substring(0, 3)) >= 0) {
        mobifonePhones.push(phone);
    }
    else if (Vinaphone.indexOf(phone.substring(0, 3)) >= 0) {
        vinaphonePhones.push(phone);
    }
}
console.log(viettelPhones);
console.log(mobifonePhones);
console.log(vinaphonePhones);
