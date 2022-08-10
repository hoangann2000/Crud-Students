//Tạo đối tượng
var sinhVien = {
    //thuộc tính (các thông tin cần lưu trữ)
    //ten : giá trị
    maSV: "sv001",
    tenSV: "Nguyễn Thị Sinh Viên",
    loaiSV: "Nghèo",
    diemToan: 10,
    diemVan: 9,

    //Phương thức (các hàm cần xử lý liên quan tới đối tượng - hành động của đối tượng)
    //this : đại diện cho đối tương sinhVien (thuộc tính, phương thức của đối tượng nào thì mới gọi dùng của đối tượng đó)
    showInfo(){
        console.log(this.tenSV)
    }
}

//Sử dụng đối tượng
//Truy xuất thuộc tính
console.log(sinhVien.diemToan);

console.log(sinhVien["diemToan"]);

sinhVien.showInfo();


var sinhVien2 = {
    maSV: "sv002",
    tenSV: "Nguyễn Thị Sinh Viên 2",
    loaiSV: "Nghèo",
    diemToan: 10,
    diemVan: 9,
    showInfo(){
        console.log(this.tenSV)
    }
}

var sinhVien3 = {
    maSV: "sv003",
    tenSV: "Nguyễn Thị Sinh Viên 2",
    loaiSV: "Nghèo",
    diemToan: 10,
    diemVan: 9,
    showInfo(){
        console.log(this.tenSV)
    }
}


/**
 * Lớp đối tượng (Class)
 * Mẫu chung cho 1 nhóm đối tượng có các thuộc tính, phương thức giống nhau
 * 
 */
// camel case: hienThi
// Pascal case : SinhVien
//ES5

//hàm ẩn danh 
// function(){
// }

// document.getElementById("id").onclick = function(){
//     //code xử lý
// }

// document.getElementById("id").onclick = myFunction;


// cách khai báo hàm

//C1 : dùng từ khóa khai báo (Function expression)
// function name(params) {
    
// }

//C2: Function literal
// var myFunction = function(){

// }
//Tạo 
function SinhVien(ma,ten) {
    //thuộc tính (Property)
    //this giúp truy xuât thuộc tính của Class
    this.maSV = ma;
    this.tenSV = ten;

    //Phương thức (method)
    this.showInfo = function(){
        console.log(this.tenSV);
    }
}
//Dùng
//Tạo thể hiện (instance) của lớp đối tượng
// ES5: phải khai báo this cho thuộc tính và tạo thể hiện của Class

var sv1 = new SinhVien("sv001","Sinh Vien 1");
sv1.showInfo();

var sv2 = new SinhVien("sv002", "Sinh Vien 2");
sv2.showInfo();
